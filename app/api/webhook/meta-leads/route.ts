import { NextRequest, NextResponse } from 'next/server';
import { createHmac } from 'crypto';

const VERIFY_TOKEN      = process.env.META_WEBHOOK_VERIFY_TOKEN!;
const PAGE_ACCESS_TOKEN = process.env.META_PAGE_ACCESS_TOKEN!;
const PIXEL_ID          = process.env.META_PIXEL_ID!;
const ACCESS_TOKEN      = process.env.META_ACCESS_TOKEN!;
const SCORER_URL        = process.env.SCORER_URL || 'https://scoring-ashen.vercel.app';

const FORM_PROPERTY_MAP: Record<string, string> = {
  '1601819651446955': 'SMC-GENERAL',
};

function sha256(value: string): string {
  return createHmac('sha256', '').update(value.trim().toLowerCase()).digest('hex');
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const mode      = searchParams.get('hub.mode');
  const token     = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');
  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    return new NextResponse(challenge, { status: 200 });
  }
  return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
}

export async function POST(req: NextRequest) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  // Seguridad: verificar que el payload tiene la estructura correcta de Meta
  if (!body?.entry || !Array.isArray(body.entry)) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  (async () => {
    for (const entry of (body.entry || [])) {
      for (const change of (entry.changes || [])) {
        if (change.field !== 'leadgen') continue;
        const { leadgen_id, form_id, ad_id, adset_id, campaign_id, created_time } = change.value;

        const leadRes  = await fetch(`https://graph.facebook.com/v19.0/${leadgen_id}?access_token=${PAGE_ACCESS_TOKEN}`);
        const leadData = await leadRes.json();
        if (leadData.error) { console.error('[Webhook]', leadData.error.message); continue; }

        const fields: Record<string, string> = {};
        for (const f of (leadData.field_data || [])) fields[f.name] = f.values?.[0] || '';

        const propertyId = FORM_PROPERTY_MAP[form_id] || null;

        let leadScore = null, leadStatus = null;
        try {
          const scoreRes = await fetch(`${SCORER_URL}/score`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              lead_id: leadgen_id, source: 'meta_lead_form',
              property_id: propertyId,
              email: !!fields.email, phone: !!fields.phone_number,
              first_name: !!(fields.full_name || fields.first_name),
              fbp: false, property_views: 0, time_on_site_seconds: 0,
              pages_visited: 0, cta_clicks: 0, scroll_depth_pct: 0, repeat_visit: false
            }),
            signal: AbortSignal.timeout(2000)
          });
          const score = await scoreRes.json();
          leadScore = score.lead_score; leadStatus = score.lead_status;
        } catch (e) { console.warn('[Scorer] Error:', e); }

        await fetch(
          `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: [{
              event_name:       'Lead',
              event_id:         `leadgen_${leadgen_id}`,
              event_time:       created_time || Math.floor(Date.now() / 1000),
              event_source_url: 'https://www.santamaria-collection.com',
              action_source:    'website',
              user_data: {
                em: fields.email        ? sha256(fields.email) : undefined,
                ph: fields.phone_number ? sha256(fields.phone_number.replace(/\D/g, '')) : undefined,
                fn: (fields.first_name || fields.full_name?.split(' ')[0])
                    ? sha256(fields.first_name || fields.full_name.split(' ')[0]) : undefined,
              },
              custom_data: {
                currency: 'USD', value: 3000,
                form_id, property_id: propertyId,
                ad_id, adset_id, campaign_id,
                lead_score: leadScore, lead_status: leadStatus
              }
            }]})
          }
        );
        console.info('[Webhook] Lead procesado:', leadgen_id, '| score:', leadScore, '| status:', leadStatus);
      }
    }
  })();

  return NextResponse.json({ ok: true });
}

import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'crypto';

const PIXEL_ID      = process.env.META_PIXEL_ID!;
const ACCESS_TOKEN  = process.env.META_ACCESS_TOKEN!;
const SCORER_URL    = process.env.SCORER_URL || 'https://scoring-ashen.vercel.app';

const EVENT_MAP: Record<string, string> = {
  page_view:              'PageView',
  view_property:          'ViewContent',
  contact_property:       'Lead',
  submit_meta_form:       'Lead',
  view_landing_page:      'PageView',
  landing_page_cta_click: 'Contact'
};

const SCORING_EVENTS = new Set(['contact_property', 'submit_meta_form']);

async function getLeadScore(payload: Record<string, unknown>) {
  try {
    const res = await fetch(`${SCORER_URL}/score`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(payload),
      signal:  AbortSignal.timeout(2000)
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function POST(req: NextRequest) {
  try {
    const event = await req.json();

    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || '0.0.0.0';
    const eventId = event.event_id || randomUUID();

    // Scoring (non-fatal, 2s timeout)
    let leadScore  = null;
    let leadStatus = null;
    if (SCORING_EVENTS.has(event.event_name)) {
      const score = await getLeadScore({
        lead_id:    eventId,
        source:     event.event_name,
        property_id: event.property_id,
        email:      !!event.user_data?.em,
        phone:      !!event.user_data?.ph,
        first_name: !!event.user_data?.fn,
        fbp:        !!event.user_data?.fbp,
        property_views:       event.property_views        || 0,
        time_on_site_seconds: event.time_on_site_seconds  || 0,
        pages_visited:        event.pages_visited         || 0,
        cta_clicks:           event.cta_clicks            || 0,
        scroll_depth_pct:     event.scroll_depth_pct      || 0,
        repeat_visit:         event.repeat_visit          || false
      });
      if (score) { leadScore = score.lead_score; leadStatus = score.lead_status; }
    }

    const metaPayload = {
      data: [{
        event_name:       EVENT_MAP[event.event_name] || 'PageView',
        event_id:         eventId,
        event_time:       Math.floor(Date.now() / 1000),
        event_source_url: event.event_source_url,
        action_source:    'website',
        user_data: {
          ...event.user_data,
          client_ip_address: ip,
          client_user_agent: req.headers.get('user-agent') || ''
        },
        custom_data: {
          content_ids:   event.property_id ? [event.property_id] : undefined,
          content_name:  event.property_name,
          content_type:  'product',
          currency:      'USD',
          value:         event.value || 0,
          lead_score:    leadScore,
          lead_status:   leadStatus
        }
      }]
    };

    const metaRes = await fetch(
      `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(metaPayload) }
    );

    const metaData = await metaRes.json();
    return NextResponse.json({ ok: true, event_id: eventId, lead_score: leadScore, lead_status: leadStatus, meta: metaData });

  } catch (err) {
    console.error('[API/track]', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

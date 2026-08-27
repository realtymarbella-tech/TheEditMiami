import { NextRequest, NextResponse } from 'next/server';

const PIXEL_ID     = process.env.META_PIXEL_ID!;
const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN!;

export async function POST(req: NextRequest) {
  try {
    const event = await req.json();

    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim()
      || req.headers.get('x-real-ip')
      || '0.0.0.0';

    const metaPayload = {
      data: [{
        event_name:       mapEventName(event.event_name),
        event_id:         event.event_id,
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
          value:         event.value || 0
        }
      }]
    };

    const metaRes = await fetch(
      `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(metaPayload)
      }
    );

    const metaData = await metaRes.json();
    return NextResponse.json({ ok: true, meta: metaData });

  } catch (err) {
    console.error('[API/track]', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

function mapEventName(name: string): string {
  const map: Record<string, string> = {
    page_view:              'PageView',
    view_property:          'ViewContent',
    contact_property:       'Lead',
    submit_meta_form:       'Lead',
    view_landing_page:      'PageView',
    landing_page_cta_click: 'Contact'
  };
  return map[name] || 'PageView';
}

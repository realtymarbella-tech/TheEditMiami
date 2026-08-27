import { v4 as uuidv4 } from 'uuid';

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

type TrackEvent = {
  event_name: string;
  property_id?: string;
  property_name?: string;
  value?: number;
  form_id?: string;
  form_name?: string;
  page_title?: string;
  page_category?: string;
  cta_id?: string;
  cta_text?: string;
  page_id?: string;
  user_data?: {
    em?: string;
    ph?: string;
  };
};

const PIXEL_ID = '2277888696292134';

const META_EVENT_MAP: Record<string, string> = {
  page_view:              'PageView',
  view_property:          'ViewContent',
  contact_property:       'Lead',
  submit_meta_form:       'Lead',
  view_landing_page:      'PageView',
  landing_page_cta_click: 'Contact'
};

export function track(event: TrackEvent) {
  const event_id = uuidv4();
  const metaEventName = META_EVENT_MAP[event.event_name];

  // 1. Disparar pixel browser con event_id
  if (typeof window !== 'undefined' && window.fbq && metaEventName) {
    window.fbq('track', metaEventName, {
      content_ids:   event.property_id ? [event.property_id] : undefined,
      content_name:  event.property_name,
      currency:      'USD',
      value:         event.value || 0
    }, { eventID: event_id });
  }

  // 2. Disparar collector server-side con mismo event_id
  fetch('/api/track', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...event,
      event_id,
      event_source_url: window.location.href,
      action_source:    'website',
      user_data: {
        ...event.user_data,
        fbp: getCookie('_fbp'),
        fbc: getCookie('_fbc')
      }
    })
  }).catch(err => console.error('[Tracker]', err));
}

function getCookie(name: string): string | undefined {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : undefined;
}

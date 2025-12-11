// Contact modal management utility

export type ContactSource = 
  | 'nav' 
  | 'hero' 
  | 'pricing-starter' 
  | 'pricing-growth' 
  | 'pricing-partner' 
  | 'cta' 
  | 'footer'
  | 'keyboard'
  | 'unknown';

// This will be enhanced with a global state manager (Zustand/Jotai) or context
// For now, we'll use custom events
export function openContactModal(source: ContactSource, prefillPlan?: string) {
  const event = new CustomEvent('openContactModal', {
    detail: { source, prefillPlan }
  });
  window.dispatchEvent(event);
}

// Track contact interactions (integrate with analytics)
export function trackContactOpen(source: ContactSource) {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    // @ts-ignore
    window.gtag('event', 'contact_modal_open', {
      event_category: 'engagement',
      event_label: source
    });
  }
  console.log('[Analytics] Contact modal opened:', source);
}

export interface ContactPayload {
  name: string;
  company?: string;
  email: string;
  brief: string;
  budget?: string;
  source?: string;
  plan?: string;
}

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;
const CONTACT_TOKEN = import.meta.env.VITE_CONTACT_ACCESS_TOKEN;

export async function submitContactForm(payload: ContactPayload) {
  // If user configured an endpoint, forward payload
  if (CONTACT_ENDPOINT) {
    const res = await fetch(CONTACT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(CONTACT_TOKEN ? { Authorization: `Bearer ${CONTACT_TOKEN}` } : {}),
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText || 'Contact request failed');
    }

    return await res.json().catch(() => ({ ok: true }));
  }

  // Development fallback: simulate latency so UX remains realistic
  await new Promise((resolve) => setTimeout(resolve, 1500));
  console.warn('[ContactService] VITE_CONTACT_ENDPOINT not set. Using mock response.');
  return { ok: true };
}

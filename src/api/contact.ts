// Lightweight Vite serverless-style handler placeholder for adapters that support it (e.g., Vercel/Netlify). 
// If your deployment platform doesn't expose /api routes, point VITE_CONTACT_ENDPOINT to your backend URL.

export async function onRequest(context: { request: Request }) {
  if (context.request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 })
  }

  try {
    const body = await context.request.json()
    const { name, email, brief } = body || {}
    if (!name || !email || !brief) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 })
    }

    // TODO: forward to email/webhook provider here
    // await fetch(process.env.WEBHOOK_URL, { method: 'POST', body: JSON.stringify(body) })

    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Invalid payload' }), { status: 400 })
  }
}

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, company, phone, email, propertyType, needs, message } = data;

    if (!name || !email) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    const apiKey = import.meta.env.RESEND_API_KEY;
    if (apiKey) {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from:    import.meta.env.RESEND_FROM || 'onboarding@resend.dev',
        to:      import.meta.env.NOTIFY_EMAIL || 'info@tricansecurity.com',
        replyTo: email,
        subject: `New inquiry: ${name}${company ? ` — ${company}` : ''}`,
        text: [
          `Name:          ${name}`,
          `Company:       ${company || '—'}`,
          `Phone:         ${phone  || '—'}`,
          `Email:         ${email}`,
          ``,
          `Property type: ${propertyType}`,
          `Service:       ${needs}`,
          ``,
          `Message:`,
          message || '(none)',
        ].join('\n'),
      });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ error: 'Failed to send message' }), { status: 500 });
  }
};

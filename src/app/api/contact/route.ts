import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, company, phone, email, propertyType, needs, message } = data;

    if (!name || !email) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from:    process.env.RESEND_FROM    || 'onboarding@resend.dev',
        to:      process.env.NOTIFY_EMAIL   || 'info@tricansecurity.com',
        replyTo: email,
        subject: `New inquiry: ${name}${company ? ` — ${company}` : ''}`,
        text: [
          `Name:          ${name}`,
          `Company:       ${company || '—'}`,
          `Phone:         ${phone   || '—'}`,
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

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: 'Failed to send message' }, { status: 500 });
  }
}

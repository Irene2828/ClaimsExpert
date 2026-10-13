import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message, bot_field } = req.body || {};

  // Basic spam protection: honeypot check
  if (bot_field) {
    // If the bot filled the hidden field, silently accept without sending
    return res.status(200).json({ success: true });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not configured');
    return res.status(500).json({ error: 'Email service is not configured (missing RESEND_API_KEY)' });
  }

  const resend = new Resend(apiKey);
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
  const toEmail = process.env.NOTIFICATION_EMAIL || 'iryna.herts@gmail.com';

  try {
    const data = await resend.emails.send({
      from: `Site Web <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `Nouveau message de ${name} (via le site web)`,
      text: `Nom: ${name}\nCourriel: ${email}\n\nMessage:\n${message}`,
    });

    if (data.error) {
      console.error('Resend API Error:', data.error);
      return res.status(500).json({ error: data.error.message || 'Error from Resend' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact Form Function Error:', error);
    return res.status(500).json({ error: 'Failed to send email due to an exception' });
  }
}

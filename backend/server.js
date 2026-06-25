const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');

dotenv.config();

const app = express();
app.disable('x-powered-by');

const port = Number(process.env.PORT || 5000);
const frontendOrigins = (process.env.FRONTEND_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);
const contactReceiverPlaceholder = 'contact@example.com';
const contactReceiver = (process.env.CONTACT_RECEIVER || contactReceiverPlaceholder).trim();

const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT || 465);
const smtpSecure = String(process.env.SMTP_SECURE ?? 'true').toLowerCase() === 'true';
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!process.env.CONTACT_RECEIVER?.trim() || contactReceiver === contactReceiverPlaceholder) {
  throw new Error(
    `CONTACT_RECEIVER is not configured. Set CONTACT_RECEIVER to a real email address instead of "${contactReceiverPlaceholder}".`
  );
}

if (!emailPattern.test(contactReceiver)) {
  throw new Error('CONTACT_RECEIVER must be a valid email address.');
}

const fromEmail = process.env.FROM_EMAIL || smtpUser || contactReceiver;
const limits = {
  nameMax: 80,
  emailMax: 254,
  messageMax: 2000,
};
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { message: 'Too many contact requests. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

const transporter =
  smtpHost && smtpUser && smtpPass
    ? nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      })
    : null;

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

app.use(
  cors({
    origin: frontendOrigins,
    credentials: true,
  })
);
app.use(express.json({ limit: '20kb' }));

app.get('/api/health', (_request, response) => {
  response.status(200).json({
    status: 'ok',
    message: 'Portfolio backend is running.',
    mailReady: Boolean(transporter),
  });
});

app.post('/api/contact', contactLimiter, async (request, response) => {
  const name = String(request.body?.name || '').trim();
  const email = String(request.body?.email || '').trim();
  const message = String(request.body?.message || '').trim();

  if (!name || !email || !message) {
    return response.status(400).json({ message: 'Please provide name, email, and message.' });
  }

  if (name.length > limits.nameMax) {
    return response.status(400).json({
      message: `Name is too long. Maximum ${limits.nameMax} characters allowed.`,
    });
  }

  if (email.length > limits.emailMax || !emailPattern.test(email)) {
    return response.status(400).json({ message: 'Please provide a valid email address.' });
  }

  if (message.length > limits.messageMax) {
    return response.status(400).json({
      message: `Message is too long. Maximum ${limits.messageMax} characters allowed.`,
    });
  }

  if (!transporter) {
    return response.status(503).json({
      message: 'Email service is not configured yet. Please set SMTP environment variables.',
    });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>');

  try {
    const mailResult = await transporter.sendMail({
      from: `Portfolio Contact <${fromEmail}>`,
      to: contactReceiver,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="margin:0;padding:0;background:#1a181a;font-family:Arial,Helvetica,sans-serif;color:#f5f5f5;">
          <div style="max-width:600px;margin:0 auto;padding:24px 16px;">
            <div style="border:1px solid #444448;border-radius:14px;background:#242424;overflow:hidden;">
              <div style="padding:18px 22px;border-bottom:1px solid #444448;background:#2e2e32;">
                <div style="font-size:12px;line-height:1.4;letter-spacing:0.08em;text-transform:uppercase;color:#f9ce34;font-weight:700;">
                  Portfolio Website
                </div>
                <h2 style="margin:8px 0 0;font-size:22px;line-height:1.3;color:#f5f5f5;">
                  New Contact Message
                </h2>
              </div>

              <div style="padding:22px;">
                <p style="margin:0 0 18px;font-size:14px;line-height:1.7;color:#ababb4;">
                  A visitor submitted the contact form.
                </p>

                <div style="margin-bottom:14px;">
                  <div style="font-size:12px;line-height:1.4;letter-spacing:0.06em;text-transform:uppercase;color:#7b8392;margin-bottom:4px;">
                    Name
                  </div>
                  <div style="font-size:15px;line-height:1.6;color:#f5f5f5;">
                    ${safeName}
                  </div>
                </div>

                <div style="margin-bottom:18px;">
                  <div style="font-size:12px;line-height:1.4;letter-spacing:0.06em;text-transform:uppercase;color:#7b8392;margin-bottom:4px;">
                    Email
                  </div>
                  <div style="font-size:15px;line-height:1.6;color:#f9ce34;">
                    ${safeEmail}
                  </div>
                </div>

                <div style="padding-top:16px;border-top:1px solid #444448;">
                  <div style="font-size:12px;line-height:1.4;letter-spacing:0.06em;text-transform:uppercase;color:#7b8392;margin-bottom:8px;">
                    Message
                  </div>
                  <div style="font-size:15px;line-height:1.8;color:#f5f5f5;white-space:normal;">
                    ${safeMessage}
                  </div>
                </div>
              </div>

              <div style="padding:14px 22px;border-top:1px solid #444448;font-size:12px;line-height:1.6;color:#7b8392;">
                Sent from the portfolio contact form.
              </div>
            </div>
          </div>
        </div>
      `,
    });

    console.log(`[${new Date().toISOString()}] Contact inquiry emailed`);
    console.log({ messageId: mailResult.messageId, to: contactReceiver });

    return response.status(200).json({
      message: 'Message sent successfully. Thank you for reaching out!',
    });
  } catch (error) {
    console.error(`[${new Date().toISOString()}] Failed to send contact email`);
    console.error(error);

    return response.status(500).json({
      message: 'Unable to send your message right now. Please try again later.',
    });
  }
});

app.use((_request, response) => {
  response.status(404).json({ message: 'Route not found.' });
});

app.listen(port, () => {
  console.log(`Portfolio backend server listening on http://localhost:${port}`);
  console.log(`Allowed frontend origins: ${frontendOrigins.join(', ')}`);
  console.log(`Contact receiver: ${contactReceiver}`);
  console.log(`SMTP configured: ${Boolean(transporter)}`);
});

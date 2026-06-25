const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');

dotenv.config();

const app = express();
app.disable('x-powered-by');
app.set('trust proxy', 1);

const port = Number(process.env.PORT || 5000);
const frontendOrigins = (process.env.FRONTEND_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);
const contactReceiverPlaceholder = 'contact@example.com';
const contactReceiver = (process.env.CONTACT_RECEIVER || contactReceiverPlaceholder).trim();
const resendApiKey = process.env.RESEND_API_KEY?.trim();
const resendApiUrl = 'https://api.resend.com/emails';
const resendFrom = 'Portfolio Contact <onboarding@resend.dev>';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!process.env.CONTACT_RECEIVER?.trim() || contactReceiver === contactReceiverPlaceholder) {
  throw new Error(
    `CONTACT_RECEIVER is not configured. Set CONTACT_RECEIVER to a real email address instead of "${contactReceiverPlaceholder}".`
  );
}

if (!emailPattern.test(contactReceiver)) {
  throw new Error('CONTACT_RECEIVER must be a valid email address.');
}

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

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const logError = (label, error) => {
  console.error(label);

  if (error instanceof Error) {
    console.error(error.message);

    if (error.details) {
      console.error(
        typeof error.details === 'string' ? error.details : JSON.stringify(error.details, null, 2)
      );
    }

    if (error.stack) {
      console.error(error.stack);
    }

    return;
  }

  console.error(error);
};

const parseJsonResponse = async (response) => {
  const rawBody = await response.text();

  if (!rawBody) {
    return null;
  }

  try {
    return JSON.parse(rawBody);
  } catch {
    return { rawBody };
  }
};

const sendResendEmail = async (payload) => {
  if (!resendApiKey) {
    throw new Error('RESEND_API_KEY is not configured.');
  }

  const response = await fetch(resendApiUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const responseBody = await parseJsonResponse(response);

  if (!response.ok) {
    const error = new Error(
      responseBody?.message ||
        `Resend request failed with status ${response.status} ${response.statusText}`
    );
    error.status = response.status;
    error.details = responseBody;
    throw error;
  }

  return responseBody;
};

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
    mailProvider: 'resend',
    mailReady: Boolean(resendApiKey),
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

  if (!resendApiKey) {
    return response.status(503).json({
      message: 'Email service is not configured yet. Please set RESEND_API_KEY.',
    });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>');

  try {
    const mailResult = await sendResendEmail({
      from: resendFrom,
      to: [contactReceiver],
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
      headers: {
        'Reply-To': email,
      },
    });

    console.log(`[${new Date().toISOString()}] Contact inquiry emailed`);
    console.log({
      messageId: mailResult?.id,
      to: contactReceiver,
      provider: 'resend',
    });

    return response.status(200).json({
      message: 'Message sent successfully. Thank you for reaching out!',
    });
  } catch (error) {
    logError(`[${new Date().toISOString()}] Failed to send contact email`, error);

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
  console.log(`Resend configured: ${Boolean(resendApiKey)}`);
});

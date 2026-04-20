/**
 * Contact Service - Handles API calls and form data transformation
 * Extracted from useContactForm hook to separate concerns
 */

const API_ENDPOINT = "/api/contact";

/**
 * Parse response payload from API, handling different content types
 */
async function readResponsePayload(response) {
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return null;
  }

  try {
    return await response.json();
  } catch {
    return null;
  }
}

/**
 * Sanitize contact form data
 */
export function sanitizeContactForm(formData) {
  return {
    name: formData.name.trim(),
    email: formData.email.trim(),
    subject: formData.subject.trim(),
    message: formData.message.trim(),
  };
}

/**
 * Validate required fields
 */
export function validateContactForm(formData) {
  if (!formData.name || !formData.email || !formData.message) {
    return {
      isValid: false,
      message: "Please fill out name, email, and message before submitting.",
    };
  }
  return { isValid: true, message: "" };
}

/**
 * Compose message with subject line if provided
 */
export function composeContactMessage(sanitizedData) {
  return sanitizedData.subject
    ? `Subject: ${sanitizedData.subject}\n\n${sanitizedData.message}`
    : sanitizedData.message;
}

/**
 * Submit contact form to API
 */
export async function submitContact(formData) {
  const sanitized = sanitizeContactForm(formData);
  const validation = validateContactForm(sanitized);

  if (!validation.isValid) {
    throw new Error(validation.message);
  }

  const composedMessage = composeContactMessage(sanitized);

  const response = await fetch(API_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: sanitized.name,
      email: sanitized.email,
      message: composedMessage,
    }),
  });

  const payload = await readResponsePayload(response);
  if (!response.ok) {
    throw new Error(payload?.message || "Unable to send message right now.");
  }

  return {
    success: true,
    message:
      payload?.message ||
      "Message sent successfully. I will get back to you soon.",
  };
}

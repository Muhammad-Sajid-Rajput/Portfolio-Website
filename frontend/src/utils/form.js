/**
 * Form utility functions
 */

/**
 * Validate email address
 */
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Sanitize text input to prevent XSS
 */
export function sanitizeInput(input) {
  if (typeof input !== "string") return "";

  return input.trim().replace(/[<>]/g, "").slice(0, 1000); // Limit length
}

/**
 * Check if form has required data
 */
export function hasRequiredFormData(
  formData,
  requiredFields = ["name", "email", "message"],
) {
  return requiredFields.every((field) => formData[field]?.trim());
}

/**
 * Get form field error message
 */
export function getFieldError(field, value) {
  if (!value?.trim()) {
    return `${field} is required`;
  }

  if (field.toLowerCase() === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return "Please enter a valid email";
    }
  }

  return "";
}

/**
 * Validation rules for client-side form submissions
 */

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateInquiryForm(data: {
  name: string;
  email: string;
  reason: string;
  message: string;
}): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name.trim()) {
    errors.name = "Full name is required";
  }

  if (!data.email.trim()) {
    errors.email = "Email address is required";
  } else if (!validateEmail(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!data.reason) {
    errors.reason = "Please select an inquiry reason";
  }

  if (!data.message.trim()) {
    errors.message = "Tell us a bit about your project or request";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters long";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateNewsletterForm(email: string): ValidationResult {
  const errors: Record<string, string> = {};

  if (!email.trim()) {
    errors.email = "Email address is required";
  } else if (!validateEmail(email)) {
    errors.email = "Please enter a valid email address";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

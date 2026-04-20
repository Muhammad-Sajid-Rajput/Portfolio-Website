import { useState } from "react";
import { submitContact } from "../services/contactService";

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

/**
 * useContactForm Hook
 * Handles form state management only
 * Business logic delegated to contactService
 */
function useContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setFormStatus({ type: "", message: "" });

    try {
      const result = await submitContact(formData);
      setFormData(initialFormData);
      setFormStatus({
        type: "success",
        message: result.message,
      });
    } catch (error) {
      setFormStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    formStatus,
    isSubmitting,
    handleInputChange,
    handleSubmit,
  };
}

export default useContactForm;

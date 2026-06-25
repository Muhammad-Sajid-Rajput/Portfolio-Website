import { useEffect, useRef, useState } from "react";
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
  const successTimeoutRef = useRef(null);

  const clearSuccessTimeout = () => {
    if (successTimeoutRef.current) {
      clearTimeout(successTimeoutRef.current);
      successTimeoutRef.current = null;
    }
  };

  useEffect(() => {
    return () => clearSuccessTimeout();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    clearSuccessTimeout();
    setIsSubmitting(true);
    setFormStatus({ type: "", message: "" });

    try {
      const result = await submitContact(formData);
      setFormData(initialFormData);
      setFormStatus({
        type: "success",
        message: result.message,
      });
      successTimeoutRef.current = setTimeout(() => {
        setFormStatus({ type: "", message: "" });
        successTimeoutRef.current = null;
      }, 5000);
    } catch (error) {
      clearSuccessTimeout();
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

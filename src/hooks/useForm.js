// write your custom hook here to control your checkout form

// ========== IMPORTS
import { useState } from "react";

// ========== DEFINITIONS
const useForm = (initialFormValues) => {
  // ========== STATES
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formValues, setFormValues] = useState(initialFormValues);

  // ========== EVENT HANDLERS
  const handleFormUpdate = (event) => {
    // When called, update formValues with new values
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };
  const handleFormSubmit = (event) => {
    // Prevent page refresh
    event.preventDefault();
    // Allow showing success message
    setShowSuccessMessage(true);
  };

  // ========== OUTPUT
  return [formValues, showSuccessMessage, handleFormUpdate, handleFormSubmit];
};

// ========== EXPORTS
export default useForm;

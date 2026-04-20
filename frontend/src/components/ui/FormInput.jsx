/**
 * Reusable FormInput component for text inputs
 */

import { forwardRef } from "react";

const FormInput = forwardRef(
  (
    {
      name,
      type = "text",
      placeholder = "",
      label,
      error,
      required = false,
      disabled = false,
      value,
      onChange,
      className = "",
      srHidden = true,
      ...props
    },
    ref,
  ) => {
    return (
      <label className="block">
        {label && (
          <span
            className={
              srHidden ? "sr-only" : "text-sm font-medium text-app-text"
            }
          >
            {label}
          </span>
        )}
        {srHidden && !label && <span className="sr-only">{placeholder}</span>}
        <input
          ref={ref}
          className={`ghost-input ${error ? "border-red-500" : ""} ${className}`.trim()}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
          {...props}
        />
        {error && (
          <p id={`${name}-error`} className="mt-1 text-sm text-red-500">
            {error}
          </p>
        )}
      </label>
    );
  },
);

FormInput.displayName = "FormInput";

export default FormInput;

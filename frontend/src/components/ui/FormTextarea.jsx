/**
 * Reusable FormTextarea component for text areas
 */

import { forwardRef } from "react";

const FormTextarea = forwardRef(
  (
    {
      name,
      placeholder = "",
      label,
      error,
      required = false,
      disabled = false,
      value,
      onChange,
      rows = 5,
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
        <textarea
          ref={ref}
          className={`ghost-input resize-none ${error ? "border-red-500" : ""} ${className}`.trim()}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          rows={rows}
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

FormTextarea.displayName = "FormTextarea";

export default FormTextarea;

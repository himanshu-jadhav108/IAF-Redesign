import React, { useId } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  icon,
  required,
  className = '',
  id: externalId,
  ...props
}) => {
  const generatedId = useId();
  const id = externalId || generatedId;

  return (
    <div className="w-full flex flex-col gap-1.5 text-left">
      <label htmlFor={id} className="text-sm font-semibold text-[#191C1D] dark:text-slate-200 flex items-center gap-1">
        {label}
        {required && <span className="text-[#BA1A1A] dark:text-rose-400" title="Required field">*</span>}
      </label>
      
      <div className="relative flex items-center">
        {icon && (
          <div className="absolute left-3.5 text-[#737780] dark:text-slate-400 pointer-events-none">
            {icon}
          </div>
        )}
        <input
          id={id}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
          className={`w-full px-4 py-3 text-sm bg-white dark:bg-slate-800 text-[#191C1D] dark:text-slate-100 border rounded-xl transition-all duration-200 
            placeholder:text-[#737780]/60 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#003366] dark:focus:ring-sky-400 focus:border-[#003366] dark:focus:border-sky-400
            ${icon ? 'pl-10' : ''}
            ${error ? 'border-[#BA1A1A] dark:border-rose-500 focus:ring-[#BA1A1A]' : 'border-[#C3C6D1] dark:border-slate-700'}
            ${className}`}
          {...props}
        />
      </div>

      {error && (
        <span id={`${id}-error`} className="text-xs font-medium text-[#BA1A1A] dark:text-rose-400 mt-0.5">
          {error}
        </span>
      )}
      
      {!error && helperText && (
        <span id={`${id}-helper`} className="text-xs text-[#737780] dark:text-slate-400 mt-0.5">
          {helperText}
        </span>
      )}
    </div>
  );
};

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  error,
  helperText,
  required,
  className = '',
  id: externalId,
  rows = 4,
  ...props
}) => {
  const generatedId = useId();
  const id = externalId || generatedId;

  return (
    <div className="w-full flex flex-col gap-1.5 text-left">
      <label htmlFor={id} className="text-sm font-semibold text-[#191C1D] dark:text-slate-200 flex items-center gap-1">
        {label}
        {required && <span className="text-[#BA1A1A] dark:text-rose-400" title="Required field">*</span>}
      </label>
      
      <textarea
        id={id}
        rows={rows}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
        className={`w-full px-4 py-3 text-sm bg-white dark:bg-slate-800 text-[#191C1D] dark:text-slate-100 border rounded-xl transition-all duration-200 
          placeholder:text-[#737780]/60 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#003366] dark:focus:ring-sky-400 focus:border-[#003366] dark:focus:border-sky-400 resize-y
          ${error ? 'border-[#BA1A1A] dark:border-rose-500 focus:ring-[#BA1A1A]' : 'border-[#C3C6D1] dark:border-slate-700'}
          ${className}`}
        {...props}
      />

      {error && (
        <span id={`${id}-error`} className="text-xs font-medium text-[#BA1A1A] dark:text-rose-400 mt-0.5">
          {error}
        </span>
      )}
      
      {!error && helperText && (
        <span id={`${id}-helper`} className="text-xs text-[#737780] dark:text-slate-400 mt-0.5">
          {helperText}
        </span>
      )}
    </div>
  );
};

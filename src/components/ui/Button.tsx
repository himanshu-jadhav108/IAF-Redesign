import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 group';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-2.5 shadow-md hover:shadow-lg',
  };

  const variantStyles = {
    primary: 'bg-[#FF8C00] dark:bg-amber-500 text-white hover:bg-[#EA8000] dark:hover:bg-amber-600 focus:ring-[#FF8C00] shadow-[#FF8C00]/20 font-semibold',
    secondary: 'bg-[#003366] dark:bg-sky-600 text-white hover:bg-[#001E40] dark:hover:bg-sky-700 focus:ring-[#003366] shadow-[#003366]/20',
    outline: 'border-2 border-[#003366] dark:border-sky-400 text-[#003366] dark:text-sky-400 hover:bg-[#003366] dark:hover:bg-sky-500 hover:text-white dark:hover:text-white focus:ring-[#003366]',
    ghost: 'text-[#003366] dark:text-sky-400 hover:bg-[#003366]/10 dark:hover:bg-sky-400/10 focus:ring-[#003366]',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <motion.button
      whileHover={shouldReduceMotion || disabled ? undefined : { scale: 1.02, y: -1 }}
      whileTap={shouldReduceMotion || disabled ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`}
      disabled={disabled}
      {...(props as any)}
    >
      {icon && (
        <span className="inline-flex shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
    </motion.button>
  );
};

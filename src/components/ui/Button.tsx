import React from 'react';

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
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-2.5 shadow-md hover:shadow-lg',
  };

  const variantStyles = {
    // Stitch: Primary conversion action is Vibrant Orange (#FF8C00)
    primary: 'bg-[#FF8C00] text-white hover:bg-[#EA8000] focus:ring-[#FF8C00] shadow-[#FF8C00]/20 font-semibold',
    // Stitch: Secondary action is Deep Blue (#003366)
    secondary: 'bg-[#003366] text-white hover:bg-[#001E40] focus:ring-[#003366] shadow-[#003366]/20',
    outline: 'border-2 border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white focus:ring-[#003366]',
    ghost: 'text-[#003366] hover:bg-[#003366]/10 focus:ring-[#003366]',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

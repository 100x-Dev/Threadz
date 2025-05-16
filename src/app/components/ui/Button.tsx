"use client"
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ children, className = '', size = 'md', ...props }) => {
  let sizeClasses = '';
  if (size === 'sm') sizeClasses = 'py-2 px-4 text-xs';
  else if (size === 'lg') sizeClasses = 'py-4 px-8 text-base';
  else sizeClasses = 'py-3 px-6 text-sm';

  return (
    <button
      className={`px-6 py-2 rounded bg-black text-white font-semibold hover:bg-gray-800 transition-colors duration-200 ${sizeClasses} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
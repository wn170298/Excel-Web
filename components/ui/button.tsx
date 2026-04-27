'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const base = 'inline-flex items-center justify-center font-medium rounded-[6px] transition-opacity focus-visible:outline-2 focus-visible:outline-[hsla(212,100%,48%,1)] disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary: 'bg-[#171717] text-white hover:opacity-90',
      secondary: 'bg-white text-[#171717] hover:bg-[#fafafa]',
      ghost: 'bg-transparent text-[#171717] hover:bg-[#fafafa]',
    };

    const sizes = {
      sm: 'h-8 px-4 text-[13px]',
      md: 'h-10 px-5 text-[14px]',
      lg: 'h-11 px-6 text-[15px]',
    };

    const shadowStyle = variant === 'secondary' ? { boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.08)' } : {};

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        style={shadowStyle}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button };

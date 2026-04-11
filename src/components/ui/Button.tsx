'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, href, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-primary';
    
    const variants = {
      primary: 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30',
      secondary: 'bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/25',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
      ghost: 'text-primary hover:bg-primary/10',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    if (href) {
      return (
        <a
          href={href}
          className={cn(baseStyles, variants[variant], sizes[size], className)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export { Button };

'use client';

import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'elevated';
  hover?: boolean;
}

export function Card({ className, variant = 'default', hover = true, children, ...props }: CardProps) {
  const variants = {
    default: 'bg-[var(--surface)] border border-[var(--border)] rounded-2xl',
    glass: 'glass rounded-2xl',
    elevated: 'bg-[var(--surface)] rounded-2xl shadow-lg shadow-[var(--shadow-color)]',
  };

  return (
    <div
      className={cn(
        variants[variant],
        hover && 'transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[var(--shadow-color)]',
        'p-6',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium mb-1.5 text-[var(--foreground)]">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          className={cn(
            'w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground)]',
            'placeholder:text-[var(--foreground)]/40',
            'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary',
            'transition-all duration-200 resize-none',
            error && 'border-error focus:ring-error/50',
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-error">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
export { Textarea };

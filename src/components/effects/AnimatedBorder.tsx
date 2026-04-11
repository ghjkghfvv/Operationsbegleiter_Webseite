'use client';

import { cn } from '@/lib/utils';

interface AnimatedBorderProps {
  children: React.ReactNode;
  className?: string;
  borderRadius?: string;
  gradient?: string;
}

export function AnimatedBorder({
  children,
  className,
  borderRadius = '1rem',
  gradient = 'from-primary via-accent to-primary',
}: AnimatedBorderProps) {
  return (
    <div className={cn('relative group', className)} style={{ borderRadius }}>
      {/* Animated gradient border */}
      <div
        className={cn(
          'absolute -inset-[1px] rounded-[inherit] bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]',
          gradient
        )}
        style={{ borderRadius }}
      />
      <div
        className={cn(
          'absolute -inset-[1px] rounded-[inherit] bg-gradient-to-r animate-border-rotate opacity-0 group-hover:opacity-60 transition-opacity duration-500',
          gradient
        )}
        style={{ borderRadius }}
      />
      {/* Content */}
      <div className="relative rounded-[inherit] bg-[var(--surface)] h-full">
        {children}
      </div>
    </div>
  );
}

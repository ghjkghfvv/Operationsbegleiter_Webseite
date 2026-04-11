'use client';

import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  className,
  speed = 30,
  direction = 'left',
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]',
        className
      )}
    >
      <div
        className={cn(
          'flex w-max gap-8',
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
        style={{ ['--marquee-speed' as string]: `${speed}s` }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

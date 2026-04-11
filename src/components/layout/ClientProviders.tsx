'use client';

import { SmoothScroll } from '@/components/effects/SmoothScroll';

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      {children}
    </SmoothScroll>
  );
}

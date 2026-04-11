import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preise',
  description: 'Einfache und transparente Preise. Starten Sie kostenlos und upgraden Sie, wenn Sie bereit sind.',
};

export default function PreiseLayout({ children }: { children: React.ReactNode }) {
  return children;
}

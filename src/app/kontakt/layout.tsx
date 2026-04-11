import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktieren Sie uns — für Support, Partnerschaften oder Presseanfragen.',
};

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return children;
}

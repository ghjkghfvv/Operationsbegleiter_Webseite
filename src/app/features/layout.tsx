import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features',
  description: 'Entdecken Sie alle Features des Operationsbegleiters — für Patienten, Ärzte und Familien.',
};

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

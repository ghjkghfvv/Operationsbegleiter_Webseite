import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Für Ärzte, Praxen & Kliniken',
  description: 'Der Operationsbegleiter für Ärzte und Kliniken: Dashboard, Patientenmonitoring, Personal-Management und skalierbare Enterprise-Lösungen.',
};

export default function AerzteLayout({ children }: { children: React.ReactNode }) {
  return children;
}

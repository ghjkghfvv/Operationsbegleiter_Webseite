import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Für Ärzte',
  description: 'Der Operationsbegleiter für Ärzte: Erstellen Sie personalisierte Behandlungspläne für Ihre Patienten. Vorlagen anlegen, individuell anpassen, per QR-Code zuweisen — kostenlos.',
};

export default function AerzteLayout({ children }: { children: React.ReactNode }) {
  return children;
}

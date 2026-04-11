'use client';

import { useState } from 'react';
import { Mail, Phone, Building2, Users, Newspaper } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Accordion } from '@/components/ui/Accordion';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerChildren, StaggerItem } from '@/components/animations/StaggerChildren';
import { FAQ_ITEMS } from '@/lib/constants';

export default function KontaktPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormSubmitted(true);
  }

  const contactCards = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Support',
      desc: 'Hilfe bei der Nutzung der App',
      contact: 'Operationsbegleiter@gmail.com',
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: 'Partnerschaften',
      desc: 'Kooperationen mit Kliniken & Ärzten',
      contact: 'Operationsbegleiter@gmail.com',
    },
    {
      icon: <Newspaper className="w-6 h-6" />,
      title: 'Presse',
      desc: 'Medienanfragen & Interviews',
      contact: 'Operationsbegleiter@gmail.com',
    },
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <ScrollReveal>
          <Badge variant="primary" className="mb-4">Kontakt</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Wir sind für Sie da
          </h1>
          <p className="text-lg text-[var(--foreground)]/60 max-w-2xl mx-auto">
            Haben Sie Fragen, Anregungen oder möchten eine Partnerschaft besprechen? Kontaktieren Sie uns.
          </p>
        </ScrollReveal>
      </section>

      {/* Contact Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {contactCards.map(card => (
            <StaggerItem key={card.title}>
              <Card variant="glass" className="text-center h-full">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  {card.icon}
                </div>
                <h3 className="font-semibold text-lg mb-1">{card.title}</h3>
                <p className="text-sm text-[var(--foreground)]/60 mb-3">{card.desc}</p>
                <p className="text-sm text-primary font-medium">{card.contact}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* Contact Form */}
      <section className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <ScrollReveal className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Nachricht senden</h2>
        </ScrollReveal>

        {formSubmitted ? (
          <ScrollReveal>
            <Card variant="elevated" hover={false} className="text-center py-12">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-xl font-bold mb-2">Nachricht gesendet!</h3>
              <p className="text-[var(--foreground)]/60">
                Vielen Dank für Ihre Nachricht. Wir antworten in der Regel innerhalb von 24 Stunden.
              </p>
            </Card>
          </ScrollReveal>
        ) : (
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input id="kontakt-name" label="Name" placeholder="Max Mustermann" required />
                <Input id="kontakt-email" label="E-Mail" type="email" placeholder="max@example.de" required />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">Betreff</label>
                <select
                  value={selectedSubject}
                  onChange={e => setSelectedSubject(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                >
                  <option value="">Bitte wählen...</option>
                  <option value="support">Technischer Support</option>
                  <option value="partnership">Partnerschaft</option>
                  <option value="press">Presseanfrage</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Sonstiges</option>
                </select>
              </div>

              <Textarea
                id="kontakt-message"
                label="Nachricht"
                placeholder="Wie können wir Ihnen helfen?"
                rows={5}
                required
              />

              <Button type="submit" className="w-full" size="lg">
                Nachricht senden
              </Button>
            </form>
          </ScrollReveal>
        )}
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Häufig gestellte Fragen</h2>
        </ScrollReveal>

        <ScrollReveal>
          <Accordion items={[...FAQ_ITEMS]} />
        </ScrollReveal>
      </section>
    </div>
  );
}

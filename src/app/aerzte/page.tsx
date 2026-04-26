'use client';

import { motion } from 'framer-motion';
import {
  Users, Shield, QrCode,
  Stethoscope, ClipboardList, ArrowRight, Check,
  Sparkles,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerChildren, StaggerItem } from '@/components/animations/StaggerChildren';
import { FEATURES_DOCTOR } from '@/lib/constants';

const iconComponents: Record<string, React.ReactNode> = {
  Users: <Users className="w-6 h-6" />,
  QrCode: <QrCode className="w-6 h-6" />,
  ClipboardList: <ClipboardList className="w-6 h-6" />,
  Stethoscope: <Stethoscope className="w-6 h-6" />,
};

export default function AerztePage() {
  const steps = [
    {
      step: 1,
      icon: <ClipboardList className="w-5 h-5" />,
      title: 'Vorlage anlegen',
      desc: 'Erstellen Sie eine Behandlungsplan-Vorlage für jede Eingriffsart — mit Aufgaben, Meilensteinen und Empfehlungen.',
    },
    {
      step: 2,
      icon: <Sparkles className="w-5 h-5" />,
      title: 'Pro Patient personalisieren',
      desc: 'Passen Sie die Vorlage in wenigen Minuten an die individuelle Diagnose, den Eingriff und den Verlauf an.',
    },
    {
      step: 3,
      icon: <QrCode className="w-5 h-5" />,
      title: 'Patient einladen',
      desc: 'Per QR-Code oder Einladungscode — der Patient sieht seinen personalisierten Plan sofort in der App.',
    },
  ];

  const testimonials = [
    {
      name: 'Dr. Anna Weber',
      specialty: 'Orthopädin, München',
      text: 'Ich habe für jeden Eingriff eine Vorlage hinterlegt und passe sie pro Patient innerhalb von Minuten an. Meine Patienten wissen genau, was wann zu tun ist.',
    },
    {
      name: 'Dr. Markus Fischer',
      specialty: 'Chirurg, Berlin',
      text: 'Statt jedem Patienten den Ablauf einzeln zu erklären, gebe ich ihm einen strukturierten, personalisierten Behandlungsplan mit. Das spart Zeit und schafft Klarheit.',
    },
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <Badge variant="accent" className="mb-4">Für Ärzte</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Personalisierte<br />
              <span className="text-primary">Behandlungspläne</span>
              <br />in Minuten erstellt.
            </h1>
            <p className="text-lg text-[var(--foreground)]/60 mb-8 leading-relaxed">
              Der Operationsbegleiter ist für Ärzte ein fokussiertes Werkzeug:
              Sie erstellen Vorlagen pro Eingriffsart, passen sie individuell an
              den Patienten an und weisen den Plan per QR-Code zu. Mehr nicht — und genau das ist der Punkt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" href="/preise">
                Kostenlos starten
              </Button>
              <Button variant="outline" size="lg" href="#features">
                So funktioniert&apos;s
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slideInRight">
            <div className="bg-[var(--surface)] rounded-3xl p-6 shadow-xl border border-[var(--border)]">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                  <ClipboardList className="w-4.5 h-4.5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Behandlungsplan</p>
                  <p className="text-xs text-[var(--foreground)]/50">Knie-TEP · Maria S.</p>
                </div>
                <Badge variant="primary" className="ml-auto text-[10px]">Vorlage</Badge>
              </div>

              <div className="space-y-2.5">
                {[
                  { phase: 'Vor der OP', task: 'Aufklärungsgespräch & Bluttest', day: '−14 Tage' },
                  { phase: 'Akutphase', task: 'Schmerztagebuch täglich führen', day: 'Tag 0–7' },
                  { phase: 'Nachsorge', task: 'Wundkontrolle & Mobilisation', day: 'Tag 7–14' },
                  { phase: 'Reha', task: 'Übungsprogramm 3× wöchentlich', day: 'Tag 14–42' },
                ].map((item, i) => (
                  <motion.div
                    key={item.task}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-[var(--background)] border border-[var(--border)]"
                  >
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-[var(--foreground)]/50 mb-0.5">{item.phase} · {item.day}</p>
                      <p className="text-sm font-medium">{item.task}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <button className="w-full mt-4 py-2.5 rounded-xl border border-dashed border-[var(--border)] text-sm text-[var(--foreground)]/50 hover:text-primary hover:border-primary transition-colors">
                + Aufgabe hinzufügen
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How it works */}
      <section id="features" className="py-20 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <Badge variant="primary" className="mb-4">In 3 Schritten</Badge>
            <h2 className="text-3xl font-bold mb-4">So erstellen Sie einen Behandlungsplan</h2>
            <p className="text-[var(--foreground)]/60 max-w-xl mx-auto">
              Vom Template zum personalisierten Plan in der Patientenhand — schnell, strukturiert, wiederverwendbar.
            </p>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {steps.map((s, i) => (
              <StaggerItem key={s.title}>
                <Card variant="elevated" hover={false} className="h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      {s.icon}
                    </div>
                    <span className="text-xs font-mono text-[var(--foreground)]/40">Schritt {s.step}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-[var(--foreground)]/60 leading-relaxed">{s.desc}</p>
                  {i < steps.length - 1 && (
                    <ArrowRight className="hidden md:block w-5 h-5 text-[var(--foreground)]/20 mt-4" />
                  )}
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <Badge variant="primary" className="mb-4">Komplett kostenlos</Badge>
            <h2 className="text-3xl font-bold mb-4">Was Sie als Arzt im Operationsbegleiter haben</h2>
            <p className="text-[var(--foreground)]/60 max-w-xl mx-auto">
              Bewusst schlank gehalten. Alles, was Sie zum Erstellen und Zuweisen personalisierter Behandlungspläne brauchen — und nichts darüber hinaus.
            </p>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {FEATURES_DOCTOR.map(feature => (
              <StaggerItem key={feature.title}>
                <Card variant="glass" className="h-full">
                  <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-3">
                    {iconComponents[feature.icon]}
                  </div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-[var(--foreground)]/60">{feature.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <ScrollReveal className="mt-12">
            <div className="max-w-3xl mx-auto bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6">
              <p className="text-sm font-medium mb-3 text-[var(--foreground)]/80">Bewusst nicht enthalten:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[var(--foreground)]/60">
                {[
                  'Patientenakten oder -monitoring',
                  'Termin-/Kalenderverwaltung',
                  'Personal- oder Klinikverwaltung',
                  'Abrechnung & Praxisorganisation',
                ].map(x => (
                  <p key={x} className="flex items-start gap-2">
                    <span className="text-[var(--foreground)]/30 mt-0.5">—</span>
                    <span>{x}</span>
                  </p>
                ))}
              </div>
              <p className="text-xs text-[var(--foreground)]/40 mt-3">
                Der Fokus liegt bewusst auf personalisierten Behandlungsplänen. Für alles andere nutzen Sie Ihre bestehenden Tools.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Was Ärzte sagen</h2>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <StaggerItem key={i}>
                <Card variant="elevated" hover={false} className="h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-warning fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[var(--foreground)]/70 leading-relaxed mb-4 italic text-sm">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-auto">
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-[var(--foreground)]/50">{t.specialty}</p>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Datenschutz & Compliance</h2>
            <p className="text-[var(--foreground)]/60 max-w-xl mx-auto mb-8">
              Behandlungspläne und Patientenzuordnungen werden DSGVO-konform auf
              deutschen Servern gespeichert — verschlüsselt und mit voller Kontrolle.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['DSGVO-konform', 'Deutsche Server', 'Verschlüsselte Übertragung', 'Volle Datenhoheit'].map(badge => (
                <Badge key={badge} variant="success" className="text-sm px-4 py-1.5">
                  <Check className="w-3.5 h-3.5 mr-1 inline" />
                  {badge}
                </Badge>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-4">Bereit, Ihren ersten Plan zu erstellen?</h2>
            <p className="text-[var(--foreground)]/60 mb-8">
              Für Ärzte komplett kostenlos. Keine Kreditkarte, kein Abo, keine Einschränkungen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" href="/preise">
                Kostenlos starten
              </Button>
              <Button variant="outline" size="lg" href="/kontakt">
                Fragen? Kontakt aufnehmen
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

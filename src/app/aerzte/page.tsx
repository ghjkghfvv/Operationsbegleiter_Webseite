'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users, AlertTriangle, FileText, Shield, Calendar, QrCode,
  Check, Stethoscope, Clock, TrendingUp, Eye,
  ClipboardList, BarChart2, Settings, Building2, LayoutGrid,
  Lock, Award, ArrowRight, ChevronRight, Zap, Heart
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerChildren, StaggerItem } from '@/components/animations/StaggerChildren';
import { ROICalculator } from '@/components/interactive/ROICalculator';
import { FEATURES_DOCTOR } from '@/lib/constants';

const iconComponents: Record<string, React.ReactNode> = {
  Users: <Users className="w-6 h-6" />,
  AlertTriangle: <AlertTriangle className="w-6 h-6" />,
  FileText: <FileText className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Calendar: <Calendar className="w-6 h-6" />,
  QrCode: <QrCode className="w-6 h-6" />,
  Eye: <Eye className="w-6 h-6" />,
  ClipboardList: <ClipboardList className="w-6 h-6" />,
  BarChart2: <BarChart2 className="w-6 h-6" />,
  Settings: <Settings className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  LayoutGrid: <LayoutGrid className="w-6 h-6" />,
};

type Audience = 'praxis' | 'klinik';

export default function AerztePage() {
  const [audience, setAudience] = useState<Audience>('praxis');

  const allFeatures = FEATURES_DOCTOR;

  const caseStudies = [
    {
      result: '35% weniger Komplikationen',
      desc: 'Durch konsequentes Monitoring und Red-Flag-Alerts konnten Komplikationen frühzeitig erkannt werden.',
      icon: <Heart className="w-5 h-5" />,
    },
    {
      result: '50% weniger Rückfragen',
      desc: 'Patienten fanden durch die App-Inhalte selbst Antworten auf ihre Fragen.',
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      result: '20% kürzere Liegezeiten',
      desc: 'Bessere Patientenvorbereitung und strukturierte Nachsorge verkürzten den stationären Aufenthalt.',
      icon: <Clock className="w-5 h-5" />,
    },
  ];

  const testimonials = [
    {
      name: 'Dr. Anna Weber',
      specialty: 'Orthopädin, München',
      text: 'Seit wir den Operationsbegleiter nutzen, haben sich die telefonischen Rückfragen um 40% reduziert. Die Red-Flag-Alerts geben mir ein gutes Sicherheitsgefühl.',
    },
    {
      name: 'Dr. Markus Fischer',
      specialty: 'Chirurg, Berlin',
      text: 'Die automatisierten Kurzberichte sparen mir täglich mindestens eine Stunde. Meine Patienten sind besser informiert und eigenverantwortlicher.',
    },
    {
      name: 'Prof. Dr. Claudia Neumann',
      specialty: 'Chefärztin Chirurgie, Klinikum Süd',
      text: 'Für unser Haus war die Skalierbarkeit entscheidend. 34 Ärzte, 4 Abteilungen — alles auf einer Plattform. Die Compliance-Rate ist spürbar gestiegen.',
    },
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <Badge variant="accent" className="mb-4">Für Ärzte, Praxen & Kliniken</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Ihre Patienten.<br />
              <span className="text-primary">Immer im Blick.</span>
            </h1>
            <p className="text-lg text-[var(--foreground)]/60 mb-8 leading-relaxed">
              Von der Einzelpraxis bis zum Klinikverbund — der Operationsbegleiter gibt Ihnen
              ein digitales Dashboard für den gesamten Genesungsverlauf Ihrer Patienten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" href="/preise">
                Kostenlos starten
              </Button>
              <Button variant="outline" size="lg" href="#features-free">
                Features ansehen
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slideInRight">
            <div className="bg-[var(--surface)] rounded-3xl p-6 shadow-xl border border-[var(--border)]">
              {/* Audience Toggle in Dashboard */}
              <div className="flex items-center gap-2 mb-5">
                <button
                  onClick={() => setAudience('praxis')}
                  className={`flex-1 py-2 px-3 rounded-xl text-sm font-medium transition-all ${
                    audience === 'praxis'
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-[var(--background)] text-[var(--foreground)]/60 hover:bg-[var(--background)]/80'
                  }`}
                >
                  Praxis-Ansicht
                </button>
                <button
                  onClick={() => setAudience('klinik')}
                  className={`flex-1 py-2 px-3 rounded-xl text-sm font-medium transition-all ${
                    audience === 'klinik'
                      ? 'bg-accent text-white shadow-md'
                      : 'bg-[var(--background)] text-[var(--foreground)]/60 hover:bg-[var(--background)]/80'
                  }`}
                >
                  Klinik-Ansicht
                </button>
              </div>

              <AnimatePresence mode="wait">
                {audience === 'praxis' ? (
                  <motion.div
                    key="praxis"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Stethoscope className="w-4.5 h-4.5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Arzt-Dashboard</p>
                        <p className="text-xs text-[var(--foreground)]/50">Praxis Dr. Weber</p>
                      </div>
                    </div>
                    <div className="space-y-2.5">
                      {[
                        { name: 'Maria S.', status: 'Auf Kurs', color: 'bg-success', days: 'Tag 14', phase: 'Reha' },
                        { name: 'Thomas K.', status: 'Achtung', color: 'bg-warning', days: 'Tag 7', phase: 'Nachsorge' },
                        { name: 'Klaus M.', status: 'Kritisch', color: 'bg-error', days: 'Tag 3', phase: 'Akut' },
                      ].map(patient => (
                        <div key={patient.name} className="flex items-center justify-between p-3 rounded-xl bg-[var(--background)] border border-[var(--border)]">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
                              {patient.name.charAt(0)}
                            </div>
                            <div>
                              <p className="text-sm font-medium">{patient.name}</p>
                              <p className="text-xs text-[var(--foreground)]/50">{patient.days} · {patient.phase}</p>
                            </div>
                          </div>
                          <span className={`${patient.color} text-white text-xs px-2 py-1 rounded-full`}>
                            {patient.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="klinik"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Building2 className="w-4.5 h-4.5 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Organisations-Dashboard</p>
                        <p className="text-xs text-[var(--foreground)]/50">Klinikum Südbayern</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: 'Aktive Patienten', value: '1.247', change: '+12%' },
                        { label: 'Ärzte', value: '34', change: '+3' },
                        { label: 'Compliance', value: '94%', change: '+5%' },
                        { label: 'Zufriedenheit', value: '4.7/5', change: '+0.2' },
                      ].map(stat => (
                        <div key={stat.label} className="p-3 rounded-xl bg-[var(--background)] border border-[var(--border)]">
                          <p className="text-[10px] text-[var(--foreground)]/50 mb-0.5">{stat.label}</p>
                          <p className="text-lg font-bold font-mono">{stat.value}</p>
                          <p className="text-[10px] text-success font-medium">{stat.change}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-12 border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Ärzte vertrauen uns' },
              { value: '10.000+', label: 'Patienten begleitet' },
              { value: '40%', label: 'Weniger Rückfragen' },
              { value: '99,9%', label: 'Verfügbarkeit' },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-primary font-mono">{stat.value}</p>
                  <p className="text-sm text-[var(--foreground)]/50 mt-1">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Kostenlos Features */}
      <section id="features-free" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <Badge variant="primary" className="mb-4">Komplett kostenlos</Badge>
            <h2 className="text-3xl font-bold mb-4">Alle Funktionen — dauerhaft gratis</h2>
            <p className="text-[var(--foreground)]/60 max-w-xl mx-auto">
              Der volle Funktionsumfang für Ärzte, Praxen und Kliniken. Ohne versteckte Kosten, ohne Pro-Abo.
            </p>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {allFeatures.map(feature => (
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
        </div>
      </section>



      {/* For Kliniken — Enterprise */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <Badge variant="accent" className="mb-4">Für Kliniken & Organisationen</Badge>
              <h2 className="text-3xl font-bold mb-4">
                Skalierbar — von der Praxis<br />bis zum Klinikverbund
              </h2>
              <p className="text-[var(--foreground)]/60 mb-8 leading-relaxed">
                Der Operationsbegleiter wächst mit Ihrer Organisation. Verwalten Sie
                mehrere Ärzte, Abteilungen und Standorte zentral auf einer Plattform.
              </p>

              <div className="space-y-4">
                {[
                  { icon: <Building2 className="w-5 h-5" />, title: 'Multi-Arzt-Management', desc: 'Alle Ärzte und Abteilungen zentral verwalten.' },
                  { icon: <Users className="w-5 h-5" />, title: 'Staff-Management', desc: 'Granulare Berechtigungen — vom Chefarzt bis zur Pflege.' },
                  { icon: <BarChart2 className="w-5 h-5" />, title: 'Aggregierte Auswertungen', desc: 'Abteilungsübergreifende Trends und Kennzahlen.' },
                  { icon: <Shield className="w-5 h-5" />, title: 'Enterprise-Sicherheit', desc: 'DSGVO, E2E-Verschlüsselung, Audit-Logs, SSO.' },
                  { icon: <Award className="w-5 h-5" />, title: 'Dedizierter Support', desc: 'Persönlicher Ansprechpartner und Priority-Support.' },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-0.5">{item.title}</h3>
                      <p className="text-sm text-[var(--foreground)]/60">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slideInRight">
              <div className="bg-[var(--surface)] rounded-3xl p-6 shadow-xl border border-[var(--border)]">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Building2 className="w-4.5 h-4.5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Organisations-Dashboard</p>
                    <p className="text-xs text-[var(--foreground)]/50">Klinikum Südbayern</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: 'Aktive Patienten', value: '1.247', change: '+12%' },
                    { label: 'Ärzte', value: '34', change: '+3' },
                    { label: 'Compliance-Rate', value: '94%', change: '+5%' },
                    { label: 'Zufriedenheit', value: '4.7/5', change: '+0.2' },
                  ].map(stat => (
                    <div key={stat.label} className="p-3 rounded-xl bg-[var(--background)] border border-[var(--border)]">
                      <p className="text-[10px] text-[var(--foreground)]/50 mb-0.5">{stat.label}</p>
                      <p className="text-lg font-bold font-mono">{stat.value}</p>
                      <p className="text-[10px] text-success font-medium">{stat.change}</p>
                    </div>
                  ))}
                </div>

                {/* Mini team list */}
                <div className="space-y-2">
                  <p className="text-xs font-medium text-[var(--foreground)]/50 px-1">Abteilungen</p>
                  {[
                    { name: 'Orthopädie', doctors: 12, patients: 487 },
                    { name: 'Chirurgie', doctors: 8, patients: 356 },
                    { name: 'Kardiologie', doctors: 14, patients: 404 },
                  ].map(dept => (
                    <div key={dept.name} className="flex items-center justify-between p-2.5 rounded-xl bg-[var(--background)] border border-[var(--border)]">
                      <p className="text-sm font-medium">{dept.name}</p>
                      <div className="flex items-center gap-3 text-xs text-[var(--foreground)]/50">
                        <span>{dept.doctors} Ärzte</span>
                        <span>{dept.patients} Pat.</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Berechnen Sie Ihren Vorteil</h2>
            <p className="text-[var(--foreground)]/60">
              Sehen Sie, wie viel Zeit und Aufwand Sie mit dem Operationsbegleiter sparen können.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <ROICalculator />
          </ScrollReveal>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Erfolgsgeschichten</h2>
            <p className="text-[var(--foreground)]/60">
              So profitieren Kliniken und Praxen vom Operationsbegleiter.
            </p>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map(cs => (
              <StaggerItem key={cs.result}>
                <Card variant="elevated" hover={false} className="h-full">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {cs.icon}
                  </div>
                  <p className="text-2xl font-bold mb-2">{cs.result}</p>
                  <p className="text-sm text-[var(--foreground)]/60">{cs.desc}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Das sagen unsere Nutzer</h2>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
              Ihre Daten sind bei uns sicher. DSGVO-konform, auf deutschen Servern,
              mit Ende-zu-Ende-Verschlüsselung und vollständiger Audit-Protokollierung.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['DSGVO-konform', 'ISO 27001', 'Deutsche Server', 'E2E-Verschlüsselung', 'Audit-Logs', 'SSO-Integration'].map(badge => (
                <Badge key={badge} variant="success" className="text-sm px-4 py-1.5">{badge}</Badge>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-4">Bereit loszulegen?</h2>
            <p className="text-[var(--foreground)]/60 mb-8">
              Starten Sie kostenlos und erleben Sie, wie der Operationsbegleiter
              Ihre Praxis oder Klinik unterstützt.
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

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  List, Thermometer, Camera, Activity, Pill, Utensils,
  Calendar, FileText, Image, QrCode, Users, AlertTriangle,
  Bot, ClipboardList, Moon, Mic,
  BookOpen, Dumbbell, ClipboardCheck, Phone, Download,
  TrendingUp, User, BarChart2, UserPlus,
  Eye, MessageSquare, Heart,
  GraduationCap, Smartphone, Lock,
  Check, X, ChevronDown, Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { TextReveal } from '@/components/effects/TextReveal';

// ── Types ──
interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
  detail?: string;
  color: string;
}

interface Category {
  title: string;
  features: Feature[];
}

// ── PATIENTEN KOSTENLOS — nach Kategorien ──
const patientFreeCategories: Category[] = [
  {
    title: 'Dokumentation & Tracking',
    features: [
      { icon: List,          title: 'Timeline / Feed',           desc: 'Aufgaben, Einträge und Nachrichten vom Arzt — alles chronologisch an einem Ort.',             detail: 'Alle wichtigen Ereignisse, Termine, Befunde und Fortschritte auf einen Blick. Teilen Sie Ihre Timeline sicher mit Ihrem Arzt.', color: 'bg-blue-500' },
      { icon: Activity,      title: 'Schmerztagebuch',           desc: 'Schmerzeinträge mit Intensität, Lokalisation und Zeitstempel dokumentieren.',                  detail: 'Dokumentieren Sie Schmerzintensität, -art und -lokalisation. Die App erkennt Muster und hilft bei der Therapieanpassung.', color: 'bg-orange-500' },
      { icon: Camera,        title: 'Wunddokumentation',         desc: 'Fotodokumentation des Heilungsverlaufs mit Zeitreihen-Vergleich.',                           detail: 'Standardisierte Aufnahmen für optimale Vergleichbarkeit. Teilen Sie Fotos sicher mit Ihrem Arzt.', color: 'bg-emerald-500' },
      { icon: Thermometer,   title: 'Vitalzeichen',              desc: 'Blutdruck, Puls, Temperatur und Sauerstoffsättigung — alles an einem Ort.',                   detail: 'Automatische Trendanalyse und Benachrichtigungen bei auffälligen Werten. Integration mit Apple Health und Google Fit.', color: 'bg-rose-500' },
      { icon: Moon,          title: 'Schlaf & Stimmung',         desc: 'Schlafqualität und Gemütszustand tracken und Zusammenhänge erkennen.',                         detail: 'Erkennen Sie Zusammenhänge zwischen Schlaf, Stimmung und Heilungsfortschritt.', color: 'bg-indigo-500' },
    ],
  },
  {
    title: 'Medikamente & Ernährung',
    features: [
      { icon: Pill,          title: 'Medikamenten-Management',   desc: 'Medikamentenplan einsehen, Einnahmen tracken und nie wieder eine Dosis vergessen.',             detail: 'Dosierungsplan, Wechselwirkungsprüfung und lückenloser Einnahme-Verlauf für Ihren Arzt.', color: 'bg-violet-500' },
      { icon: Utensils,      title: 'Ernährungstracking',        desc: 'Mahlzeiten und Flüssigkeitszufuhr dokumentieren für optimale Heilung.',                         detail: 'Personalisierte Ernährungsempfehlungen basierend auf Ihrem Eingriff und Ihren Bedürfnissen.', color: 'bg-amber-500' },
    ],
  },
  {
    title: 'Termine & Organisation',
    features: [
      { icon: Calendar,      title: 'Termine',                   desc: 'Eigene Termine einsehen und verwalten — alles im Überblick.',                                  color: 'bg-sky-500' },
      { icon: FileText,      title: 'Dokumente',                 desc: 'Bis zu 5 Dokumente hochladen und sicher mit dem Arzt teilen.',                                 color: 'bg-slate-500' },
      { icon: Image,         title: 'Fotos',                     desc: 'Bis zu 3 Fotos für den Heilungsverlauf hochladen.',                                             color: 'bg-pink-500' },
      { icon: ClipboardList, title: 'Packzettel',                desc: '1 Checkliste für den Krankenhausaufenthalt — nichts mehr vergessen.',                          detail: 'Personalisiert nach Art Ihres Eingriffs. Teilbar mit Angehörigen.', color: 'bg-lime-600' },
      { icon: BookOpen,      title: 'OP-Informationen',          desc: 'Detaillierte Informationen zu Ihrer Operation einsehen.',                                       color: 'bg-blue-700' },
    ],
  },
  {
    title: 'Gesundheit & Vorsorge',
    features: [
      { icon: ClipboardCheck,title: 'Fragebögen',                desc: 'Vor- und Nachsorge-Fragebögen ausfüllen — direkt für den Arzt.',                               color: 'bg-teal-600' },
      { icon: Phone,         title: 'Notfallkontakte',           desc: 'Notfallkontakte hinterlegen für den Ernstfall.',                                                color: 'bg-red-600' },
      { icon: QrCode,        title: 'Arzt verbinden',            desc: 'Arzt per Einladungscode oder QR-Code verknüpfen.',                                              color: 'bg-blue-600' },
      { icon: GraduationCap, title: 'Onboarding & Tutorial',     desc: 'Geführte Einrichtung und Einführung in alle App-Funktionen.',                                   color: 'bg-cyan-500' },
    ],
  },
];

// ── PATIENTEN PRO — nach Kategorien ──
const patientProCategories: Category[] = [
  {
    title: 'KI & Intelligente Analyse',
    features: [
      { icon: Bot,           title: 'Bella — KI-Assistent',      desc: 'Unbegrenzter Chat mit KI-Chatbot für alle Fragen rund um Genesung und Gesundheit.',            detail: 'Bella beantwortet Fragen zu Symptomen, Medikamenten und Rehabilitation — rund um die Uhr, medizinisch fundiert.', color: 'bg-[#007AFF]' },
      { icon: AlertTriangle, title: 'Red Flags / Alarmzeichen',  desc: 'Automatische Warnung bei kritischen Symptomen — für Ihre Sicherheit.',                          detail: 'Medizinisch validierte Warnschwellen. Sofortige Benachrichtigung an Sie und Ihren Arzt.', color: 'bg-red-500' },
      { icon: TrendingUp,    title: 'Fortschritts-Tracking',     desc: 'Genesungsfortschritt visualisieren und in Echtzeit verfolgen.',                                 color: 'bg-emerald-600' },
      { icon: BarChart2,     title: 'Analytics Dashboard',       desc: 'Detaillierte Auswertungen und Analysen Ihres Genesungsverlaufs.',                               color: 'bg-violet-600' },
    ],
  },
  {
    title: 'Rehabilitation & Fitness',
    features: [
      { icon: Dumbbell,      title: 'Reha-Übungen',              desc: 'Angeleitete Rehabilitations-Programme mit Timer und Fortschritts-Tracking.',                    detail: 'Individuell angepasste Übungspläne, Fortschrittstracking und Erinnerungen.', color: 'bg-green-600' },
      { icon: Smartphone,    title: 'Health Sync',               desc: 'Apple Health / Google Health Connect Synchronisation für automatische Daten.',                   color: 'bg-pink-600' },
    ],
  },
  {
    title: 'Erweiterte Funktionen',
    features: [
      { icon: Mic,           title: 'Sprachnotizen',             desc: 'Voice Memos aufnehmen und speichern — ideal wenn Tippen nicht möglich ist.',                    color: 'bg-purple-500' },
      { icon: Users,         title: 'Familie einladen',          desc: 'Angehörige mit steuerbaren Sichtbarkeitsrechten einladen.',                                      color: 'bg-teal-500' },
      { icon: Lock,          title: 'Mehrere Operationen',       desc: 'Mehrere Operationen gleichzeitig anlegen und verwalten.',                                        color: 'bg-blue-800' },
      { icon: Download,      title: 'Datenexport',               desc: 'Alle persönlichen Daten als PDF oder JSON exportieren.',                                         color: 'bg-slate-600' },
    ],
  },
  {
    title: 'Unbegrenzte Inhalte',
    features: [
      { icon: FileText,      title: 'Dokumente',                 desc: 'Unbegrenzt Dokumente hochladen und mit Ihrem Arzt teilen.',                                     color: 'bg-slate-500' },
      { icon: Image,         title: 'Fotos',                     desc: 'Unbegrenzt Fotos für den Heilungsverlauf speichern.',                                            color: 'bg-pink-500' },
      { icon: ClipboardList, title: 'Packzettel',                desc: 'Unbegrenzte Listen + Premium-Vorlagen + mit Angehörigen teilen.',                                color: 'bg-lime-600' },
    ],
  },
];

// ── ÄRZTE — Behandlungspläne ──
const arztCategories: Category[] = [
  {
    title: 'Behandlungspläne erstellen',
    features: [
      { icon: ClipboardList, title: 'Behandlungsplan-Vorlagen',  desc: 'Wiederverwendbare Vorlagen pro Eingriffsart anlegen — mit Aufgaben, Meilensteinen und Empfehlungen.', detail: 'Eine Vorlage pro Eingriffsart, beliebig oft anwendbar. Aufgaben mit Phasen (vor OP, akut, Nachsorge, Reha) und Zeitpunkten strukturieren.', color: 'bg-violet-500' },
      { icon: Sparkles,      title: 'Pro Patient personalisieren', desc: 'Vorlagen individuell an Diagnose, Eingriff und Verlauf des Patienten anpassen.',                   detail: 'Aufgaben hinzufügen, entfernen oder umformulieren — der Patient sieht nur seinen personalisierten Plan.', color: 'bg-blue-500' },
    ],
  },
  {
    title: 'Patient & Zuweisung',
    features: [
      { icon: UserPlus,      title: 'Patienten einladen',        desc: 'Einladungscode und QR-Code generieren — der Plan landet direkt beim Patienten.',                  color: 'bg-teal-500' },
      { icon: Users,         title: 'Patientenliste',            desc: 'Übersicht, welchem Patienten welcher Behandlungsplan zugewiesen ist.',                            color: 'bg-orange-500' },
      { icon: User,          title: 'Profil verwalten',          desc: 'Name, Fachrichtung und Praxisdaten pflegen.',                                                     color: 'bg-indigo-500' },
    ],
  },
];

// ── FAMILIE ──
const familieCategories: Category[] = [
  {
    title: 'Begleitung & Kommunikation',
    features: [
      { icon: Users,         title: 'Patienten-Übersicht',       desc: 'Alle verknüpften Patienten im Überblick — immer wissen, wie es dem Liebsten geht.',              color: 'bg-pink-500' },
      { icon: Eye,           title: 'Patientendaten einsehen',   desc: 'Sichtbarkeit pro Kategorie vom Patienten steuerbar.',                                             color: 'bg-rose-500' },
      { icon: MessageSquare, title: 'Nachrichten',               desc: 'Direkte und sichere Kommunikation mit dem Patienten.',                                            color: 'bg-[#007AFF]' },
      { icon: Heart,         title: 'Beziehungstyp',             desc: 'Relation hinterlegen (Partner, Elternteil, Kind, Freund etc.).',                                  color: 'bg-rose-600' },
      { icon: User,          title: 'Eigenes Profil',            desc: 'Eigenes Familienprofil verwalten und Kontaktdaten pflegen.',                                       color: 'bg-indigo-500' },
    ],
  },
];

type FilterTab = 'patienten-free' | 'patienten-pro' | 'aerzte' | 'familien';

const tabConfig: { value: FilterTab; label: string; sub?: string; color: string }[] = [
  { value: 'patienten-free', label: 'Patienten', sub: 'Kostenlos', color: 'bg-primary' },
  { value: 'patienten-pro',  label: 'Patienten', sub: 'Pro',       color: 'bg-gradient-to-r from-violet-500 to-primary' },
  { value: 'aerzte',         label: 'Ärzte', sub: 'Gratis', color: 'bg-accent' },
  { value: 'familien',       label: 'Familie',                      color: 'bg-rose-500' },
];

const categoryMap: Record<FilterTab, Category[]> = {
  'patienten-free': patientFreeCategories,
  'patienten-pro':  patientProCategories,
  'aerzte':         arztCategories,
  'familien':       familieCategories,
};

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
    >
      <div
        className={`group relative h-full p-5 sm:p-6 rounded-2xl bg-white border border-[var(--border)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 ${feature.detail ? 'cursor-pointer' : ''}`}
        onClick={() => feature.detail && setExpanded(!expanded)}
      >
        <div className="flex items-start gap-4">
          <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${feature.color} flex items-center justify-center text-white shrink-0`}>
            <feature.icon className="w-5 h-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-[15px] sm:text-base">{feature.title}</h3>
              {feature.detail && (
                <ChevronDown className={`w-3.5 h-3.5 text-[var(--foreground)]/30 transition-transform ${expanded ? 'rotate-180' : ''}`} />
              )}
            </div>
            <p className="text-sm text-[var(--foreground)]/55 leading-relaxed mt-1">{feature.desc}</p>
            <AnimatePresence>
              {expanded && feature.detail && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-sm text-[var(--foreground)]/70 leading-relaxed mt-2 pt-2 border-t border-[var(--border)]"
                >
                  {feature.detail}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>('patienten-free');

  const categories = categoryMap[activeTab];
  const totalFeatures = categories.reduce((sum, cat) => sum + cat.features.length, 0);

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16">
        <ScrollReveal>
          <Badge variant="primary" className="mb-4">Alle Features</Badge>
          <TextReveal as="h1" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Alles was Sie brauchen
          </TextReveal>
          <p className="text-base sm:text-lg text-[var(--foreground)]/60 max-w-2xl mx-auto">
            Entdecken Sie alle {patientFreeCategories.reduce((s, c) => s + c.features.length, 0) + patientProCategories.reduce((s, c) => s + c.features.length, 0)}+ Funktionen des Operationsbegleiters — für Patienten, Ärzte und Familien.
          </p>
        </ScrollReveal>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        <div className="flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-2 sm:gap-0 sm:p-1 sm:rounded-2xl sm:bg-[var(--surface)] sm:border sm:border-[var(--border)]">
            {tabConfig.map(tab => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  activeTab === tab.value
                    ? `${tab.color} text-white shadow-md`
                    : 'bg-[var(--surface)] sm:bg-transparent text-[var(--foreground)]/60 hover:text-[var(--foreground)] border border-[var(--border)] sm:border-none'
                }`}
              >
                {tab.label}
                {tab.sub && (
                  <span className={`ml-1.5 text-[10px] sm:text-xs ${activeTab === tab.value ? 'opacity-80' : 'opacity-50'}`}>
                    {tab.sub}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
        <p className="text-center text-sm text-[var(--foreground)]/40 mt-3">
          {totalFeatures} Funktionen
          {activeTab === 'patienten-pro' && <span className="ml-1">· zusätzlich zu allen kostenlosen Features</span>}
          {activeTab === 'aerzte' && <span className="ml-1">· alle Funktionen dauerhaft gratis</span>}
        </p>
      </section>

      {/* Feature Categories */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-12 sm:space-y-16"
          >
            {categories.map((category, catIndex) => (
              <div key={category.title}>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-6"
                >
                  <div className="w-1 h-6 rounded-full bg-primary" />
                  <h2 className="text-lg sm:text-xl font-bold text-[var(--foreground)]">{category.title}</h2>
                  <span className="text-xs text-[var(--foreground)]/35 font-medium">{category.features.length}</span>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {category.features.map((feature, i) => (
                    <FeatureCard key={feature.title} feature={feature} index={i} />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Pro Upgrade Banner (only on free tab) */}
      {activeTab === 'patienten-free' && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-violet-500 p-8 sm:p-12 text-center text-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent)]" />
              <div className="relative z-10">
                <Sparkles className="w-8 h-8 mx-auto mb-4 opacity-80" />
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">Noch mehr mit Pro</h2>
                <p className="text-white/80 max-w-md mx-auto mb-6">
                  Schalten Sie {patientProCategories.reduce((s, c) => s + c.features.length, 0)} zusätzliche Premium-Features frei — inkl. KI-Assistent Bella, Reha-Übungen und unbegrenzte Inhalte.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    variant="secondary"
                    onClick={() => setActiveTab('patienten-pro')}
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    Pro-Features ansehen
                  </Button>
                  <Button href="/preise" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    Preise vergleichen →
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* Feature Comparison Table */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Free vs. Pro im Überblick</h2>
          <p className="text-sm sm:text-base text-[var(--foreground)]/60">Was ist in welchem Plan enthalten?</p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-[var(--surface)] rounded-2xl border border-[var(--border)] overflow-hidden">
            <div className="grid grid-cols-[1fr_auto_auto] gap-2 sm:gap-4 p-3 sm:p-4 bg-[var(--surface-secondary)]/30 font-semibold text-xs sm:text-sm">
              <div>Feature</div>
              <div className="text-center w-16 sm:w-20">Kostenlos</div>
              <div className="text-center w-12 sm:w-16">Pro</div>
            </div>
            {[
              ['Timeline / Feed', true, true],
              ['Schmerztagebuch', true, true],
              ['Wunddokumentation', true, true],
              ['Vitalzeichen', true, true],
              ['Medikamenten-Management', true, true],
              ['Ernährungstracking', true, true],
              ['Termine', true, true],
              ['Schlaf- & Stimmungstracking', true, true],
              ['Fragebögen', true, true],
              ['OP-Informationen', true, true],
              ['Notfallkontakte', true, true],
              ['Arzt verbinden', true, true],
              ['Onboarding & Tutorial', true, true],
              ['Dokumente (5)', 'limit', true],
              ['Fotos (3)', 'limit', true],
              ['Packzettel (1)', 'limit', true],
              ['KI-Assistent Bella', false, true],
              ['Fortschritts-Tracking', false, true],
              ['Reha-Übungen mit Timer', false, true],
              ['Red Flags / Alarmzeichen', false, true],
              ['Analytics Dashboard', false, true],
              ['Sprachnotizen', false, true],
              ['Health Sync', false, true],
              ['Familie einladen', false, true],
              ['Mehrere Operationen', false, true],
              ['Datenexport (PDF/JSON)', false, true],
              ['Unbegrenzte Dokumente & Fotos', false, true],
              ['Packzettel (unbegrenzt + Vorlagen)', false, true],
            ].map(([feature, free, pro], i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_auto_auto] gap-2 sm:gap-4 p-3 sm:p-4 border-t border-[var(--border)] text-xs sm:text-sm items-center"
              >
                <div className="text-[var(--foreground)]/80 min-w-0">{feature as string}</div>
                <div className="text-center w-16 sm:w-20">
                  {free === true ? (
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-success mx-auto" />
                  ) : free === 'limit' ? (
                    <span className="text-[10px] sm:text-xs text-amber-500 font-medium">Limitiert</span>
                  ) : (
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--foreground)]/20 mx-auto" />
                  )}
                </div>
                <div className="text-center w-12 sm:w-16">
                  {pro ? (
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-success mx-auto" />
                  ) : (
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--foreground)]/20 mx-auto" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="text-center mt-8">
          <Button href="/preise">Preise ansehen →</Button>
        </div>
      </section>
    </div>
  );
}

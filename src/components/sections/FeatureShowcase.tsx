'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  List, Thermometer, Camera, Activity, Pill, Utensils,
  Calendar, FileText, Image, QrCode, Users, AlertTriangle,
  Bot, Stethoscope, ClipboardList, Moon, Trophy, Mic,
  BookOpen, Dumbbell, ClipboardCheck, Phone, Download,
  TrendingUp, User, BarChart2, UserPlus, Settings,
  LayoutGrid, Eye, MessageSquare, Heart, CalendarDays,
  GraduationCap, Smartphone, Lock, Building2,
  LucideIcon,
} from 'lucide-react';
import { TextReveal } from '@/components/effects/TextReveal';

type Tab = 'patient-free' | 'patient-pro' | 'arzt-free' | 'familie';

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
}

// ── PATIENTEN KOSTENLOS ──
const patientFreeFeatures: Feature[] = [
  { icon: List,          title: 'Timeline / Feed',           desc: 'Aufgaben, Einträge und Nachrichten vom Arzt',                    color: 'bg-blue-500' },
  { icon: Thermometer,   title: 'Schmerz-Tagebuch',          desc: 'Schmerzeinträge mit Intensität, Lokalisation und Zeitstempel',    color: 'bg-orange-500' },
  { icon: Camera,        title: 'Wunddokumentation',         desc: 'Wundfotos und Notizen zur Wundheilung',                          color: 'bg-emerald-500' },
  { icon: Activity,      title: 'Vitalzeichen',              desc: 'Blutdruck, Puls, Temperatur und weitere Messwerte erfassen',      color: 'bg-rose-500' },
  { icon: Pill,          title: 'Medikamente',               desc: 'Medikamentenplan einsehen und Einnahmen tracken',                 color: 'bg-violet-500' },
  { icon: Utensils,      title: 'Ernährung',                 desc: 'Mahlzeiten und Flüssigkeitszufuhr dokumentieren',                 color: 'bg-amber-500' },
  { icon: Calendar,      title: 'Termine',                   desc: 'Eigene Termine einsehen und verwalten',                            color: 'bg-sky-500' },
  { icon: FileText,      title: 'Dokumente',                 desc: 'Bis zu 5 Dokumente hochladen und mit Arzt teilen',                color: 'bg-slate-500' },
  { icon: Image,         title: 'Fotos',                     desc: 'Bis zu 3 Fotos für den Heilungsverlauf',                          color: 'bg-pink-500' },
  { icon: ClipboardList, title: 'Packzettel',                desc: '1 Checkliste für den Krankenhausaufenthalt',                      color: 'bg-lime-600' },
  { icon: Moon,          title: 'Schlaf & Stimmung',         desc: 'Schlafqualität und Gemütszustand tracken',                        color: 'bg-indigo-500' },
  { icon: ClipboardCheck,title: 'Fragebögen',                desc: 'Vor- und Nachsorge-Fragebögen ausfüllen',                        color: 'bg-teal-600' },
  { icon: Phone,         title: 'Notfallkontakte',           desc: 'Notfallkontakte hinterlegen',                                     color: 'bg-red-600' },
  { icon: BookOpen,      title: 'OP-Informationen',          desc: 'Informationen zur Operation einsehen',                            color: 'bg-blue-700' },
  { icon: QrCode,        title: 'Arzt verbinden',            desc: 'Arzt per Einladungscode oder QR-Code verknüpfen',                 color: 'bg-blue-600' },
  { icon: GraduationCap, title: 'Onboarding & Tutorial',     desc: 'Geführte Einrichtung und Einführung in die App',                  color: 'bg-cyan-500' },
];

// ── PATIENTEN PRO ──
const patientProFeatures: Feature[] = [
  { icon: Bot,           title: 'Bella – KI-Assistent',      desc: 'Unbegrenzter Chat mit KI-Chatbot für Genesung und Gesundheit',   color: 'bg-[#007AFF]' },
  { icon: TrendingUp,    title: 'Fortschritts-Tracking',     desc: 'Genesungsfortschritt visualisieren und verfolgen',                color: 'bg-emerald-600' },
  { icon: Dumbbell,      title: 'Reha-Übungen',              desc: 'Physiotherapieübungen mit Timer und Fortschritt',                 color: 'bg-green-600' },
  { icon: AlertTriangle, title: 'Red Flags / Alarmzeichen',  desc: 'Automatische Warnung bei kritischen Symptomen',                   color: 'bg-red-500' },
  { icon: Mic,           title: 'Sprachnotizen',             desc: 'Voice Memos aufnehmen und speichern',                             color: 'bg-purple-500' },
  { icon: Smartphone,    title: 'Health Sync',               desc: 'Apple Health / Google Health Connect Synchronisation',             color: 'bg-pink-600' },
  { icon: Users,         title: 'Familie einladen',          desc: 'Angehörige mit steuerbaren Sichtbarkeitsrechten einladen',        color: 'bg-teal-500' },
  { icon: FileText,      title: 'Dokumente',                 desc: 'Unbegrenzt Dokumente hochladen und teilen',                       color: 'bg-slate-500' },
  { icon: Image,         title: 'Fotos',                     desc: 'Unbegrenzt Fotos für den Heilungsverlauf',                        color: 'bg-pink-500' },
  { icon: ClipboardList, title: 'Packzettel',                desc: 'Unbegrenzte Listen + Premium-Vorlagen + Teilen',                  color: 'bg-lime-600' },
  { icon: Lock,          title: 'Mehrere Operationen',       desc: 'Mehrere Operationen gleichzeitig speichern',                      color: 'bg-blue-800' },
  { icon: Download,      title: 'Datenexport',               desc: 'Alle persönlichen Daten als PDF/JSON exportieren',                color: 'bg-slate-600' },
  { icon: BarChart2,     title: 'Analytics Dashboard',       desc: 'Detaillierte Auswertungen und Analysen',                          color: 'bg-violet-600' },
];

// ── ÄRZTE (alle Funktionen kostenlos) ──
const arztFeatures: Feature[] = [
  { icon: Users,         title: 'Patientenliste',            desc: 'Alle verknüpften Patienten mit Phasen-Übersicht',                 color: 'bg-blue-500' },
  { icon: Eye,           title: 'Patientendetails',          desc: 'Schmerz, Wunden, Termine, Dokumente je Patient einsehen',          color: 'bg-[#007AFF]' },
  { icon: CalendarDays,  title: 'Kalender',                  desc: 'Termine erstellen, bearbeiten und löschen',                        color: 'bg-sky-500' },
  { icon: UserPlus,      title: 'Patienten einladen',        desc: 'Einladungscode und QR-Code generieren',                            color: 'bg-teal-500' },
  { icon: User,          title: 'Profil verwalten',          desc: 'Name, Fachrichtung und Praxisdaten pflegen',                       color: 'bg-indigo-500' },
  { icon: Users,         title: 'Unbegrenzte Patienten',     desc: 'Unbegrenzte Patientenanzahl verwalten',                             color: 'bg-orange-500' },
  { icon: ClipboardList, title: 'Care-Plan-Vorlagen',        desc: 'Templates mit Tasks erstellen und auf Patienten anwenden',         color: 'bg-violet-500' },
  { icon: BarChart2,     title: 'Arztbericht',               desc: 'Genese-Bericht exportieren und teilen',                            color: 'bg-emerald-500' },
  { icon: Settings,      title: 'Personal-Management',       desc: 'Mitarbeiter-Accounts mit granularer Rechteverwaltung',            color: 'bg-slate-500' },
  { icon: Building2,     title: 'Organisation',              desc: 'Mehrere Ärzte unter einem Dach verwalten',                         color: 'bg-blue-700' },
  { icon: LayoutGrid,    title: 'Dashboard',                 desc: 'Tagesübersicht mit Warnungen, Terminen und Schnellaktionen',       color: 'bg-blue-600' },
];

// ── FAMILIE ──
const familieFeatures: Feature[] = [
  { icon: Users,         title: 'Patienten-Übersicht',       desc: 'Alle verknüpften Patienten im Überblick',                         color: 'bg-pink-500' },
  { icon: Eye,           title: 'Patientendaten einsehen',   desc: 'Sichtbarkeit pro Kategorie vom Patienten steuerbar',              color: 'bg-rose-500' },
  { icon: MessageSquare, title: 'Nachrichten',               desc: 'Direkte Kommunikation mit dem Patienten',                         color: 'bg-[#007AFF]' },
  { icon: User,          title: 'Profil',                    desc: 'Eigenes Familienprofil verwalten',                                 color: 'bg-indigo-500' },
  { icon: Heart,         title: 'Beziehungstyp',             desc: 'Relation hinterlegen (Partner, Elternteil, Kind, Freund etc.)',   color: 'bg-rose-600' },
];

const tabs: { key: Tab; label: string; sub?: string; count: number; pricing?: string }[] = [
  { key: 'patient-free', label: 'Patienten',   sub: 'Kostenlos', count: 16 },
  { key: 'patient-pro',  label: 'Patienten',   sub: 'Pro',       count: 13, pricing: 'ab 8,99 €/Monat' },
  { key: 'arzt-free',    label: 'Ärzte & Orgs', sub: 'Alles gratis', count: 11 },
  { key: 'familie',      label: 'Familie',     count: 5 },
];

const featureMap: Record<Tab, Feature[]> = {
  'patient-free': patientFreeFeatures,
  'patient-pro':  patientProFeatures,
  'arzt-free':    arztFeatures,
  'familie':      familieFeatures,
};

export function FeatureShowcase() {
  const [activeTab, setActiveTab] = useState<Tab>('patient-free');
  const current = featureMap[activeTab];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(0,122,255,0.06),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-primary uppercase tracking-[0.2em] inline-block"
          >
            Funktionsumfang
          </motion.span>
          <TextReveal as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-5">
            Alles was du brauchst
          </TextReveal>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-[var(--foreground)]/50 max-w-xl mx-auto leading-relaxed"
          >
            Eine App für alle Beteiligten — Patienten, Ärzte und Familie.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-white border border-[var(--border)] rounded-2xl p-1.5 gap-1 shadow-sm flex-wrap justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                  activeTab === tab.key
                    ? 'text-white'
                    : 'text-[var(--foreground)]/50 hover:text-[var(--foreground)]'
                }`}
              >
                {activeTab === tab.key && (
                  <motion.div
                    layoutId="featureTab"
                    className={`absolute inset-0 rounded-xl shadow-md ${tab.sub === 'Pro' ? 'bg-gradient-to-r from-primary to-accent' : 'bg-primary'}`}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
                {tab.sub && (
                  <span className={`relative z-10 text-[10px] px-1.5 py-0.5 rounded-full font-bold leading-none ${
                    activeTab === tab.key
                      ? 'bg-white/20 text-white'
                      : tab.sub === 'Pro'
                        ? 'bg-primary/10 text-primary'
                        : 'bg-[var(--border)] text-[var(--foreground)]/40'
                  }`}>
                    {tab.sub}
                  </span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Pricing note for Pro tabs */}
        <AnimatePresence mode="wait">
          {tabs.find(t => t.key === activeTab)?.pricing && (
            <motion.div
              key={activeTab + '-pricing'}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="flex justify-center mb-8 -mt-4"
            >
              <span className="inline-flex items-center gap-2 text-sm text-[var(--foreground)]/50 bg-primary/5 border border-primary/10 px-4 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {tabs.find(t => t.key === activeTab)?.pricing}
                {activeTab === 'patient-pro' && ' · 75,00 €/Jahr'}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Feature Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
          >
            {current.map((feature, i) => {
              const Icon = feature.icon;
              const isPro = activeTab.endsWith('-pro');
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03, duration: 0.35 }}
                  className={`group p-4 sm:p-5 rounded-2xl bg-white border hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)] hover:border-transparent transition-all duration-300 flex flex-col relative ${
                    isPro ? 'border-primary/15' : 'border-[var(--border)]'
                  }`}
                >
                  {isPro && (
                    <div className="absolute top-2.5 right-2.5">
                      <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold leading-none">
                        PRO
                      </span>
                    </div>
                  )}
                  <div className={`w-9 h-9 rounded-xl ${feature.color} flex items-center justify-center text-white mb-3.5 shrink-0`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1.5 leading-snug">{feature.title}</h3>
                  <p className="text-xs text-[var(--foreground)]/50 leading-relaxed flex-1">{feature.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

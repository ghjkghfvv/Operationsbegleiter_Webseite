'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HeartPulse, Pill, Activity, Camera, Apple, Dumbbell,
  Moon, AlertTriangle, Briefcase, Search, Trophy, Clock,
  FileText, Mic, Bell, Users, Shield, Calendar, QrCode,
  Heart, MessageSquare, Eye, Check, X,
  ClipboardList, BarChart2, Settings, Building2, LayoutGrid
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerChildren, StaggerItem } from '@/components/animations/StaggerChildren';
import { FEATURES_PATIENT, FEATURES_DOCTOR, PRICING_PLANS } from '@/lib/constants';

const iconComponents: Record<string, React.ReactNode> = {
  Timeline: <Clock className="w-6 h-6" />,
  HeartPulse: <HeartPulse className="w-6 h-6" />,
  Pill: <Pill className="w-6 h-6" />,
  Activity: <Activity className="w-6 h-6" />,
  Camera: <Camera className="w-6 h-6" />,
  Apple: <Apple className="w-6 h-6" />,
  Dumbbell: <Dumbbell className="w-6 h-6" />,
  Moon: <Moon className="w-6 h-6" />,
  AlertTriangle: <AlertTriangle className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
  Search: <Search className="w-6 h-6" />,
  Trophy: <Trophy className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Calendar: <Calendar className="w-6 h-6" />,
  QrCode: <QrCode className="w-6 h-6" />,
  FileText: <FileText className="w-6 h-6" />,
  Heart: <Heart className="w-6 h-6" />,
  MessageSquare: <MessageSquare className="w-6 h-6" />,
  Eye: <Eye className="w-6 h-6" />,
  ClipboardList: <ClipboardList className="w-6 h-6" />,
  BarChart2: <BarChart2 className="w-6 h-6" />,
  Settings: <Settings className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  LayoutGrid: <LayoutGrid className="w-6 h-6" />,
};

type FilterTab = 'patienten' | 'aerzte' | 'familien';

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>('patienten');
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  const tabs: { value: FilterTab; label: string }[] = [
    { value: 'patienten', label: 'Für Patienten' },
    { value: 'aerzte', label: 'Für Ärzte' },
    { value: 'familien', label: 'Für Familien' },
  ];

  const familyFeatures = [
    { icon: 'Eye', title: 'Genesungsverlauf einsehen', description: 'Bleiben Sie über den Heilungsfortschritt Ihres Angehörigen informiert.' },
    { icon: 'MessageSquare', title: 'Nachrichten-System', description: 'Kommunizieren Sie direkt und sicher mit Ihrem Angehörigen.' },
    { icon: 'Heart', title: 'Status-Updates', description: 'Erhalten Sie automatische Updates zum Heilungsfortschritt.' },
    { icon: 'Shield', title: 'Datenschutz-Kontrolle', description: 'Der Patient entscheidet, welche Daten geteilt werden.' },
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <ScrollReveal>
          <Badge variant="primary" className="mb-4">Alle Features</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Alles was Sie brauchen
          </h1>
          <p className="text-lg text-[var(--foreground)]/60 max-w-2xl mx-auto">
            Entdecken Sie alle Features des Operationsbegleiters — für Patienten, Ärzte und Familien.
          </p>
        </ScrollReveal>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex justify-center">
          <div className="inline-flex p-1 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
            {tabs.map(tab => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeTab === tab.value
                    ? 'bg-primary text-white shadow-md'
                    : 'text-[var(--foreground)]/60 hover:text-[var(--foreground)]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        {activeTab === 'patienten' && (
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES_PATIENT.map((feature, i) => (
              <StaggerItem key={feature.title}>
                <Card
                  variant="glass"
                  className="h-full cursor-pointer"
                  onClick={() => setExpandedFeature(expandedFeature === i ? null : i)}
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {iconComponents[feature.icon]}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-[var(--foreground)]/60 leading-relaxed">{feature.description}</p>
                  {expandedFeature === i && feature.detail && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-3 pt-3 border-t border-[var(--border)]"
                    >
                      <p className="text-sm text-[var(--foreground)]/70 leading-relaxed">{feature.detail}</p>
                    </motion.div>
                  )}
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        )}

        {activeTab === 'aerzte' && (
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES_DOCTOR.map((feature) => (
              <StaggerItem key={feature.title}>
                <Card variant="glass" className="h-full relative">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                    {iconComponents[feature.icon]}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-[var(--foreground)]/60 leading-relaxed">{feature.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        )}

        {activeTab === 'familien' && (
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {familyFeatures.map((feature) => (
              <StaggerItem key={feature.title}>
                <Card variant="glass" className="h-full">
                  <div className="w-12 h-12 rounded-2xl bg-success/10 flex items-center justify-center text-success mb-4">
                    {iconComponents[feature.icon]}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-[var(--foreground)]/60 leading-relaxed">{feature.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        )}
      </section>

      {/* Feature Comparison Table */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Free vs. Pro</h2>
          <p className="text-[var(--foreground)]/60">Was ist in welchem Plan enthalten?</p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-[var(--surface)] rounded-2xl border border-[var(--border)] overflow-hidden">
            <div className="grid grid-cols-3 gap-4 p-4 bg-[var(--surface-secondary)]/30 font-semibold text-sm">
              <div>Feature</div>
              <div className="text-center">Kostenlos</div>
              <div className="text-center">Pro</div>
            </div>
            {[
              ['Timeline / Feed', true, true],
              ['Schmerz-Tagebuch', true, true],
              ['Wunddokumentation', true, true],
              ['Vitalzeichen', true, true],
              ['Medikamente', true, true],
              ['Ernährung', true, true],
              ['Termine', true, true],
              ['Dokumente (max. 5 / unbegrenzt)', true, true],
              ['Fotos (max. 3 / unbegrenzt)', true, true],
              ['Packzettel (1 / unbegrenzt + Vorlagen)', true, true],
              ['Schlaf- & Stimmungstracking', true, true],
              ['Fragebögen', true, true],
              ['OP-Informationen', true, true],
              ['Arzt verbinden', true, true],
              ['KI-Assistent Bella', false, true],
              ['Fortschritts-Tracking', false, true],
              ['Reha-Übungen mit Timer', false, true],
              ['Red Flags / Alarmzeichen', false, true],
              ['Sprachnotizen', false, true],
              ['Health Sync', false, true],
              ['Familie einladen', false, true],
              ['Datenexport (PDF/JSON)', false, true],
              ['Analytics Dashboard', false, true],
              ['Mehrere Operationen', false, true],
            ].map(([feature, free, pro], i) => (
              <div
                key={i}
                className="grid grid-cols-3 gap-4 p-4 border-t border-[var(--border)] text-sm items-center"
              >
                <div className="text-[var(--foreground)]/80">{feature as string}</div>
                <div className="text-center">
                  {free ? (
                    <Check className="w-5 h-5 text-success mx-auto" />
                  ) : (
                    <X className="w-5 h-5 text-[var(--foreground)]/20 mx-auto" />
                  )}
                </div>
                <div className="text-center">
                  {pro ? (
                    <Check className="w-5 h-5 text-success mx-auto" />
                  ) : (
                    <X className="w-5 h-5 text-[var(--foreground)]/20 mx-auto" />
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

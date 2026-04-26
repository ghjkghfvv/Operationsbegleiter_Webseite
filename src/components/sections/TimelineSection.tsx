'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TextReveal } from '@/components/effects/TextReveal';

const phases = [
  {
    phase: 1,
    title: 'Vor der OP',
    emoji: '📋',
    accent: 'bg-accent/10 text-accent',
    dot: 'bg-accent',
    items: ['Individuelle OP-Checklisten abarbeiten', 'Nüchternheitsregeln & Medikamenten-Anweisungen', 'Packliste für den Klinikaufenthalt', 'OP-Aufklärung verständlich erklärt'],
  },
  {
    phase: 2,
    title: 'OP-Tag',
    emoji: '🏥',
    accent: 'bg-primary/10 text-primary',
    dot: 'bg-primary',
    items: ['Schritt-für-Schritt Tagesablauf', 'Narkose-Informationen & Tipps', 'Kontaktdaten der Klinik griffbereit', 'Beruhigende Begleitung durch Bella'],
  },
  {
    phase: 3,
    title: 'Krankenhaus',
    emoji: '🛏️',
    accent: 'bg-warning/10 text-warning',
    dot: 'bg-warning',
    items: ['Tägliche Aufgaben für die Genesung', 'Schmerzdokumentation mit Emoji-Skala', 'Medikamenten-Erinnerungen', 'Erste Mobilisierung & leichte Übungen'],
  },
  {
    phase: 4,
    title: 'Frühe Genesung',
    emoji: '🏠',
    accent: 'bg-success/10 text-success',
    dot: 'bg-success',
    items: ['Wundpflege-Anleitung mit Foto-Doku', 'Reha-Übungen mit Timer & Video', 'Ernährungsempfehlungen für die Heilung', 'Nachsorge- & Kontrolltermine im Blick'],
  },
  {
    phase: 5,
    title: 'Vollständige Genesung',
    emoji: '🎉',
    accent: 'bg-primary/10 text-primary',
    dot: 'bg-primary',
    items: ['Fortgeschrittene Reha-Programme', 'Langzeit-Vitalwerte & Fortschrittsübersicht', 'Eigene Daten als PDF exportieren', 'Rückkehr in den Alltag begleitet'],
  },
];

export function TimelineSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.7', 'end 0.7'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={containerRef} className="py-28 lg:py-36 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(0,122,255,0.04),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-primary uppercase tracking-[0.2em] inline-block"
          >
            Das Herzstück
          </motion.span>
          <TextReveal as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-5">
            Deine OP-Timeline in 5 Phasen
          </TextReveal>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-[var(--foreground)]/50 max-w-xl mx-auto leading-relaxed"
          >
            Von der Vorbereitung bis zur vollständigen Genesung — automatische Aufgaben, Erinnerungen und Tracking für jede Phase.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-[var(--border)]">
            <motion.div
              className="w-full bg-gradient-to-b from-primary via-accent to-primary rounded-full"
              style={{ height: lineHeight }}
            />
          </div>

          {phases.map((phase, i) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`relative flex items-start mb-14 last:mb-0 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 300 }}
                className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-11 h-11 rounded-full ${phase.dot} flex items-center justify-center text-lg z-10 shadow-md ring-4 ring-[var(--background)]`}
              >
                {phase.emoji}
              </motion.div>

              {/* Content card */}
              <div className={`ml-20 md:ml-0 md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? 'md:pr-0 md:mr-auto' : 'md:pl-0 md:ml-auto'}`}>
                <motion.div
                  whileHover={{ y: -3, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                  className="p-6 rounded-2xl bg-white border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${phase.accent}`}>
                      Phase {phase.phase}
                    </span>
                    <h3 className="font-semibold text-lg">{phase.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {phase.items.map((item, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + j * 0.06 }}
                        className="flex items-start gap-2.5 text-sm text-[var(--foreground)]/60 leading-relaxed"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${phase.dot} shrink-0 mt-1.5 opacity-60`} />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

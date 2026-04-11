'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, UserPlus, QrCode, TrendingUp } from 'lucide-react';
import { TextReveal } from '@/components/effects/TextReveal';

const icons = [
  <Download className="w-6 h-6" key="dl" />,
  <UserPlus className="w-6 h-6" key="up" />,
  <QrCode className="w-6 h-6" key="qr" />,
  <TrendingUp className="w-6 h-6" key="tu" />,
];

const steps = [
  { step: 1, title: 'App herunterladen', description: 'Lade den Operationsbegleiter kostenlos aus dem App Store oder Google Play Store herunter.' },
  { step: 2, title: 'OP & Profil einrichten', description: 'Wähle deine OP, gib das Datum ein und erstelle dein persönliches Gesundheitsprofil.' },
  { step: 3, title: 'Arzt verbinden', description: 'Verbinde dich per QR-Code mit deinem Arzt für optimale Betreuung und Datenaustausch.' },
  { step: 4, title: 'Genesung tracken', description: 'Dokumentiere deinen Heilungsverlauf und erhalte personalisierte Empfehlungen von Bella.' },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.6'],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[var(--surface)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-primary uppercase tracking-wider inline-block"
          >
            So einfach geht&apos;s
          </motion.span>
          <TextReveal as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            In 4 Schritten zur Genesung
          </TextReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Animated Connection Line */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-[var(--border)]">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              style={{ width: lineWidth }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.2, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="text-center relative">
                <div className="relative inline-flex items-center justify-center mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-primary relative z-10 border border-primary/20"
                  >
                    {icons[i]}
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.3, type: 'spring', stiffness: 300 }}
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-bold flex items-center justify-center z-20 shadow-lg shadow-primary/30"
                  >
                    {step.step}
                  </motion.div>
                </div>

                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-[var(--foreground)]/60 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

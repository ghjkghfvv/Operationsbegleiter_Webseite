'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BellaDemo } from '@/components/interactive/BellaDemo';
import { TextReveal } from '@/components/effects/TextReveal';
import { Check, Wifi, WifiOff, Brain, Heart } from 'lucide-react';

export function BellaShowcase() {
  return (
    <section className="py-28 lg:py-36 relative overflow-hidden bg-gradient-to-b from-pink-50/80 via-rose-50/40 to-transparent">
      {/* Subtle decorative accents */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-pink-100/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-rose-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-10 h-10 rounded-full bg-pink-300 ring-2 ring-pink-300 flex items-center justify-center overflow-hidden shrink-0">
                  <Image src="/bella_avatar.png" alt="Bella" width={40} height={40} className="w-full h-full object-cover" />
                </div>
                <span className="text-xs font-semibold text-pink-500 uppercase tracking-[0.2em]">
                  KI-Assistentin
                </span>
              </motion.div>
              <TextReveal as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5" delay={0.1}>
                Lerne Bella kennen
              </TextReveal>
              <p className="text-lg text-[var(--foreground)]/50 mb-10 leading-relaxed max-w-md">
                Deine persönliche KI-Gesundheitsassistentin ist rund um die Uhr für dich da.
                Stelle Fragen zu deiner Operation, Medikamenten oder Symptomen — Bella
                antwortet schnell, verständlich und einfühlsam.
              </p>

              {/* Dual Mode Badges */}
              <div className="flex flex-wrap gap-3 mb-10">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200/60 text-xs font-medium text-pink-600">
                  <Wifi className="w-3.5 h-3.5" />
                  Cloud-KI (Pro)
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-50 border border-green-200/60 text-xs font-medium text-green-600">
                  <WifiOff className="w-3.5 h-3.5" />
                  Offline-Modus
                </div>
              </div>

              {/* Features list */}
              <ul className="space-y-4">
                {[
                  { icon: <Brain className="w-3.5 h-3.5" />, text: 'Kontextbezogene Antworten basierend auf deinen Daten' },
                  { icon: <Heart className="w-3.5 h-3.5" />, text: 'Empathisch, verständlich und medizinisch fundiert' },
                  { icon: <Check className="w-3.5 h-3.5" />, text: 'Wundfotos analysieren & Symptome einordnen' },
                  { icon: <Check className="w-3.5 h-3.5" />, text: 'Ernährungstipps & Reha-Übungen empfehlen' },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex items-center gap-3 text-sm text-[var(--foreground)]/60"
                  >
                    <span className="w-6 h-6 rounded-full bg-pink-100/80 flex items-center justify-center text-pink-500 shrink-0">
                      {item.icon}
                    </span>
                    {item.text}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: Chat Demo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <BellaDemo />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

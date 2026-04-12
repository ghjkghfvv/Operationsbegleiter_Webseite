'use client';

import { motion } from 'framer-motion';
import { NumberTicker } from '@/components/effects/NumberTicker';
import { TextReveal } from '@/components/effects/TextReveal';

const stats = [
  { value: 10000, suffix: '+', label: 'begleitete OPs', icon: '📱', color: 'from-primary to-blue-400' },
  { value: 4.8, suffix: ' ★', label: 'Bewertung', icon: '⭐', decimals: 1, color: 'from-amber-400 to-orange-400' },
  { value: 98, suffix: '%', label: 'zufrieden', icon: '💬', color: 'from-emerald-400 to-green-400' },
  { value: 24, suffix: '/7', label: 'KI-Support durch Bella', icon: '🐰', color: 'from-pink-400 to-rose-400' },
];

export function StatsSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(0,122,255,0.04),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <TextReveal as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Zahlen die für sich sprechen
          </TextReveal>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="text-center p-5 sm:p-8 rounded-2xl bg-white border border-[var(--border)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-shadow duration-500 group"
              >
                <motion.div
                  className="text-2xl sm:text-3xl mb-3 sm:mb-4 inline-block"
                  whileHover={{ scale: 1.15, rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  {stat.icon}
                </motion.div>
                <NumberTicker
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals || 0}
                  className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)] font-mono block"
                />
                <p className="text-[var(--foreground)]/45 mt-3 text-sm font-medium">{stat.label}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

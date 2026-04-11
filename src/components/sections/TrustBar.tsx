'use client';

import { motion } from 'framer-motion';
import { Shield, MapPin, Lock, Award } from 'lucide-react';

export function TrustBar() {
  const trustItems = [
    { icon: <Shield className="w-4 h-4 text-success" />, text: 'DSGVO-konform' },
    { icon: <MapPin className="w-4 h-4 text-primary" />, text: 'Made in Germany' },
    { icon: <Lock className="w-4 h-4 text-accent" />, text: '256-Bit Verschlüsselung' },
    { icon: <Award className="w-4 h-4 text-primary" />, text: 'Medizinisch geprüft' },
  ];

  return (
    <section className="py-10 bg-white/80 backdrop-blur-sm border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-medium text-[var(--foreground)]/35 uppercase tracking-[0.15em] hidden sm:block"
          >
            Vertraut von 10.000+ Patienten
          </motion.span>

          <div className="h-4 w-px bg-[var(--border)] hidden sm:block" />

          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-center gap-2"
            >
              {item.icon}
              <span className="text-sm font-medium text-[var(--foreground)]/55">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

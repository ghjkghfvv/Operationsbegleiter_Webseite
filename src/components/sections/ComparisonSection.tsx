'use client';

import { motion } from 'framer-motion';
import { ComparisonSlider } from '@/components/interactive/ComparisonSlider';
import { TextReveal } from '@/components/effects/TextReveal';

export function ComparisonSection() {
  return (
    <section className="py-28 lg:py-36 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-primary uppercase tracking-[0.2em] inline-block"
          >
            Vergleich
          </motion.span>
          <TextReveal as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-5">
            Der Unterschied ist spürbar
          </TextReveal>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-[var(--foreground)]/50 max-w-lg mx-auto"
          >
            Ziehe den Slider und sieh den Unterschied zwischen einer Genesung mit und ohne Operationsbegleiter.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <ComparisonSlider />
        </motion.div>
      </div>
    </section>
  );
}

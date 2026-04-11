'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { MagneticElement } from '@/components/effects/MagneticElement';
import { TextReveal } from '@/components/effects/TextReveal';
import { Globe, Shield, Sparkles } from 'lucide-react';
import Image from 'next/image';

export function CTASection() {
  return (
    <section className="py-28 lg:py-36 relative overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-primary/[0.06]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(0,122,255,0.08),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered CTA */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 text-primary text-sm font-medium mb-8 border border-primary/15"
          >
            <Sparkles className="w-4 h-4" />
            Kostenlos starten
          </motion.div>

          <TextReveal as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Starte jetzt deine OP-Begleitung
          </TextReveal>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[var(--foreground)]/50 mb-10 leading-relaxed max-w-xl mx-auto"
          >
            Lade den Operationsbegleiter kostenlos herunter. Deine persönliche KI-Assistentin Bella
            wartet schon auf dich — 24/7, auch offline.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <MagneticElement strength={0.15}>
              <Button size="lg" href="/preise" className="shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow text-lg px-10 py-5">
                Kostenlos starten →
              </Button>
            </MagneticElement>
          </motion.div>

          {/* Store Badges - centered */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            <a
              href="#"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#1a1a1a] text-white hover:bg-black transition-colors shadow-sm hover:shadow-md"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <p className="text-[10px] leading-tight opacity-70">Download on the</p>
                <p className="text-sm font-semibold leading-tight">App Store</p>
              </div>
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#1a1a1a] text-white hover:bg-black transition-colors shadow-sm hover:shadow-md"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302-2.302 2.302L15.396 12l2.302-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302L5.864 2.658z"/>
              </svg>
              <div className="text-left">
                <p className="text-[10px] leading-tight opacity-70">GET IT ON</p>
                <p className="text-sm font-semibold leading-tight">Google Play</p>
              </div>
            </a>

            <a
              href="https://operationsbegleiter-860e7.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-primary text-white hover:bg-primary-dark transition-colors shadow-sm hover:shadow-md"
            >
              <Globe className="w-6 h-6" />
              <div className="text-left">
                <p className="text-[10px] leading-tight opacity-70">Direkt im Browser</p>
                <p className="text-sm font-semibold leading-tight">Web App</p>
              </div>
            </a>
          </motion.div>
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 text-sm text-[var(--foreground)]/40"
        >
          <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> DSGVO-konform</span>
          <span className="flex items-center gap-2">🇩🇪 Made in Germany</span>
          <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> 256-Bit verschlüsselt</span>
        </motion.div>
      </div>
    </section>
  );
}

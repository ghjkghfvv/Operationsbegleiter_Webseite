'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { TextReveal } from '@/components/effects/TextReveal';
import { ParticleField } from '@/components/effects/ParticleField';
import { MagneticElement } from '@/components/effects/MagneticElement';
import { NumberTicker } from '@/components/effects/NumberTicker';
import { FileText, CalendarDays, Sparkles } from 'lucide-react';
import Image from 'next/image';

const featurePopups = [
  {
    Icon: FileText,
    title: 'Briefing',
    desc: 'Alles Wichtige zu deiner OP auf einen Blick zusammengefasst',
    side: 'left' as const,
    topPercent: 10,
    delay: 1.2,
    floatY: [0, -8, 0],
    duration: 5,
  },
  {
    Icon: CalendarDays,
    title: 'Mein Plan',
    desc: 'Deine persönliche OP-Timeline mit Aufgaben für jede Phase',
    side: 'left' as const,
    topPercent: 50,
    delay: 1.5,
    floatY: [0, 6, 0],
    duration: 4.5,
  },
  {
    Icon: Sparkles,
    title: 'Bella AI',
    desc: 'Deine KI-Assistentin beantwortet alle Fragen rund um die Uhr',
    side: 'right' as const,
    topPercent: 30,
    delay: 1.8,
    floatY: [0, -7, 0],
    duration: 5.5,
  },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.95]);
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-24 pb-32"
    >
      {/* Premium gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,122,255,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_50%,rgba(88,86,214,0.08),transparent)]" />
      </div>

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.8) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Particle Field - subtle */}
      <div className="absolute inset-0 opacity-60">
        <ParticleField count={30} speed={0.15} connectionDistance={80} />
      </div>

      <motion.div
        style={{ y, opacity, scale }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <div className="max-w-xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/8 text-primary text-sm font-medium mb-8 border border-primary/15 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
                </span>
                Jetzt verfügbar für iOS, Android & Web
              </span>
            </motion.div>

            {/* Headline */}
            <TextReveal
              as="h1"
              className="text-[2.75rem] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold tracking-tight leading-[1.08] mb-7"
              delay={0.5}
            >
              Dein digitaler Begleiter vor, während und nach der OP
            </TextReveal>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="text-lg sm:text-xl text-[var(--foreground)]/55 max-w-md mb-10 leading-relaxed"
            >
              KI-gestützte Unterstützung, Gesundheitstracking und Arzt-Vernetzung — alles in einer App.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.2 }}
              className="flex flex-col gap-4 mb-12"
            >
              {/* Store Buttons */}
              <div className="flex flex-wrap gap-3">
                <MagneticElement strength={0.12}>
                  <a
                    href="https://apps.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 transition-opacity shadow-lg"
                  >
                    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div className="text-left">
                      <p className="text-[10px] leading-none opacity-75">Laden im</p>
                      <p className="text-sm font-semibold leading-tight">App Store</p>
                    </div>
                  </a>
                </MagneticElement>

                <MagneticElement strength={0.12}>
                  <a
                    href="https://play.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 transition-opacity shadow-lg"
                  >
                    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.18 23.76c.3.17.64.23.99.17l12.6-7.17-2.97-2.97-10.62 9.97zM.66 1.15C.25 1.57 0 2.22 0 3.04v17.93c0 .82.25 1.47.67 1.89l.1.09 10.03-10.03v-.23L.76 1.06l-.1.09zM20.96 10.5l-2.81-1.6-3.18 3.18 3.18 3.18 2.84-1.62c.81-.46.81-1.21-.03-1.14zM3.18.24L15.8 7.41l-2.97 2.97L3.18.24z"/>
                    </svg>
                    <div className="text-left">
                      <p className="text-[10px] leading-none opacity-75">Jetzt bei</p>
                      <p className="text-sm font-semibold leading-tight">Google Play</p>
                    </div>
                  </a>
                </MagneticElement>
              </div>

              {/* Web App */}
              <MagneticElement strength={0.08}>
                <Button variant="outline" size="sm" href="#" className="self-start">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                  Im Browser starten
                </Button>
              </MagneticElement>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.6 }}
              className="flex gap-10"
            >
              {[
                { value: 10000, suffix: '+', label: 'begleitete OPs' },
                { value: 98, suffix: '%', label: 'zufrieden' },
                { value: 24, suffix: '/7', label: 'KI-Support' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.8 + i * 0.15 }}
                  className="relative"
                >
                  <NumberTicker
                    value={stat.value}
                    suffix={stat.suffix}
                    className="text-2xl font-bold text-[var(--foreground)] font-mono"
                  />
                  <p className="text-xs text-[var(--foreground)]/45 mt-1 font-medium uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: App Preview with Feature Popups beside it */}
          <motion.div
            style={{ y: phoneY }}
            className="relative flex justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              {/* Feature Popup Cards with arrows beside the phone */}
              {featurePopups.map((popup) => {
                const isLeft = popup.side === 'left';
                return (
                  <motion.div
                    key={popup.title}
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: popup.delay, ease: 'easeOut' }}
                    className={`absolute z-20 hidden lg:flex items-center gap-0 ${
                      isLeft ? 'right-full mr-3' : 'left-full ml-3'
                    }`}
                    style={{ top: `${popup.topPercent}%` }}
                  >
                    {isLeft ? (
                      <>
                        <motion.div
                          animate={{ y: popup.floatY }}
                          transition={{ duration: popup.duration, repeat: Infinity, ease: 'easeInOut' }}
                          className="bg-white rounded-2xl p-4 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-black/[0.04] w-52"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
                              <popup.Icon className="w-[18px] h-[18px] text-primary" />
                            </div>
                            <div>
                              <p className="text-[13px] font-semibold text-[var(--foreground)]">{popup.title}</p>
                              <p className="text-[11px] text-[var(--foreground)]/50 leading-relaxed mt-0.5">{popup.desc}</p>
                            </div>
                          </div>
                        </motion.div>
                        <svg width="36" height="20" viewBox="0 0 36 20" fill="none" className="shrink-0 -ml-0.5">
                          <path d="M0 10 C8 10, 18 10, 28 10" stroke="rgba(0,122,255,0.25)" strokeWidth="1.5" strokeDasharray="3 3" />
                          <circle cx="32" cy="10" r="3" fill="rgba(0,122,255,0.3)" />
                        </svg>
                      </>
                    ) : (
                      <>
                        <svg width="36" height="20" viewBox="0 0 36 20" fill="none" className="shrink-0 -mr-0.5">
                          <path d="M36 10 C28 10, 18 10, 8 10" stroke="rgba(0,122,255,0.25)" strokeWidth="1.5" strokeDasharray="3 3" />
                          <circle cx="4" cy="10" r="3" fill="rgba(0,122,255,0.3)" />
                        </svg>
                        <motion.div
                          animate={{ y: popup.floatY }}
                          transition={{ duration: popup.duration, repeat: Infinity, ease: 'easeInOut' }}
                          className="bg-white rounded-2xl p-4 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-black/[0.04] w-52"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
                              <popup.Icon className="w-[18px] h-[18px] text-primary" />
                            </div>
                            <div>
                              <p className="text-[13px] font-semibold text-[var(--foreground)]">{popup.title}</p>
                              <p className="text-[11px] text-[var(--foreground)]/50 leading-relaxed mt-0.5">{popup.desc}</p>
                            </div>
                          </div>
                        </motion.div>
                      </>
                    )}
                  </motion.div>
                );
              })}

              {/* App Preview Image */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,122,255,0.15),0_0_0_1px_rgba(0,0,0,0.05)]">
                <Image
                  src="/vorschau.png"
                  alt="Operationsbegleiter App Vorschau"
                  width={320}
                  height={640}
                  className="w-[280px] sm:w-[320px] h-auto"
                  priority
                />
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-16 bg-gradient-to-tr from-primary/15 via-transparent to-accent/15 rounded-full blur-3xl -z-10" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Smooth section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--surface)] to-transparent" />
    </section>
  );
}

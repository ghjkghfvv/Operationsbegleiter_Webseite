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
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <MagneticElement strength={0.12}>
                <Button size="lg" href="/preise" className="shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow">
                  Kostenlos starten
                </Button>
              </MagneticElement>
              <MagneticElement strength={0.12}>
                <Button variant="outline" size="lg" href="/features">
                  Features entdecken
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

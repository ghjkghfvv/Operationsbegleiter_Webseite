'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';
import { TextReveal } from '@/components/effects/TextReveal';

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent(prev => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [paused]);

  function goTo(index: number) {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }

  function goNext() {
    setDirection(1);
    setCurrent(prev => (prev + 1) % TESTIMONIALS.length);
  }

  function goPrev() {
    setDirection(-1);
    setCurrent(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section className="py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_50%_50%,rgba(0,122,255,0.03),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-primary uppercase tracking-[0.2em] inline-block"
          >
            Erfahrungen
          </motion.span>
          <TextReveal as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-5">
            Was unsere Nutzer sagen
          </TextReveal>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-[var(--foreground)]/50 max-w-md mx-auto"
          >
            Echte Erfahrungsberichte von Patienten, die den Operationsbegleiter genutzt haben.
          </motion.p>
        </div>

        <div
          className="relative max-w-2xl mx-auto min-h-[380px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="text-center p-10 sm:p-14 rounded-3xl bg-white border border-[var(--border)] shadow-sm relative">
                {/* Quote icon */}
                <div className="absolute top-8 left-10 opacity-[0.06]">
                  <Quote className="w-16 h-16 text-primary" />
                </div>

                {/* Avatar */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/80 to-accent/80 flex items-center justify-center text-xl text-white font-semibold mx-auto mb-5"
                >
                  {TESTIMONIALS[current].name.charAt(0)}
                </motion.div>

                {/* Stars */}
                <div className="flex justify-center gap-0.5 mb-6">
                  {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.15 + i * 0.04 }}
                    >
                      <Star className="w-4 h-4 text-warning fill-warning" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg lg:text-xl text-[var(--foreground)]/75 leading-relaxed mb-8 max-w-lg mx-auto">
                  &ldquo;{TESTIMONIALS[current].text}&rdquo;
                </p>

                {/* Author */}
                <p className="font-semibold text-base">{TESTIMONIALS[current].name}</p>
                <p className="text-sm text-[var(--foreground)]/40 mt-1">
                  {TESTIMONIALS[current].age > 0
                    ? `${TESTIMONIALS[current].age} Jahre · ${TESTIMONIALS[current].operation}`
                    : TESTIMONIALS[current].operation}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={goPrev}
              className="p-2.5 rounded-full bg-white border border-[var(--border)] hover:border-primary/20 transition-colors shadow-sm"
              aria-label="Vorheriges Testimonial"
            >
              <ChevronLeft className="w-4 h-4 text-[var(--foreground)]/50" />
            </motion.button>

            <div className="flex gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? 'w-6 bg-primary' : 'w-1.5 bg-[var(--foreground)]/10 hover:bg-primary/30'
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={goNext}
              className="p-2.5 rounded-full bg-white border border-[var(--border)] hover:border-primary/20 transition-colors shadow-sm"
              aria-label="Nächstes Testimonial"
            >
              <ChevronRight className="w-4 h-4 text-[var(--foreground)]/50" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

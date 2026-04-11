'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Shield } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerChildren, StaggerItem } from '@/components/animations/StaggerChildren';
import { PRICING_PLANS_PATIENT, PRICING_PLANS_ARZT, FAQ_ITEMS } from '@/lib/constants';
import { formatPrice } from '@/lib/utils';

type Audience = 'patient' | 'arzt';

export default function PreisePage() {
  const [yearly, setYearly] = useState(true);
  const [audience, setAudience] = useState<Audience>('patient');

  const plans = audience === 'patient' ? PRICING_PLANS_PATIENT : PRICING_PLANS_ARZT;

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <ScrollReveal>
          <Badge variant="primary" className="mb-4">Preise</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Einfache & transparente Preise
          </h1>
          <p className="text-lg text-[var(--foreground)]/60 max-w-2xl mx-auto mb-8">
            Starten Sie kostenlos und upgraden Sie, wenn Sie bereit sind. Keine versteckten Kosten.
          </p>

          {/* Audience Toggle */}
          <div className="inline-flex items-center gap-3 p-1 rounded-2xl bg-[var(--surface)] border border-[var(--border)] mb-6">
            <button
              onClick={() => setAudience('patient')}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                audience === 'patient' ? 'bg-primary text-white shadow-md' : 'text-[var(--foreground)]/60'
              }`}
            >
              Patienten
            </button>
            <button
              onClick={() => setAudience('arzt')}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                audience === 'arzt' ? 'bg-primary text-white shadow-md' : 'text-[var(--foreground)]/60'
              }`}
            >
              Ärzte & Organisationen
            </button>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 p-1 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
              <button
                onClick={() => setYearly(false)}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  !yearly ? 'bg-primary text-white shadow-md' : 'text-[var(--foreground)]/60'
                }`}
              >
                Monatlich
              </button>
              <button
                onClick={() => setYearly(true)}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 cursor-pointer ${
                  yearly ? 'bg-primary text-white shadow-md' : 'text-[var(--foreground)]/60'
                }`}
              >
                Jährlich
                <span className="text-xs px-1.5 py-0.5 rounded-full bg-success/20 text-success font-bold">
                  Spare
                </span>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <StaggerChildren key={audience} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <StaggerItem key={plan.name + audience}>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card
                  variant={plan.highlighted ? 'elevated' : 'default'}
                  hover={false}
                  className={`h-full relative ${
                    plan.highlighted
                      ? 'border-2 border-primary shadow-xl shadow-primary/10'
                      : ''
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge variant="primary">Beliebteste Wahl</Badge>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                    <p className="text-sm text-[var(--foreground)]/50 mb-4">{plan.description}</p>
                    <div className="flex items-end justify-center gap-1">
                      <span className="text-4xl font-bold font-mono">
                        {formatPrice(yearly ? plan.price.yearly : plan.price.monthly)}
                      </span>
                      {plan.price.monthly > 0 && (
                        <span className="text-sm text-[var(--foreground)]/50 mb-1">/Monat</span>
                      )}
                    </div>
                    {yearly && plan.price.monthly > 0 && 'yearlyNote' in plan && (
                      <p className="text-xs text-success mt-1">
                        {plan.yearlyNote}
                      </p>
                    )}
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map(feature => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-success shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map(feature => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-[var(--foreground)]/30">
                        <X className="w-4 h-4 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant={plan.highlighted ? 'primary' : 'outline'}
                    className="w-full"
                    href="#"
                  >
                    {plan.cta}
                  </Button>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* Payment Note */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <ScrollReveal>
          <Card variant="glass" hover={false} className="text-center py-8">
            <Shield className="w-12 h-12 text-success mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Bezahlung über App Store oder Play Store</h3>
            <p className="text-[var(--foreground)]/60 max-w-md mx-auto">
              Jederzeit kündbar. Keine versteckten Kosten.
            </p>
          </Card>
        </ScrollReveal>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Häufig gestellte Fragen</h2>
        </ScrollReveal>

        <ScrollReveal>
          <Accordion items={[...FAQ_ITEMS]} />
        </ScrollReveal>
      </section>
    </div>
  );
}

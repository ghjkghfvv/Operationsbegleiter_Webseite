'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, useSpring, useMotionValue } from 'framer-motion';

interface NumberTickerProps {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
  decimals?: number;
}

export function NumberTicker({
  value,
  suffix = '',
  prefix = '',
  className = '',
  duration = 2,
  decimals = 0,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        const formatted = decimals > 0
          ? latest.toFixed(decimals)
          : Math.floor(latest).toLocaleString('de-DE');
        ref.current.textContent = `${prefix}${formatted}${suffix}`;
      }
    });
    return unsubscribe;
  }, [springValue, suffix, prefix, decimals]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {prefix}0{suffix}
    </motion.span>
  );
}

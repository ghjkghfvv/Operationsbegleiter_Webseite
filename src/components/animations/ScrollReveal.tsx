'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeInUp, fadeIn, scaleIn, slideInLeft, slideInRight } from '@/lib/animations';

type AnimationType = 'fadeInUp' | 'fadeIn' | 'scaleIn' | 'slideInLeft' | 'slideInRight';

const animationMap = {
  fadeInUp,
  fadeIn,
  scaleIn,
  slideInLeft,
  slideInRight,
};

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  animation = 'fadeInUp',
  delay = 0,
  className,
}: ScrollRevealProps) {
  const variants = animationMap[animation];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

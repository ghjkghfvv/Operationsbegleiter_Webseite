'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface TextScrambleProps {
  children: string;
  className?: string;
  speed?: number;
  trigger?: 'inView' | 'immediate';
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

export function TextScramble({
  children,
  className = '',
  speed = 30,
  trigger = 'inView',
}: TextScrambleProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });
  const [displayText, setDisplayText] = useState(children);
  const target = children;

  useEffect(() => {
    const shouldAnimate = trigger === 'immediate' || isInView;
    if (!shouldAnimate) return;

    let frame = 0;
    const totalFrames = target.length * 2;

    const interval = setInterval(() => {
      const progress = frame / totalFrames;
      const charsRevealed = Math.floor(progress * target.length);

      let text = '';
      for (let i = 0; i < target.length; i++) {
        if (target[i] === ' ') {
          text += ' ';
        } else if (i < charsRevealed) {
          text += target[i];
        } else {
          text += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      setDisplayText(text);
      frame++;

      if (frame > totalFrames) {
        setDisplayText(target);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isInView, target, speed, trigger]);

  return (
    <motion.span
      ref={ref}
      className={`${className} font-mono`}
      initial={{ opacity: 0 }}
      animate={isInView || trigger === 'immediate' ? { opacity: 1 } : {}}
      transition={{ duration: 0.3 }}
    >
      {displayText}
    </motion.span>
  );
}

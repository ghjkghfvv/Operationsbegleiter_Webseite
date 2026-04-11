'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

interface TextRevealProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  delay?: number;
  mode?: 'word' | 'char' | 'line';
}

export function TextReveal({
  children,
  className = '',
  as: Tag = 'h2',
  delay = 0,
  mode = 'word',
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  const units = mode === 'char'
    ? children.split('')
    : mode === 'line'
    ? children.split('\n')
    : children.split(' ');

  return (
    <Tag ref={ref as React.RefObject<HTMLHeadingElement>} className={`${className} overflow-hidden`}>
      <span className="sr-only">{children}</span>
      <span aria-hidden className="inline">
        {units.map((unit, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: '110%', rotateX: -80 }}
              animate={isInView ? { y: 0, rotateX: 0 } : { y: '110%', rotateX: -80 }}
              transition={{
                duration: 0.7,
                delay: delay + i * (mode === 'char' ? 0.02 : 0.06),
                ease: [0.215, 0.61, 0.355, 1],
              }}
            >
              {unit}
            </motion.span>
            {mode !== 'char' && mode !== 'line' && (
              <span className="inline-block w-[0.3em]" />
            )}
          </span>
        ))}
      </span>
    </Tag>
  );
}

interface ScrollTextRevealProps {
  children: string;
  className?: string;
}

export function ScrollTextReveal({ children, className = '' }: ScrollTextRevealProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.3'],
  });

  const words = children.split(' ');

  return (
    <p ref={ref} className={`${className} flex flex-wrap`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

function Word({
  children,
  range,
  progress,
}: {
  children: string;
  range: [number, number];
  progress: ReturnType<typeof useTransform<number, number>> | ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <span className="relative mr-[0.3em] mt-[0.1em]">
      <motion.span style={{ opacity }} className="inline-block">
        {children}
      </motion.span>
    </span>
  );
}

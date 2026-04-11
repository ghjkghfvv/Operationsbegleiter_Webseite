'use client';

import { motion } from 'framer-motion';

interface GradientOrbsProps {
  className?: string;
}

export function GradientOrbs({ className = '' }: GradientOrbsProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Primary orb */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,112,67,0.15) 0%, transparent 70%)',
          top: '10%',
          left: '10%',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, 100, 50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      {/* Accent orb */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(92,107,192,0.12) 0%, transparent 70%)',
          top: '30%',
          right: '10%',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, -80, -40, 0],
          y: [0, 80, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      {/* Third orb */}
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,138,101,0.1) 0%, transparent 70%)',
          bottom: '10%',
          left: '40%',
          filter: 'blur(50px)',
        }}
        animate={{
          x: [0, 60, -60, 0],
          y: [0, -40, 60, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}

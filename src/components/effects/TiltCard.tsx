'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glare?: boolean;
  maxTilt?: number;
}

export function TiltCard({ children, className, glare = true, maxTilt = 12 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setTransform({
      rotateX: (0.5 - y) * maxTilt,
      rotateY: (x - 0.5) * maxTilt,
    });

    setGlarePos({ x: x * 100, y: y * 100 });
  }

  function handleMouseLeave() {
    setTransform({ rotateX: 0, rotateY: 0 });
    setGlarePos({ x: 50, y: 50 });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={transform}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      style={{ perspective: 800, transformStyle: 'preserve-3d' }}
      className={cn('relative group', className)}
    >
      {children}
      {/* Glare */}
      {glare && (
        <div
          className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
          }}
        />
      )}
    </motion.div>
  );
}

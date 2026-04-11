'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticElementProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  radius?: number;
}

export function MagneticElement({
  children,
  className = '',
  strength = 0.3,
  radius = 150,
}: MagneticElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const distance = Math.sqrt(distX * distX + distY * distY);

    if (distance < radius) {
      const factor = 1 - distance / radius;
      setPosition({
        x: distX * strength * factor,
        y: distY * strength * factor,
      });
    }
  }

  function handleMouseLeave() {
    setPosition({ x: 0, y: 0 });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', damping: 15, stiffness: 200, mass: 0.1 }}
      className={className}
      data-magnetic
    >
      {children}
    </motion.div>
  );
}

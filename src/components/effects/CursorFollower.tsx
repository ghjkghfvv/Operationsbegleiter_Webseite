'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export function CursorFollower() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const cursorX = useSpring(0, { damping: 25, stiffness: 250 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 250 });
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    // Only show on devices with fine pointer (no touch)
    if (window.matchMedia('(pointer: fine)').matches === false) return;

    function onMove(e: MouseEvent) {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    }

    function onEnterInteractive(e: Event) {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], input, textarea, select, [data-magnetic]')) {
        setHovering(true);
      }
    }

    function onLeaveInteractive(e: Event) {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], input, textarea, select, [data-magnetic]')) {
        setHovering(false);
      }
    }

    function onLeave() {
      setVisible(false);
    }

    function onEnter() {
      setVisible(true);
    }

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onEnterInteractive, { passive: true });
    document.addEventListener('mouseout', onLeaveInteractive, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onEnterInteractive);
      document.removeEventListener('mouseout', onLeaveInteractive);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, [cursorX, cursorY, visible, mounted]);

  if (!mounted) return null;

  return (
    <>
      {/* Outer glow */}
      <motion.div
        ref={innerRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen hidden lg:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: hovering ? 60 : 32,
          height: hovering ? 60 : 32,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-r from-primary/40 to-accent/40 blur-sm" />
      </motion.div>
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: hovering ? 8 : 5,
          height: hovering ? 8 : 5,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        <div className="w-full h-full rounded-full bg-white" />
      </motion.div>
    </>
  );
}

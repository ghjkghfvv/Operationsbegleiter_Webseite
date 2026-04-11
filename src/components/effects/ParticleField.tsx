'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: number;
}

interface ParticleFieldProps {
  className?: string;
  count?: number;
  color?: string;
  speed?: number;
  connectionDistance?: number;
  interactive?: boolean;
}

export function ParticleField({
  className = '',
  count = 60,
  speed = 0.3,
  connectionDistance = 120,
  interactive = true,
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    const dpr = window.devicePixelRatio || 1;

    function resize() {
      width = canvas!.offsetWidth;
      height = canvas!.offsetHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.scale(dpr, dpr);
    }

    resize();
    window.addEventListener('resize', resize);

    // Create particles
    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.2,
      hue: Math.random() > 0.5 ? 16 : 233, // Orange or Indigo hue
    }));

    function handleMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }

    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    function animate() {
      ctx!.clearRect(0, 0, width, height);

      particles.forEach((p, i) => {
        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse interaction
        if (interactive) {
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150 && dist > 0.1) {
            const force = (150 - dist) / 150;
            p.vx -= (dx / dist) * force * 0.02;
            p.vy -= (dy / dist) * force * 0.02;
          }
        }

        // Damping
        p.vx *= 0.999;
        p.vy *= 0.999;

        // Draw particle
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = p.hue === 16
          ? `rgba(0, 122, 255, ${p.opacity})`
          : `rgba(88, 86, 214, ${p.opacity})`;
        ctx!.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx2 = p.x - other.x;
          const dy2 = p.y - other.y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (dist2 < connectionDistance) {
            const alpha = (1 - dist2 / connectionDistance) * 0.15;
            ctx!.beginPath();
            ctx!.moveTo(p.x, p.y);
            ctx!.lineTo(other.x, other.y);
            ctx!.strokeStyle = `rgba(0, 122, 255, ${alpha})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
      if (interactive) {
        canvas.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [count, speed, connectionDistance, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto ${className}`}
      style={{ opacity: 0.6 }}
    />
  );
}

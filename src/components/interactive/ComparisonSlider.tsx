'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export function ComparisonSlider() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  function updatePosition(clientX: number) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }

  function handlePointerDown(e: React.PointerEvent) {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }

  function handlePointerMove(e: React.PointerEvent) {
    if (isDragging.current) updatePosition(e.clientX);
  }

  function handlePointerUp() {
    isDragging.current = false;
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden cursor-col-resize select-none touch-none shadow-xl shadow-black/[0.06] ring-1 ring-black/[0.05]"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      role="slider"
      aria-label="Vergleich mit und ohne Operationsbegleiter"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'ArrowLeft') setPosition(p => Math.max(0, p - 5));
        if (e.key === 'ArrowRight') setPosition(p => Math.min(100, p + 5));
      }}
    >
      {/* Without App (Left) */}
      <div className="w-full aspect-[4/5] sm:aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200 relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-5 sm:p-12">
          <div className="text-4xl sm:text-5xl mb-3 sm:mb-5 grayscale opacity-60">😰</div>
          <h3 className="text-base sm:text-xl font-bold text-gray-400 mb-3 sm:mb-4">Ohne Operationsbegleiter</h3>
          <ul className="text-xs sm:text-sm text-gray-400 space-y-1.5 sm:space-y-2.5 text-center">
            <li className="flex items-center justify-center gap-2"><span className="opacity-50">✗</span> Zettelwirtschaft & verstreute Notizen</li>
            <li className="flex items-center justify-center gap-2"><span className="opacity-50">✗</span> Unsicherheit bei Symptomen</li>
            <li className="flex items-center justify-center gap-2"><span className="opacity-50">✗</span> Vergessene Medikamente</li>
            <li className="flex items-center justify-center gap-2"><span className="opacity-50">✗</span> Ständige Rückfragen beim Arzt</li>
            <li className="flex items-center justify-center gap-2"><span className="opacity-50">✗</span> Stress & Überforderung</li>
          </ul>
        </div>
      </div>

      {/* With App (Right) */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center p-5 sm:p-12">
          <div className="text-4xl sm:text-5xl mb-3 sm:mb-5">😊</div>
          <h3 className="text-base sm:text-xl font-bold text-primary mb-3 sm:mb-4">Mit Operationsbegleiter</h3>
          <ul className="text-xs sm:text-sm text-[var(--foreground)]/65 space-y-1.5 sm:space-y-2.5 text-center">
            <li className="flex items-center justify-center gap-2"><span className="text-success">✓</span> Alles digital & organisiert</li>
            <li className="flex items-center justify-center gap-2"><span className="text-success">✓</span> KI-Assistentin Bella hilft 24/7</li>
            <li className="flex items-center justify-center gap-2"><span className="text-success">✓</span> Automatische Medikamenten-Erinnerungen</li>
            <li className="flex items-center justify-center gap-2"><span className="text-success">✓</span> Arzt hat Überblick in Echtzeit</li>
            <li className="flex items-center justify-center gap-2"><span className="text-success">✓</span> Sicherheit & Kontrolle</li>
          </ul>
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white/80 shadow-lg z-10"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-md border border-black/5 flex items-center justify-center">
          <span className="text-primary text-xs">⟷</span>
        </div>
      </div>
    </div>
  );
}

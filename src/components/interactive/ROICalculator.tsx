'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, TrendingDown, TrendingUp } from 'lucide-react';

export function ROICalculator() {
  const [patients, setPatients] = useState(50);

  const results = useMemo(() => {
    const minutesPerPatient = 15;
    const timeSavedPerPatient = 10;
    const totalTimeSaved = (patients * timeSavedPerPatient) / 60;
    const reducedCallbacks = Math.round(patients * 0.3);
    const complianceImprovement = Math.min(35, Math.round(patients * 0.2 + 10));
    return { totalTimeSaved: Math.round(totalTimeSaved), reducedCallbacks, complianceImprovement };
  }, [patients]);

  return (
    <div className="glass rounded-3xl p-8 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-center">ROI-Rechner</h3>

      {/* Slider */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <label htmlFor="patients-slider" className="text-sm font-medium">
            Patienten pro Monat
          </label>
          <span className="text-2xl font-bold text-primary font-mono">{patients}</span>
        </div>
        <input
          id="patients-slider"
          type="range"
          min={10}
          max={200}
          value={patients}
          onChange={e => setPatients(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer bg-[var(--surface-secondary)] accent-primary"
        />
        <div className="flex justify-between text-xs text-[var(--foreground)]/50 mt-1">
          <span>10</span>
          <span>200</span>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[var(--surface)] rounded-2xl p-5 text-center">
          <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
          <motion.p
            key={results.totalTimeSaved}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-primary font-mono"
          >
            {results.totalTimeSaved}h
          </motion.p>
          <p className="text-sm text-[var(--foreground)]/60 mt-1">Zeitersparnis / Monat</p>
        </div>

        <div className="bg-[var(--surface)] rounded-2xl p-5 text-center">
          <TrendingDown className="w-8 h-8 text-success mx-auto mb-2" />
          <motion.p
            key={results.reducedCallbacks}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-success font-mono"
          >
            -{results.reducedCallbacks}
          </motion.p>
          <p className="text-sm text-[var(--foreground)]/60 mt-1">Weniger Rückfragen</p>
        </div>

        <div className="bg-[var(--surface)] rounded-2xl p-5 text-center">
          <TrendingUp className="w-8 h-8 text-accent mx-auto mb-2" />
          <motion.p
            key={results.complianceImprovement}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-accent font-mono"
          >
            +{results.complianceImprovement}%
          </motion.p>
          <p className="text-sm text-[var(--foreground)]/60 mt-1">Bessere Compliance</p>
        </div>
      </div>
    </div>
  );
}

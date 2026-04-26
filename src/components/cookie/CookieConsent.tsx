'use client';

import { useCallback, useEffect, useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Cookie, X, Check } from 'lucide-react';
import {
  CATEGORIES,
  CONSENT_CHANGED_EVENT,
  OPEN_SETTINGS_EVENT,
  readConsent,
  writeConsent,
  type ConsentState,
} from '@/lib/cookie-consent';
import { Button } from '@/components/ui/Button';

function subscribe(cb: () => void) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener(CONSENT_CHANGED_EVENT, cb);
  window.addEventListener('storage', cb);
  return () => {
    window.removeEventListener(CONSENT_CHANGED_EVENT, cb);
    window.removeEventListener('storage', cb);
  };
}

function getSnapshot(): ConsentState | null {
  return readConsent();
}

function getServerSnapshot(): ConsentState | null {
  return null;
}

export function CookieConsent() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [delayElapsed, setDelayElapsed] = useState(false);
  const [statistics, setStatistics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  // Small delay so the banner doesn't fight hero animations on first paint.
  // The setTimeout setter is async, not synchronous-in-effect.
  useEffect(() => {
    const t = window.setTimeout(() => setDelayElapsed(true), 600);
    return () => window.clearTimeout(t);
  }, []);

  // Footer link → open settings dialog. Initialize toggles from current consent.
  useEffect(() => {
    const onOpen = () => {
      const current = readConsent();
      setStatistics(current?.statistics ?? false);
      setMarketing(current?.marketing ?? false);
      setSettingsOpen(true);
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, onOpen);
  }, []);

  // Lock background scroll when modal is open.
  useEffect(() => {
    if (!settingsOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [settingsOpen]);

  // Close modal on Escape.
  useEffect(() => {
    if (!settingsOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSettingsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [settingsOpen]);

  const persist = useCallback((stats: boolean, mkt: boolean) => {
    writeConsent({ statistics: stats, marketing: mkt });
    setSettingsOpen(false);
  }, []);

  const acceptAll = useCallback(() => {
    persist(true, true);
  }, [persist]);

  const acceptNecessary = useCallback(() => {
    persist(false, false);
  }, [persist]);

  const saveSelection = useCallback(() => {
    persist(statistics, marketing);
  }, [persist, statistics, marketing]);

  const openSettingsFromBanner = useCallback(() => {
    const current = readConsent();
    setStatistics(current?.statistics ?? false);
    setMarketing(current?.marketing ?? false);
    setSettingsOpen(true);
  }, []);

  const showBanner = !consent && delayElapsed && !settingsOpen;

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6"
            role="region"
            aria-label="Cookie-Hinweis"
          >
            <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl border border-[var(--border)] shadow-xl p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row gap-4 sm:items-start">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Cookie className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-semibold text-[var(--foreground)] mb-1">
                      Wir verwenden Cookies
                    </h2>
                    <p className="text-sm text-[var(--foreground)]/60 leading-relaxed">
                      Wir setzen technisch notwendige Cookies ein, um den Betrieb dieser Website
                      sicherzustellen. Mit Ihrer Einwilligung nutzen wir zusätzlich Cookies für
                      Statistik- und Marketingzwecke. Sie können Ihre Auswahl jederzeit unter{' '}
                      <Link href="/datenschutz#cookies" className="underline hover:text-primary">
                        Datenschutz
                      </Link>{' '}
                      ändern.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:shrink-0">
                  <Button variant="outline" size="md" onClick={openSettingsFromBanner}>
                    Einstellungen
                  </Button>
                  <Button variant="ghost" size="md" onClick={acceptNecessary}>
                    Nur notwendige
                  </Button>
                  <Button size="md" onClick={acceptAll}>
                    Alle akzeptieren
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {settingsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm p-0 sm:p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-settings-title"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSettingsOpen(false);
            }}
          >
            <motion.div
              initial={{ y: 32, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 32, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--border)]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Cookie className="w-4.5 h-4.5" />
                  </div>
                  <h2 id="cookie-settings-title" className="font-semibold text-lg">
                    Cookie-Einstellungen
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setSettingsOpen(false)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--foreground)]/50 hover:bg-[var(--surface)] hover:text-[var(--foreground)] transition-colors"
                  aria-label="Schließen"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="px-6 py-4 overflow-y-auto">
                <p className="text-sm text-[var(--foreground)]/60 leading-relaxed mb-5">
                  Wählen Sie selbst, welche Cookies Sie zulassen möchten. Notwendige Cookies sind
                  immer aktiv. Details finden Sie in unserer{' '}
                  <Link href="/datenschutz#cookies" className="underline hover:text-primary">
                    Datenschutzerklärung
                  </Link>
                  .
                </p>

                <div className="space-y-3">
                  {CATEGORIES.map((cat) => {
                    const checked =
                      cat.key === 'necessary'
                        ? true
                        : cat.key === 'statistics'
                          ? statistics
                          : marketing;
                    const onChange = (next: boolean) => {
                      if (cat.key === 'statistics') setStatistics(next);
                      if (cat.key === 'marketing') setMarketing(next);
                    };
                    return (
                      <div
                        key={cat.key}
                        className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/40 p-4"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold text-sm">{cat.title}</h3>
                              {cat.required && (
                                <span className="text-[10px] font-medium uppercase tracking-wide text-primary bg-primary/10 px-1.5 py-0.5 rounded-full">
                                  Immer aktiv
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-[var(--foreground)]/60 leading-relaxed mt-1">
                              {cat.description}
                            </p>
                          </div>
                          <Toggle
                            checked={checked}
                            disabled={cat.required}
                            onChange={onChange}
                            label={`${cat.title}-Cookies ${checked ? 'aktiviert' : 'deaktiviert'}`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="px-6 py-4 border-t border-[var(--border)] bg-[var(--surface)]/30 flex flex-col sm:flex-row gap-2 sm:justify-end">
                <Button variant="ghost" size="md" onClick={acceptNecessary}>
                  Nur notwendige
                </Button>
                <Button variant="outline" size="md" onClick={saveSelection}>
                  Auswahl speichern
                </Button>
                <Button size="md" onClick={acceptAll}>
                  <Check className="w-4 h-4 mr-1.5 inline" />
                  Alle akzeptieren
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Toggle({
  checked,
  disabled,
  onChange,
  label,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange: (next: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 ${
        checked ? 'bg-primary' : 'bg-[var(--border)]'
      } ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <span
        className={`inline-block h-5 w-5 rounded-full bg-white shadow transition-transform ${
          checked ? 'translate-x-5' : 'translate-x-0.5'
        }`}
      />
    </button>
  );
}

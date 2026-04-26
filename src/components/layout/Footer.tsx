'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { FOOTER_LINKS, SITE_NAME } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { openCookieSettings } from '@/lib/cookie-consent';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  function handleNewsletterSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  }

  return (
    <footer className="bg-[var(--surface)] border-t border-[var(--border)]">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-[var(--border)]">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">Bleiben Sie informiert</h3>
          <p className="text-[var(--foreground)]/60 mb-6">
            Erhalten Sie Updates zu neuen Features, Gesundheitstipps und mehr.
          </p>
          {subscribed ? (
            <p className="text-success font-medium">✓ Vielen Dank für Ihre Anmeldung!</p>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Ihre E-Mail-Adresse"
                required
                className="flex-1 px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--foreground)]/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
                aria-label="E-Mail-Adresse für Newsletter"
              />
              <Button type="submit" className="shrink-0">
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
          )}
        </div>
      </div>

      {/* Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary mb-4">
              <Image src="/app_logo.png" alt="Operationsbegleiter Logo" width={32} height={32} className="rounded-lg" />
              {SITE_NAME}
            </Link>
            <p className="text-sm text-[var(--foreground)]/60 leading-relaxed">
              Die umfassendste digitale Begleit-App für Patienten rund um chirurgische Eingriffe.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-3">Produkt</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.produkt.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--foreground)]/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-3">Unternehmen</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.unternehmen.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--foreground)]/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-3">Rechtliches</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.rechtliches.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--foreground)]/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={openCookieSettings}
                  className="text-sm text-[var(--foreground)]/60 hover:text-primary transition-colors text-left cursor-pointer"
                >
                  Cookie-Einstellungen
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--foreground)]/50">
            © {new Date().getFullYear()} {SITE_NAME}. Alle Rechte vorbehalten.
          </p>
          <p className="text-sm text-[var(--foreground)]/50 flex items-center gap-1">
            Made within Germany
          </p>
        </div>
      </div>
    </footer>
  );
}

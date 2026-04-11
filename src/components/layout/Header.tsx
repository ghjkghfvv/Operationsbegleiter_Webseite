'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px]">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent"
          style={{ scaleX: scrollProgress, transformOrigin: '0%' }}
        />
      </div>

      <header
        className={cn(
          'fixed top-[3px] left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'glass shadow-lg shadow-[var(--shadow-color)]' : 'bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Hauptnavigation">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
              <Image src="/app_logo.png" alt="Operationsbegleiter Logo" width={36} height={36} className="rounded-lg" />
              <span className="hidden sm:inline">Operationsbegleiter</span>
              <span className="sm:hidden">OB</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-3 py-2 rounded-xl text-sm font-medium transition-colors relative',
                    pathname === link.href
                      ? 'text-primary'
                      : 'text-[var(--foreground)]/70 hover:text-[var(--foreground)] hover:bg-[var(--surface-secondary)]/50'
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop Right */}
            <div className="hidden lg:flex items-center gap-3">
              <Button size="sm" href="/preise">
                Kostenlos starten
              </Button>
            </div>

            {/* Mobile Right */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-xl hover:bg-[var(--surface-secondary)]/50 transition-colors"
                aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-[var(--background)]/95 backdrop-blur-xl" />
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative flex flex-col items-center justify-center h-full gap-6"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'text-2xl font-semibold transition-colors',
                      pathname === link.href ? 'text-primary' : 'text-[var(--foreground)]/70'
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05 }}
              >
                <Button href="/preise" size="lg">
                  Kostenlos starten
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

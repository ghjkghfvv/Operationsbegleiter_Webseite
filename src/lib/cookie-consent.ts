export const CONSENT_STORAGE_KEY = 'op_cookie_consent_v1';
export const CONSENT_CHANGED_EVENT = 'op:cookie-consent-changed';
export const OPEN_SETTINGS_EVENT = 'op:open-cookie-settings';

export type ConsentCategory = 'necessary' | 'statistics' | 'marketing';

export interface ConsentState {
  necessary: true;
  statistics: boolean;
  marketing: boolean;
  timestamp: string;
}

export const CATEGORIES: {
  key: ConsentCategory;
  title: string;
  description: string;
  required: boolean;
}[] = [
  {
    key: 'necessary',
    title: 'Notwendig',
    description:
      'Diese Cookies sind für den Betrieb der Website unerlässlich (z. B. zum Speichern Ihrer Cookie-Einstellungen). Sie können nicht deaktiviert werden.',
    required: true,
  },
  {
    key: 'statistics',
    title: 'Statistik',
    description:
      'Helfen uns zu verstehen, wie Besucher die Website nutzen, indem Informationen anonymisiert gesammelt werden.',
    required: false,
  },
  {
    key: 'marketing',
    title: 'Marketing',
    description:
      'Werden eingesetzt, um Besuchern relevante Inhalte und zielgerichtete Werbung anzuzeigen.',
    required: false,
  },
];

export function readConsent(): ConsentState | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (parsed && parsed.necessary === true && typeof parsed.timestamp === 'string') {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}

export function writeConsent(partial: { statistics: boolean; marketing: boolean }): ConsentState {
  const state: ConsentState = {
    necessary: true,
    statistics: partial.statistics,
    marketing: partial.marketing,
    timestamp: new Date().toISOString(),
  };
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
    window.dispatchEvent(new CustomEvent<ConsentState>(CONSENT_CHANGED_EVENT, { detail: state }));
  }
  return state;
}

export function clearConsent() {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: null }));
}

export function openCookieSettings() {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}

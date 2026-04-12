export const SITE_NAME = 'Operationsbegleiter';
export const SITE_URL = 'https://operationsbegleiter.de';
export const SITE_DESCRIPTION = 'Die umfassendste digitale Begleit-App für Patienten rund um chirurgische Eingriffe. Vernetzt Patienten, Ärzte und Angehörige.';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/aerzte', label: 'Für Ärzte & Kliniken' },
  { href: '/preise', label: 'Preise' },
  { href: '/kontakt', label: 'Kontakt' },
] as const;

export const FOOTER_LINKS = {
  produkt: [
    { href: '/features', label: 'Features' },
    { href: '/preise', label: 'Preise' },
    { href: '/aerzte', label: 'Für Ärzte & Kliniken' },
  ],
  unternehmen: [
    { href: '/kontakt', label: 'Kontakt' },
  ],
  rechtliches: [
    { href: '/datenschutz', label: 'Datenschutz' },
    { href: '/impressum', label: 'Impressum' },
  ],
} as const;

export const STATS = [
  { value: 10000, suffix: '+', label: 'begleitete OPs' },
  { value: 4.8, suffix: '★', label: 'Bewertung', decimals: 1 },
  { value: 98, suffix: '%', label: 'zufrieden' },
  { value: 24, suffix: '/7', label: 'KI-Unterstützung' },
] as const;

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'App herunterladen',
    description: 'Laden Sie den Operationsbegleiter kostenlos aus dem App Store oder Google Play Store herunter.',
  },
  {
    step: 2,
    title: 'Profil einrichten',
    description: 'Erstellen Sie Ihr persönliches Profil mit Ihren medizinischen Daten und der geplanten Operation.',
  },
  {
    step: 3,
    title: 'Arzt verbinden',
    description: 'Verbinden Sie sich per QR-Code mit Ihrem behandelnden Arzt für eine optimale Betreuung.',
  },
  {
    step: 4,
    title: 'Genesung tracken',
    description: 'Dokumentieren Sie Ihren Heilungsverlauf und erhalten Sie personalisierte Empfehlungen.',
  },
] as const;

export const TESTIMONIALS = [
  {
    name: 'Maria S.',
    age: 0,
    operation: 'Patientin nach Knie-TEP',
    rating: 5,
    text: 'Der Operationsbegleiter hat meine OP-Vorbereitung so viel einfacher gemacht. Die Timeline hat mir genau gesagt, was ich wann tun muss.',
  },
  {
    name: 'Dr. Klaus W.',
    age: 0,
    operation: 'Orthopäde',
    rating: 5,
    text: 'Als Arzt schätze ich die Übersicht über meine Patienten enorm. Ich kann den Fortschritt verfolgen und bei kritischen Werten sofort reagieren.',
  },
  {
    name: 'Petra H.',
    age: 0,
    operation: 'Angehörige',
    rating: 5,
    text: 'Durch den Familien-Zugang kann ich den Genesungsfortschritt meines Mannes verfolgen, ohne ihn ständig zu fragen.',
  },
] as const;

export const FEATURES_PATIENT = [
  {
    icon: 'Timeline',
    title: 'Digitale Timeline',
    description: 'Chronologische Dokumentation Ihres gesamten OP-Verlaufs — von der Vorbereitung bis zur vollständigen Genesung.',
    detail: 'Alle wichtigen Ereignisse, Termine, Befunde und Fortschritte auf einen Blick. Teilen Sie Ihre Timeline sicher mit Ihrem Arzt.',
  },
  {
    icon: 'HeartPulse',
    title: 'Vital-Signs-Tracking',
    description: 'Blutdruck, Puls, Temperatur und Sauerstoffsättigung — alles an einem Ort.',
    detail: 'Automatische Trendanalyse und Benachrichtigungen bei auffälligen Werten. Integration mit Apple Health und Google Fit.',
  },
  {
    icon: 'Pill',
    title: 'Medikamenten-Management',
    description: 'Nie wieder eine Dosis vergessen. Intelligente Erinnerungen für alle Ihre Medikamente.',
    detail: 'Dosierungsplan, Wechselwirkungsprüfung und lückenloser Einnahme-Verlauf für Ihren Arzt.',
  },
  {
    icon: 'Activity',
    title: 'Schmerztagebuch',
    description: 'Tägliche Schmerzerfassung mit detaillierten Verlaufskurven und Musteranalyse.',
    detail: 'Dokumentieren Sie Schmerzintensität, -art und -lokalisation. Die App erkennt Muster und hilft bei der Therapieanpassung.',
  },
  {
    icon: 'Camera',
    title: 'Wunddokumentation',
    description: 'Fotodokumentation des Heilungsverlaufs mit Zeitreihen-Vergleich.',
    detail: 'Standardisierte Aufnahmen für optimale Vergleichbarkeit. Teilen Sie Fotos sicher mit Ihrem Arzt.',
  },
  {
    icon: 'Apple',
    title: 'Ernährungstracking',
    description: 'Prä- und postoperative Ernährungsbegleitung für eine optimale Heilung.',
    detail: 'Personalisierte Ernährungsempfehlungen basierend auf Ihrem Eingriff und Ihren Bedürfnissen.',
  },
  {
    icon: 'Dumbbell',
    title: 'Reha-Übungen',
    description: 'Angeleitete Rehabilitations-Programme mit Video-Anleitungen.',
    detail: 'Individuell angepasste Übungspläne, Fortschrittstracking und Erinnerungen.',
  },
  {
    icon: 'Moon',
    title: 'Schlaf- & Stimmungstracking',
    description: 'Verfolgen Sie Ihre Schlafqualität und Stimmung während der Genesung.',
    detail: 'Erkennen Sie Zusammenhänge zwischen Schlaf, Stimmung und Heilungsfortschritt.',
  },
  {
    icon: 'AlertTriangle',
    title: 'Red-Flag-System',
    description: 'Automatische Warnung bei kritischen Symptomen — für Ihre Sicherheit.',
    detail: 'Medizinisch validierte Warnschwellen. Sofortige Benachrichtigung an Sie und Ihren Arzt.',
  },
  {
    icon: 'Briefcase',
    title: 'Klinikkoffer-Packliste',
    description: 'Intelligente Checkliste für Ihren Klinikaufenthalt — nichts vergessen.',
    detail: 'Personalisiert nach Art Ihres Eingriffs. Teilbar mit Angehörigen.',
  },
  {
    icon: 'Search',
    title: 'Symptom-Checker',
    description: 'Schnelle Einschätzung Ihrer Symptome mit klaren Handlungsempfehlungen.',
    detail: 'Basierend auf medizinischen Leitlinien. Ersetzt keinen Arztbesuch, gibt aber erste Orientierung.',
  },
  {
    icon: 'Trophy',
    title: 'Gamification',
    description: 'Punkte & Badges für konsequente Gesundheitserfassung — Motivation pur.',
    detail: 'Erreichen Sie Meilensteine und feiern Sie Ihre Fortschritte auf dem Weg zur Genesung.',
  },
] as const;

export const FEATURES_DOCTOR = [
  {
    icon: 'Users',
    title: 'Patientenliste',
    description: 'Alle verknüpften Patienten mit Phasen-Übersicht und Warnstatus.',
  },
  {
    icon: 'Eye',
    title: 'Patientendetails',
    description: 'Schmerz, Wunden, Termine, Dokumente je Patient einsehen.',
  },
  {
    icon: 'Calendar',
    title: 'Kalender',
    description: 'Termine erstellen, bearbeiten und löschen — Monats- und Wochenansicht.',
  },
  {
    icon: 'ClipboardList',
    title: 'Care-Plan-Vorlagen',
    description: 'Templates mit Tasks erstellen und auf Patienten anwenden.',
  },
  {
    icon: 'QrCode',
    title: 'Patienten einladen',
    description: 'Einladungscode und QR-Code generieren.',
  },
  {
    icon: 'BarChart2',
    title: 'Arztbericht',
    description: 'Genese-Bericht erstellen, exportieren und teilen.',
  },
  {
    icon: 'Settings',
    title: 'Personal-Management',
    description: 'Mitarbeiter-Accounts mit granularer Rechteverwaltung.',
  },
  {
    icon: 'Building2',
    title: 'Organisation',
    description: 'Mehrere Ärzte unter einem Dach verwalten.',
  },
  {
    icon: 'LayoutGrid',
    title: 'Dashboard',
    description: 'Tagesübersicht mit Warnungen, Terminen und Schnellaktionen.',
  },
] as const;

export const PRICING_PLANS_PATIENT = [
  {
    name: 'Kostenlos',
    price: { monthly: 0, yearly: 0 },
    description: 'Für den Einstieg',
    features: [
      'Timeline / Feed (Aufgaben, Einträge, Nachrichten)',
      'Schmerz-Tagebuch',
      'Wunddokumentation',
      'Vitalzeichen',
      'Medikamente',
      'Ernährung',
      'Termine',
      'Dokumente (max. 5)',
      'Fotos (max. 3)',
      'Packzettel (max. 1 Liste)',
      'Schlaf- & Stimmungstracking',
      'Fragebögen',
      'Notfallkontakte',
      'OP-Informationen',
      'Arzt verbinden',
      'Onboarding & Tutorial',
    ],
    notIncluded: [
      'KI-Assistent Bella (unbegrenzter Chat)',
      'Fortschritts-Tracking',
      'Reha-Übungen mit Timer',
      'Red Flags / Alarmzeichen',
      'Sprachnotizen',
      'Health Sync',
      'Familie einladen',
      'Unbegrenzte Dokumente & Fotos',
    ],
    cta: 'Kostenlos starten',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: { monthly: 8.99, yearly: 6.25 },
    description: 'Alle Features freischalten',
    features: [
      'Alles aus Kostenlos',
      'KI-Assistent Bella – unbegrenzter Chat',
      'Fortschritts-Tracking',
      'Reha-Übungen mit Timer & Fortschritt',
      'Red Flags / Alarmzeichen',
      'Sprachnotizen (Voice Memos)',
      'Apple Health / Google Health Connect Sync',
      'Familie & Angehörige einladen',
      'Dokumente (unbegrenzt)',
      'Fotos (unbegrenzt)',
      'Packzettel (unbegrenzt + Premium-Vorlagen + Teilen)',
      'Mehrere Operationen speichern',
      'Datenexport (PDF/JSON)',
      'Analytics Dashboard',
    ],
    notIncluded: [],
    cta: 'Pro starten',
    highlighted: true,
    yearlyNote: '75,00 €/Jahr',
  },
] as const;

export const PRICING_PLANS_ARZT = [
  {
    name: 'Kostenlos',
    price: { monthly: 0, yearly: 0 },
    description: 'Alle Funktionen — dauerhaft gratis',
    features: [
      'Unbegrenzte Patienten',
      'Unbegrenzte Angestellte',
      'Patientenliste mit Phasen-Übersicht',
      'Patientendetails ansehen (Schmerz, Wunden, Termine, Dokumente)',
      'Kalender (Termine erstellen, bearbeiten, löschen)',
      'Patienten einladen (Code + QR)',
      'Care-Plan-Vorlagen erstellen & anwenden',
      'Arztbericht exportieren / teilen',
      'Personal-Management mit Rechteverwaltung',
      'Organisation (mehrere Ärzte unter einem Dach)',
      'Dashboard mit Warnungs- und Termin-Übersicht',
      'Profil verwalten',
    ],
    notIncluded: [],
    cta: 'Kostenlos starten',
    highlighted: true,
  },
] as const;

// Backward compat alias
export const PRICING_PLANS = PRICING_PLANS_PATIENT;

export const BELLA_DEMO_MESSAGES = [
  {
    question: 'Ist es normal, dass mein Knie nach der OP geschwollen ist?',
    answer: 'Ja, eine Schwellung nach einer Knie-OP ist in den ersten Tagen völlig normal. Kühlen Sie die Stelle regelmäßig und lagern Sie das Bein hoch. Wenn die Schwellung nach 5-7 Tagen nicht nachlässt oder zunimmt, sollten Sie Ihren Arzt kontaktieren. Soll ich einen Erinnerungstimer zum Kühlen einrichten? 🐰',
  },
  {
    question: 'Wann darf ich nach meiner OP wieder Auto fahren?',
    answer: 'Das hängt von der Art Ihrer Operation ab. Bei einer Knie-TEP ist in der Regel nach 6-8 Wochen Autofahren wieder möglich, wenn Sie das betroffene Bein ausreichend belasten und bewegen können. Besprechen Sie den genauen Zeitpunkt unbedingt mit Ihrem Arzt. Sicherheit geht vor! 🐰',
  },
  {
    question: 'Meine Wunde sieht gerötet aus — ist das schlimm?',
    answer: 'Eine leichte Rötung rund um die Naht ist in den ersten Tagen normal. ⚠️ Kontaktieren Sie jedoch sofort Ihren Arzt, wenn: die Rötung zunimmt, sich die Wunde warm anfühlt, Eiter austritt, oder Sie Fieber haben. Möchten Sie ein Foto Ihrer Wunde dokumentieren, damit ich die Entwicklung verfolgen kann? 🐰',
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: 'Ist der Operationsbegleiter kostenlos?',
    answer: 'Ja, die Basis-Version für Patienten ist dauerhaft kostenlos und umfasst Timeline, Schmerztagebuch, Wunddokumentation, Vitalzeichen, Medikamente, Ernährung, Termine, OP-Informationen und mehr. Für erweiterte Features wie den KI-Assistenten Bella, Reha-Übungen, Red Flags und Familien-Zugang gibt es Pro ab 8,99 €/Monat oder 75,00 €/Jahr. Für Ärzte und Organisationen ist der Operationsbegleiter komplett kostenlos — alle Funktionen inklusive.',
  },
  {
    question: 'Wie sicher sind meine Daten?',
    answer: 'Ihre Daten werden AES-256 verschlüsselt und DSGVO-konform auf deutschen Servern gespeichert. Die App funktioniert offline-first — Ihre Daten bleiben primär auf Ihrem Gerät. Sie haben jederzeit die volle Kontrolle und können Daten exportieren oder löschen.',
  },
  {
    question: 'Kann mein Arzt meine Daten sehen?',
    answer: 'Nur wenn Sie das ausdrücklich erlauben. Sie verknüpfen sich per QR-Code mit Ihrem Arzt — temporär oder permanent. Sie entscheiden, welche Daten sichtbar sind und können den Zugriff jederzeit widerrufen.',
  },
  {
    question: 'Funktioniert die App auch offline?',
    answer: 'Ja! Der Operationsbegleiter ist als Offline-First-App konzipiert. Alle wichtigen Funktionen inklusive Bella (Keyword-basierte Antworten) stehen ohne Internet zur Verfügung. Für Bella Cloud (NVIDIA Cloud AI) wird eine Verbindung benötigt. Daten werden automatisch synchronisiert.',
  },
  {
    question: 'In welchen Sprachen ist die App verfügbar?',
    answer: 'Die App unterstützt aktuell 5 Sprachen: Deutsch, Englisch, Türkisch, Arabisch und Russisch. Alle UI-Texte und Bella-Interaktionen sind in diesen Sprachen verfügbar.',
  },
  {
    question: 'Was ist das Red-Flag-System?',
    answer: 'Das Red-Flag-System warnt Sie und Ihren Arzt automatisch bei kritischen Symptomen wie Fieber über 38,5°C, starken Schmerzen (NRS ≥8), Wundinfektionszeichen oder Nachblutungen. Bei einer Red Flag wird sofort Ihr Arzt benachrichtigt.',
  },
  {
    question: 'Können Angehörige den Fortschritt sehen?',
    answer: 'Ja! Im Patienten-Pro-Plan können Angehörige eingeladen werden. Sie erhalten einen eigenen Familien-Bereich mit steuerbaren Sichtbarkeitseinstellungen pro Datenkategorie. Der Patient entscheidet, welche Daten die Familie sehen darf.',
  },
  {
    question: 'Kann ich das Pro-Abo kündigen?',
    answer: 'Ja, jederzeit über den App Store oder Google Play Store. Es gibt keine Mindestlaufzeit. Patienten-Pro: 8,99 €/Monat oder 75,00 €/Jahr. Für Ärzte und Organisationen sind alle Funktionen kostenlos.',
  },
  {
    question: 'Gibt es auch einen Plan für Ärzte?',
    answer: 'Ja! Ärzte und Organisationen können den Operationsbegleiter komplett kostenlos nutzen — mit allen Funktionen: unbegrenzte Patienten, unbegrenzte Angestellte, Care-Plan-Vorlagen, Arztbericht-Export, Personal-Management, Organisation und Dashboard. Es gibt keine Einschränkungen.',
  },
] as const;

export const TEAM_MEMBERS = [
  {
    name: 'Jan Goede',
    role: 'Gründer & Entwickler',
    bio: 'Entwickler mit Leidenschaft für Health-Tech. Erkannte den Bedarf an besserer digitaler Patientenbegleitung und entwickelt den Operationsbegleiter seit 2023.',
  },
] as const;

export const BLOG_POSTS = [
  {
    slug: 'vorbereitung-auf-die-op',
    title: '10 Tipps zur optimalen OP-Vorbereitung',
    excerpt: 'Eine gute Vorbereitung ist der halbe Weg zur schnellen Genesung. Wir zeigen Ihnen, worauf es ankommt.',
    category: 'Gesundheitstipps',
    readingTime: 8,
    date: '2026-03-15',
    featured: true,
  },
  {
    slug: 'bella-ki-update',
    title: 'Bella 2.0: Noch schlauer, noch empathischer',
    excerpt: 'Unser KI-Assistent Bella hat ein großes Update erhalten. Erfahren Sie, was sich geändert hat.',
    category: 'App-Updates',
    readingTime: 5,
    date: '2026-03-01',
    featured: false,
  },
  {
    slug: 'schmerzmanagement-nach-op',
    title: 'Schmerzmanagement nach der Operation',
    excerpt: 'Schmerzen nach einer OP sind normal — aber managebar. Ein Leitfaden für Patienten.',
    category: 'Medizin',
    readingTime: 12,
    date: '2026-02-20',
    featured: false,
  },
  {
    slug: 'patientenbericht-knie-tep',
    title: 'Meine Erfahrung mit dem Operationsbegleiter nach der Knie-TEP',
    excerpt: 'Maria S. berichtet über ihre Erfahrung mit der App während ihrer Genesung nach einer Knie-OP.',
    category: 'Erfahrungsberichte',
    readingTime: 6,
    date: '2026-02-10',
    featured: false,
  },
  {
    slug: 'reha-uebungen-schulter',
    title: 'Die besten Reha-Übungen nach einer Schulter-OP',
    excerpt: 'Physiotherapeutin Anna zeigt die wichtigsten Übungen für die Rehabilitation nach Schulteroperationen.',
    category: 'Gesundheitstipps',
    readingTime: 10,
    date: '2026-01-28',
    featured: false,
  },
  {
    slug: 'datenschutz-gesundheitsapps',
    title: 'Datenschutz bei Gesundheits-Apps: Worauf Sie achten sollten',
    excerpt: 'Nicht alle Gesundheits-Apps nehmen es mit dem Datenschutz ernst. Wir erklären, was wichtig ist.',
    category: 'Medizin',
    readingTime: 7,
    date: '2026-01-15',
    featured: false,
  },
] as const;

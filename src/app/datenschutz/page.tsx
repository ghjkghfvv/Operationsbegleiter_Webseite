import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung des Operationsbegleiters — Ihre Daten sind bei uns sicher.',
};

export default function DatenschutzPage() {
  return (
    <div className="pt-24 pb-20">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Datenschutzerklärung</h1>
          <p className="text-[var(--foreground)]/50">Letzte Aktualisierung: 1. April 2026</p>
        </header>

        {/* Table of Contents */}
        <nav className="mb-12 p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
          <h2 className="font-semibold mb-3">Inhaltsverzeichnis</h2>
          <ol className="space-y-1 text-sm text-primary list-decimal list-inside">
            <li><a href="#verantwortlicher" className="hover:underline">Verantwortlicher</a></li>
            <li><a href="#datenerhebung" className="hover:underline">Datenerhebung auf unserer Website</a></li>
            <li><a href="#app-daten" className="hover:underline">Datenverarbeitung in der App</a></li>
            <li><a href="#rechte" className="hover:underline">Ihre Rechte</a></li>
            <li><a href="#cookies" className="hover:underline">Cookies</a></li>
            <li><a href="#drittanbieter" className="hover:underline">Drittanbieter</a></li>
            <li><a href="#aenderungen" className="hover:underline">Änderungen</a></li>
          </ol>
        </nav>

        <div className="prose prose-lg max-w-none text-[var(--foreground)]/80 space-y-8">
          <section id="verantwortlicher">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">1. Verantwortlicher</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website und in der
              Operationsbegleiter-App ist:
            </p>
            <p className="mt-4">
              Jan Goede<br />
              Halmweg 15b<br />
              31228 Peine
            </p>
            <p className="mt-2">
              E-Mail: Operationsbegleiter@gmail.com
            </p>
          </section>

          <section id="datenerhebung">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">2. Datenerhebung auf unserer Website</h2>
            <p>
              Beim Besuch unserer Website werden automatisch technisch notwendige Daten
              erhoben (IP-Adresse, Browsertyp, Betriebssystem, Uhrzeit des Zugriffs).
              Diese Daten sind für den Betrieb der Website technisch erforderlich und
              werden nicht zur Identifikation einzelner Nutzer verwendet.
            </p>
            <h3 className="text-xl font-semibold text-[var(--foreground)] mt-6 mb-3">Kontaktformular</h3>
            <p>
              Wenn Sie unser Kontaktformular nutzen, werden die von Ihnen eingegebenen
              Daten (Name, E-Mail, Nachricht) zur Bearbeitung Ihrer Anfrage gespeichert.
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
            </p>
          </section>

          <section id="app-daten">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">3. Datenverarbeitung in der App</h2>
            <p>
              Die Operationsbegleiter-App verarbeitet sensible Gesundheitsdaten.
              Die Verarbeitung erfolgt ausschließlich auf Grundlage Ihrer ausdrücklichen
              Einwilligung (Art. 9 Abs. 2 lit. a DSGVO).
            </p>
            <h3 className="text-xl font-semibold text-[var(--foreground)] mt-6 mb-3">Welche Daten werden verarbeitet?</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Vitalwerte (Blutdruck, Puls, Temperatur, Sauerstoffsättigung)</li>
              <li>Medikamentendaten</li>
              <li>Schmerztagebuch-Einträge</li>
              <li>Wund-Fotodokumentation</li>
              <li>Ernährungs- und Schlafprotokolle</li>
              <li>Chat-Verlauf mit der KI-Assistentin Bella</li>
            </ul>
            <h3 className="text-xl font-semibold text-[var(--foreground)] mt-6 mb-3">Datensicherheit</h3>
            <p>
              Alle Gesundheitsdaten werden Ende-zu-Ende verschlüsselt übertragen
              und auf deutschen Servern (Firebase/Google Cloud, Region Frankfurt)
              gespeichert. Die Verschlüsselung erfolgt mit AES-256.
            </p>
          </section>

          <section id="rechte">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">4. Ihre Rechte</h2>
            <p>Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
            <ul className="list-disc list-inside space-y-1 mt-4">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
            </ul>
          </section>

          <section id="cookies">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">5. Cookies</h2>
            <p>
              Unsere Website verwendet ausschließlich technisch notwendige Cookies,
              die für den Betrieb der Website erforderlich sind. Wir verwenden keine
              Tracking-Cookies oder Cookies für Werbezwecke.
            </p>
          </section>

          <section id="drittanbieter">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">6. Drittanbieter</h2>
            <p>
              Wir nutzen folgende Drittanbieter-Dienste:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-4">
              <li>Google Firebase (Hosting, Datenbank, Authentifizierung) — Server in Frankfurt, Deutschland</li>
              <li>Vercel (Website-Hosting) — nach entsprechendem Konfigurationsstand EU-Region</li>
            </ul>
          </section>

          <section id="aenderungen">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">7. Änderungen</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen,
              um sie an geänderte Rechtslagen oder bei Änderungen des Dienstes
              anzupassen. Über wesentliche Änderungen informieren wir Sie per E-Mail.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}

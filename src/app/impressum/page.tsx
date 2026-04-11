import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum der Operationsbegleiter GmbH.',
};

export default function ImpressumPage() {
  return (
    <div className="pt-24 pb-20">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Impressum</h1>
          <p className="text-[var(--foreground)]/50">Angaben gemäß § 5 TMG</p>
        </header>

        <div className="prose prose-lg max-w-none text-[var(--foreground)]/80 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">Angaben gemäß § 5 TMG</h2>
            <p>
              Jan Goede<br />
              Halmweg 15b<br />
              31228 Peine
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">Kontakt</h2>
            <p>
              E-Mail: Operationsbegleiter@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">Verantwortlich für den Inhalt</h2>
            <p>
              Verantwortlich nach § 55 Abs. 2 RStV:<br />
              Jan Goede<br />
              Halmweg 15b<br />
              31228 Peine
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              https://ec.europa.eu/consumers/odr/. Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p className="mt-4">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
              als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
              der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}

import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ClientProviders } from "@/components/layout/ClientProviders";
import { CookieConsent } from "@/components/cookie/CookieConsent";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/constants";
import { DynamicBackground } from "@/components/effects/DynamicBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Ihre Operation. Unser Begleiter.`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "application-name": SITE_NAME,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white">
        {/* Apple-style icon background — fixed to viewport, behind all content */}
        <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
          <DynamicBackground />
        </div>
        {/* Page content — rendered above background */}
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}>
          <ClientProviders>
            <a href="#main-content" className="skip-to-content">
              Zum Inhalt springen
            </a>
            <Header />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
            <CookieConsent />
          </ClientProviders>
        </div>
      </body>
    </html>
  );
}

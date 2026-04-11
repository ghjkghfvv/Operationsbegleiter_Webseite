import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ClientProviders } from "@/components/layout/ClientProviders";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/constants";

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
        {/* Medical icon background — fixed to viewport, behind all content */}
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
            backgroundColor: 'white',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='450' height='360' fill='none' stroke='%23007AFF' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cg opacity='0.24' transform='translate(15,25) scale(2.8)'%3E%3Cpath d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'/%3E%3C/g%3E%3Cg opacity='0.20' transform='translate(105,22) scale(2.8)'%3E%3Cpath d='M9 3h6v6h6v6h-6v6H9v-6H3V9h6z'/%3E%3C/g%3E%3Cg opacity='0.22' transform='translate(205,25) scale(2.8)'%3E%3Cpath d='M22 12h-4l-3 9L9 3l-3 9H2'/%3E%3C/g%3E%3Cg opacity='0.21' transform='translate(300,20) scale(2.5)'%3E%3Cpath d='M9 2h6l1 2H8zM8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2M9 12h6M9 16h4'/%3E%3C/g%3E%3Cg opacity='0.23' transform='translate(388,23) scale(2.5)'%3E%3Cpath d='M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z'/%3E%3C/g%3E%3Cg opacity='0.22' transform='translate(63,148) scale(2.5)'%3E%3Cpath d='M10.5 21l10-10a4.95 4.95 0 0 0-7-7l-10 10a4.95 4.95 0 0 0 7 7zM8.5 8.5l7 7'/%3E%3C/g%3E%3Cg opacity='0.24' transform='translate(158,150) scale(2.8)'%3E%3Cpath d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM12 11v6M9 14h6'/%3E%3C/g%3E%3Cg opacity='0.21' transform='translate(253,147) scale(2.5)'%3E%3Cpath d='M18 2l4 4-3 3-7-7zM12 8l-8 8v4h4l8-8M2 22l4-4'/%3E%3C/g%3E%3Cg opacity='0.23' transform='translate(355,150) scale(2.5)'%3E%3Cpath d='M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z'/%3E%3C/g%3E%3Cg opacity='0.21' transform='translate(18,272) scale(2.8)'%3E%3Cpath d='M22 12h-4l-3 9L9 3l-3 9H2'/%3E%3C/g%3E%3Cg opacity='0.24' transform='translate(115,270) scale(2.8)'%3E%3Cpath d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'/%3E%3C/g%3E%3Cg opacity='0.22' transform='translate(215,268) scale(2.5)'%3E%3Cpath d='M9 3h6v6h6v6h-6v6H9v-6H3V9h6z'/%3E%3C/g%3E%3Cg opacity='0.21' transform='translate(312,272) scale(2.5)'%3E%3Cpath d='M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z'/%3E%3C/g%3E%3Cg opacity='0.23' transform='translate(408,268) scale(2.5)'%3E%3Cpath d='M9 2h6l1 2H8zM8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2M9 12h6M9 16h4'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '450px 360px',
            backgroundRepeat: 'repeat',
          }}
        />
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
          </ClientProviders>
        </div>
      </body>
    </html>
  );
}

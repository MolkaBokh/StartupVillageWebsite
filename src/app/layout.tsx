import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HtmlLangDir from "@/components/layout/HtmlLangDir";

/**
 * Site typeface — Inter (the Contact-page reference font), used across the
 * French and English versions. Cairo is loaded for the Arabic (RTL) version
 * and applied to any dir="rtl" subtree (see globals.css).
 */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Startup Village",
  description: "Le village des créatifs responsables.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${cairo.variable} antialiased`}>
      <body className="sv-shell bg-white text-[#10243e]">
        <HtmlLangDir />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-navy-950 focus:shadow-lg focus:outline-2 focus:outline-primary-500"
        >
          Passer au contenu principal
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

/**
 * Site typeface — Inter (the Contact-page reference font), used consistently
 * across every page. Exposed as --font-inter and consumed site-wide.
 */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
    <html lang="fr" className={`${inter.variable} antialiased`}>
      <body className="sv-shell bg-white text-[#10243e]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

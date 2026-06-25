import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

/**
 * Typeface — Plus Jakarta Sans (startup-startups-page reference).
 * Exposed as --font-jakarta and consumed by the typography layer.
 */
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
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
    <html lang="fr" className={`${jakarta.variable} antialiased`}>
      <body className="sv-shell bg-white text-[#10243e]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

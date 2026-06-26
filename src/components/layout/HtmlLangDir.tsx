"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { langFromPath } from "@/config/navigation";

/**
 * Keeps the document's <html lang> and <html dir> attributes in sync with the
 * current language (Arabic = rtl). Visible content is already rendered with the
 * correct direction at SSR (Header, Footer and page wrappers set their own
 * dir), so this only finalizes the root attributes (scrollbar side, etc.).
 */
export default function HtmlLangDir() {
  const pathname = usePathname();
  const lang = langFromPath(pathname);

  useEffect(() => {
    const el = document.documentElement;
    el.lang = lang;
    el.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return null;
}

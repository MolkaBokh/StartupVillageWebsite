"use client";

import Image from "next/image";
import { useState } from "react";
import type { Partner } from "@/lib/getPartners";

export default function PartnerLogo({ partner, large = false }: { partner: Partner; large?: boolean }) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`group flex h-[115px] items-center justify-center rounded-xl border border-slate-100 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-200 hover:shadow-[0_14px_30px_-18px_rgba(15,39,72,0.25)] ${
        large ? "p-2.5" : "p-5"
      }`}
    >
      {failed ? (
        <span className="font-sans text-center text-sm font-bold tracking-tight text-sv-navy/70">
          {partner.name}
        </span>
      ) : (
        <Image
          src={partner.logo}
          alt={partner.name}
          width={180}
          height={80}
          className={`w-auto object-contain ${large ? "max-h-[92px] max-w-[92%]" : "max-h-[72px] max-w-[80%]"}`}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

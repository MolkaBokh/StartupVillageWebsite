import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline";

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition-colors";
  const variants: Record<Variant, string> = {
    primary: "bg-[#1478a0] text-white hover:bg-[#116080]",
    outline:
      "border-2 border-navy-950 text-navy-950 hover:bg-navy-950 hover:text-white",
  };

  return (
    <button {...props} className={`${base} ${variants[variant]} ${className}`} />
  );
}

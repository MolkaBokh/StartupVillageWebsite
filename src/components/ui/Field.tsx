import { SelectHTMLAttributes, TextareaHTMLAttributes, InputHTMLAttributes } from "react";

const baseFieldClasses =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-navy-950/40 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20";

export function Label({
  children,
  required,
  htmlFor,
}: {
  children: React.ReactNode;
  required?: boolean;
  htmlFor?: string;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-bold text-navy-950">
      {children}
      {required && <span className="text-accent-500" aria-hidden="true"> *</span>}
      {required && <span className="sr-only"> (obligatoire)</span>}
    </label>
  );
}

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={baseFieldClasses} />;
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${baseFieldClasses} min-h-32 resize-y`} />;
}

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select {...props} className={`${baseFieldClasses} appearance-none`}>
      {props.children}
    </select>
  );
}

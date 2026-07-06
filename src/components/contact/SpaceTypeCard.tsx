type Props = {
  label: string;
  icon: React.ReactNode;
  selected: boolean;
  onSelect: () => void;
};

export default function SpaceTypeCard({ label, icon, selected, onSelect }: Props) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`flex w-full items-center gap-4 rounded-2xl border-2 p-5 text-left transition-colors ${
        selected
          ? "border-primary-500 bg-primary-50"
          : "border-black/10 hover:border-primary-300"
      }`}
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
          selected ? "bg-[#1478a0] text-white" : "bg-primary-50 text-primary-600"
        }`}
      >
        {icon}
      </span>
      <span className="font-bold text-navy-950">{label}</span>
    </button>
  );
}

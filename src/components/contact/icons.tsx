type IconProps = { className?: string };

const base = "h-5 w-5";

export function VisitIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

export function ClubIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="9" cy="8" r="3" />
      <path d="M2.5 20c0-3.3 2.9-6 6.5-6s6.5 2.7 6.5 6" strokeLinecap="round" />
      <circle cx="17" cy="8.5" r="2.3" />
      <path d="M15.8 14.2c2.7.4 4.7 2.6 4.7 5.3" strokeLinecap="round" />
    </svg>
  );
}

export function OfficeIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="3.5" width="11" height="17" rx="1" />
      <rect x="15" y="9" width="5" height="11.5" rx="1" />
      <path d="M7.5 7.5h1M7.5 11h1M7.5 14.5h1M11 7.5h1M11 11h1M11 14.5h1" strokeLinecap="round" />
    </svg>
  );
}

export function MeetingRoomIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M3 9h18" />
      <path d="M8 4v5M16 4v5" />
    </svg>
  );
}

export function EventIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M11 4 4 13h6l-1 7 8-10h-6l1-6Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StockIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3.5 7.5 12 3l8.5 4.5L12 12 3.5 7.5Z" strokeLinejoin="round" />
      <path d="M3.5 7.5V16L12 20.5l8.5-4.5V7.5" strokeLinejoin="round" />
      <path d="M12 12v8.5" />
    </svg>
  );
}

export function MarketIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 9h14l-1.2 10.2a1.5 1.5 0 0 1-1.5 1.3H7.7a1.5 1.5 0 0 1-1.5-1.3L5 9Z" strokeLinejoin="round" />
      <path d="M8.5 9V6.5a3.5 3.5 0 0 1 7 0V9" strokeLinecap="round" />
    </svg>
  );
}

export function DomiciliationIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 10 12 4l8 6" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="4" y="10" width="16" height="10" rx="1" />
      <path d="M9.5 20v-5h5v5" />
    </svg>
  );
}

export function StudioIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="9" y="2.5" width="6" height="11" rx="3" />
      <path d="M5.5 11a6.5 6.5 0 0 0 13 0" strokeLinecap="round" />
      <path d="M12 17.5v4M9 21.5h6" strokeLinecap="round" />
    </svg>
  );
}

export function ExpertiseIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M9 18h6M10 21h4" strokeLinecap="round" />
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.45 1 1.15 1 1.9V16h5v-.2c0-.75.4-1.45 1-1.9A6 6 0 0 0 12 3Z" strokeLinejoin="round" />
    </svg>
  );
}

export function FoodLabIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 2.5v6M4.2 2.5v6a1.8 1.8 0 0 0 3.6 0v-6M6 8.5V21" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 2.5c-1.7 0-3 2.2-3 4.8S15.3 12 17 12v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function EntrepreneurIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" strokeLinecap="round" />
    </svg>
  );
}

export function StartupProfileIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2c3.5 1 6 5 6 9.5 0 2-.5 3.6-1.3 5L12 21l-4.7-4.5C6.5 15.1 6 13.5 6 11.5 6 7 8.5 3 12 2Z" strokeLinejoin="round" />
      <circle cx="12" cy="10.5" r="2" />
      <path d="M8.5 17 6 20M15.5 17 18 20" strokeLinecap="round" />
    </svg>
  );
}

export function PmeIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="7.5" width="18" height="12" rx="1.5" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" />
      <path d="M3 12.5h18" />
    </svg>
  );
}

export function CreatorIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3a9 8 0 1 0 0 16c1.1 0 2-.8 2-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.8 1.8-1.8H16a4 4 0 0 0 4-4c0-4-3.6-6-8-6Z" strokeLinejoin="round" />
      <circle cx="7.5" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="10.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function InstitutionIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 9.5 12 4l9 5.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.5 9.5V19M8 9.5V19M12 9.5V19M16 9.5V19M19.5 9.5V19" strokeLinecap="round" />
      <path d="M3 19h18" strokeLinecap="round" />
    </svg>
  );
}

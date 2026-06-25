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

export function InfoIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5.5" strokeLinecap="round" />
      <circle cx="12" cy="7.7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function OtherIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="5.5" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="18.5" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

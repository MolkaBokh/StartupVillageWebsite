interface IconProps {
  className?: string;
}

export function MailIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

export function GlobeIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 4 6.2 4 9s-1.5 6.3-4 9c-2.5-2.7-4-6.2-4-9s1.5-6.3 4-9z" />
    </svg>
  );
}

export function LinkedInIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3V9zm6.5 0H14v1.8h.06c.6-1.1 2.1-2.3 4.3-2.3 4.6 0 5.4 3 5.4 7v8.5h-4v-7.5c0-1.8-.03-4-2.5-4-2.5 0-2.9 2-2.9 3.9V21h-4V9z" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M13.5 21v-7.5H16l.5-3h-3V8.2c0-.9.3-1.5 1.6-1.5H16.5V4.1C16 4 15 3.9 13.9 3.9c-2.4 0-4 1.5-4 4.1v2.5H7.5v3H10V21h3.5z" />
    </svg>
  );
}

export function TikTokIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M14 3c.3 2 1.7 3.6 4 3.9v3a7 7 0 0 1-4-1.3v6.4a5.4 5.4 0 1 1-5.4-5.4c.2 0 .4 0 .6.03v3.1a2.4 2.4 0 1 0 1.8 2.3V3h3z" />
    </svg>
  );
}

export function PinterestIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-3.6 19.3c-.05-.8-.1-2 .03-2.9.2-.9 1.3-5.6 1.3-5.6s-.3-.7-.3-1.6c0-1.5.9-2.7 2-2.7.9 0 1.4.7 1.4 1.6 0 1-.6 2.4-.9 3.7-.3 1.1.5 2 1.6 2 1.9 0 3.2-2.4 3.2-5.3 0-2.2-1.5-3.8-4.2-3.8-3.1 0-4.9 2.3-4.9 4.6 0 .9.3 1.6.6 2 .2.2.2.3.1.6l-.3 1.1c-.05.2-.2.3-.4.2-1.2-.5-1.8-1.9-1.8-3.4 0-2.5 2.1-5.5 6.3-5.5 3.4 0 5.6 2.4 5.6 5 0 3.4-2 5.9-4.9 5.9-1 0-1.9-.5-2.2-1.2 0 0-.5 2-.6 2.4-.2.7-.6 1.4-1 2A10 10 0 1 0 12 2z" />
    </svg>
  );
}

export function YouTubeIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M21.6 7.2s-.2-1.5-.8-2.1c-.8-.8-1.6-.8-2-.9C16 4 12 4 12 4s-4 0-6.8.2c-.4 0-1.2.1-2 .9-.6.6-.8 2.1-.8 2.1S2.2 9 2.2 10.7v1.6c0 1.8.2 3.5.2 3.5s.2 1.5.8 2.1c.8.8 1.8.8 2.3.9 1.7.2 7.5.2 7.5.2s4 0 6.8-.2c.4 0 1.2-.1 2-.9.6-.6.8-2.1.8-2.1s.2-1.7.2-3.5v-1.6c0-1.7-.2-3.5-.2-3.5zM9.9 14.6V8.9l5.4 2.9-5.4 2.8z" />
    </svg>
  );
}

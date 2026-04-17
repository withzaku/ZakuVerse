import type { ServiceId } from "./data";

type IconProps = {
  id: ServiceId;
  className?: string;
};

export function ServiceIcon({ id, className = "h-7 w-7" }: IconProps) {
  if (id === "web") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 8h18M8 20h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (id === "ai") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 2v3m0 14v3M2 12h3m14 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1M18.4 5.6l-2.1 2.1m-8.6 8.6-2.1 2.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (id === "bio") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
        <path d="M8 3c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4m8-16c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 7h10m-10 10h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M4 16V8m6 8V4m6 12v-6m4 10H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="4" cy="16" r="2" fill="currentColor" />
      <circle cx="10" cy="16" r="2" fill="currentColor" />
      <circle cx="16" cy="10" r="2" fill="currentColor" />
    </svg>
  );
}

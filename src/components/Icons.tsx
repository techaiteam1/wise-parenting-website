type IconProps = { className?: string };

export function Arrow({ className }: IconProps) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3.75 9h10.5M9.75 4.5l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Download() {
  return (
    <svg width="17" height="17" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 2.75v8.5m0 0 3-3m-3 3-3-3M3.25 14.25h11.5" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Spark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2.75c.6 5.84 3.41 8.65 9.25 9.25-5.84.6-8.65 3.41-9.25 9.25C11.4 15.41 8.59 12.6 2.75 12 8.59 11.4 11.4 8.59 12 2.75Z" stroke="currentColor" strokeWidth="1.15" />
    </svg>
  );
}

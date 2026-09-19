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

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5.35 18.65 6.2 15.5a7.05 7.05 0 1 1 2.38 2.32l-3.23.83Z" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.55 8.45c-.18-.4-.34-.41-.52-.42h-.45c-.16 0-.42.06-.64.3-.22.25-.84.83-.84 2.02s.86 2.34.98 2.5c.12.16 1.68 2.7 4.18 3.66 2.08.8 2.5.64 2.95.6.45-.04 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28l-1.72-.84c-.25-.13-.43-.19-.62.09-.18.28-.7.84-.86 1.03-.16.19-.32.21-.59.07a5.68 5.68 0 0 1-1.68-1.04 6.24 6.24 0 0 1-1.16-1.45c-.12-.22-.01-.34.09-.46.1-.1.22-.26.34-.39.11-.13.15-.22.23-.37.08-.16.04-.29-.02-.41l-.79-1.89Z" fill="currentColor" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="5" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.45" />
      <path d="M15.25 11.56a3.3 3.3 0 1 1-6.5.88 3.3 3.3 0 0 1 6.5-.88Z" stroke="currentColor" strokeWidth="1.45" />
      <path d="M16.25 7.95h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5.25 7.25h13.5v9.5H5.25v-9.5Z" stroke="currentColor" strokeWidth="1.45" strokeLinejoin="round" />
      <path d="m5.75 7.75 6.25 5 6.25-5" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" />
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

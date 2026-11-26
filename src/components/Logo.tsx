const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} aria-label="Logo J4" role="img">
    <defs>
      <linearGradient id="j4g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsl(var(--primary))" />
        <stop offset="100%" stopColor="hsl(var(--accent))" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#j4g)" />
    <g stroke="hsl(var(--primary-foreground))" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M24 16v22a8 8 0 0 1-14 5" />
      <path d="M46 46V16L32 36h18" />
    </g>
    <g fill="hsl(var(--primary-foreground))">
      <circle cx="24" cy="16" r="3.5" />
      <circle cx="46" cy="16" r="3.5" />
      <circle cx="10" cy="43" r="3.5" />
    </g>
  </svg>
);
export default Logo;

type BrandProps = {
  compact?: boolean;
};

export function Brand({ compact = false }: BrandProps) {
  return (
    <span className="inline-flex items-center gap-3">
      <SignalMark />
      <span className="inline-flex items-baseline gap-2">
        <span
          className={`font-medium tracking-[0.18em] ${
            compact ? "text-[13px]" : "text-sm"
          }`}
        >
          AMBR
        </span>
        <span
          className={`text-muted ${compact ? "text-[11px]" : "text-xs"}`}
        >
          Signal
        </span>
      </span>
    </span>
  );
}

export function SignalMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      fill="none"
      className="size-7 shrink-0"
    >
      <defs>
        <clipPath id="signal-mark-clip">
          <rect x="3" y="3" width="58" height="58" rx="9" />
        </clipPath>
      </defs>
      <rect
        x="3"
        y="3"
        width="58"
        height="58"
        rx="9"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M3 31H20a3 3 0 0 1 3 3v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V24a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v7h8v30H3V31Z"
        fill="currentColor"
        clipPath="url(#signal-mark-clip)"
      />
    </svg>
  );
}

export function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className="size-4"
    >
      <path
        d="M3 8h9.5M8.75 4.25 12.5 8l-3.75 3.75"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

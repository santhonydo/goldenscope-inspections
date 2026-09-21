import Link from "next/link";

type LogoProps = {
  inverted?: boolean;
  compact?: boolean;
  tagline?: string;
};

export function Logo({ inverted = false, compact = false, tagline }: LogoProps) {
  const color = inverted ? "text-white" : "text-ink";

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 ${color}`}>
      <svg
        viewBox="0 0 36 32"
        className="h-8 w-9 shrink-0"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3 14.5 18 3l15 11.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M8 13.8V28h20V13.8"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="M15 28v-8h6v8" stroke="currentColor" strokeWidth="1.6" />
      </svg>
      <span className="block">
        <span className="block text-[11px] font-semibold leading-none tracking-[0.22em] uppercase">
          Golden Scope
        </span>
        <span className="mt-1 block text-[10px] font-medium leading-none tracking-[0.28em] uppercase opacity-70">
          Inspections
        </span>
        {tagline ? (
          <span className="mt-2 block max-w-[170px] text-[9px] leading-3 tracking-[0.16em] uppercase opacity-55">
            {tagline}
          </span>
        ) : null}
      </span>
    </Link>
  );
}

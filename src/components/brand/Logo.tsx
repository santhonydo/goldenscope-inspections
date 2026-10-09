import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  inverted?: boolean;
  compact?: boolean;
  tagline?: string;
};

export function Logo({ inverted = false, compact = false, tagline }: LogoProps) {
  return (
    <Link href="/" aria-label="Golden Scope Inspections home" className="inline-flex flex-col items-start">
      <span
        className={`relative block overflow-hidden rounded-sm bg-white ${
          compact ? "h-[50px] w-[190px]" : "h-[58px] w-[220px]"
        } ${inverted ? "ring-1 ring-white/15" : ""}`}
      >
        <Image
          src="/images/brand/golden-scope-official.jpg"
          alt="Golden Scope Inspections"
          fill
          priority
          className="object-cover object-top"
          sizes={compact ? "190px" : "220px"}
        />
      </span>
      {tagline ? (
        <span className={`mt-1 block max-w-[220px] text-[8px] leading-3 tracking-[0.12em] uppercase ${inverted ? "text-white/60" : "text-muted"}`}>
          {tagline}
        </span>
      ) : null}
    </Link>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "gold" | "ghost" | "dark" | "outline";
  arrow?: boolean;
  className?: string;
  external?: boolean;
};

const variants = {
  gold: "bg-gold text-white hover:bg-gold-deep",
  ghost: "bg-transparent text-ink hover:text-gold",
  dark: "bg-ink text-white hover:bg-black",
  outline: "border border-line bg-transparent text-ink hover:border-gold hover:text-gold",
};

export function Button({
  href,
  children,
  variant = "gold",
  arrow = false,
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded px-5 py-2.5 text-[13px] font-medium tracking-wide transition-colors ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
        {arrow ? <ArrowRight className="h-3.5 w-3.5" /> : null}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {arrow ? <ArrowRight className="h-3.5 w-3.5" /> : null}
    </Link>
  );
}

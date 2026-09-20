"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { footerLinks, site } from "@/lib/site";

export function Footer() {
  const pathname = usePathname();
  const isProcess = pathname.startsWith("/process");
  const isContact = pathname.startsWith("/contact");
  const isServices = pathname.startsWith("/services");
  const isVi = pathname.includes("vi-tran");
  const isJason = pathname.includes("jason-dixon");
  const isRikki = pathname.includes("rikki-neel");
  const isTony = pathname.includes("tony-ngo");

  const tagline = isProcess
    ? "Inspect. Inform. Empower."
    : isJason
      ? "A closer look. A brighter tomorrow."
      : isRikki
        ? "Higher standards. Healthier homes. Brighter tomorrows."
        : isVi
          ? "Trusted home inspections for a stronger Houston."
          : isServices
            ? "Peace of mind starts at home."
            : isTony
              ? "Proudly serving the Greater Houston area."
              : site.tagline;

  const script = isProcess
    ? "A Clearer Tomorrow Starts at Home."
    : isContact
      ? "Inspecting today for brighter tomorrows."
      : isVi
        ? "A stronger Houston starts at home."
        : isJason
          ? "Reports within 24 hours"
          : undefined;

  return (
    <footer className="relative overflow-hidden bg-footer text-white">
      {isVi ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 text-gold/40">
          <svg viewBox="0 0 1200 80" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M0 70 40 50 70 58 110 30 150 48 190 20 230 40 280 12 320 36 360 8 400 28 460 6 520 32 580 10 640 38 700 14 760 34 820 4 880 30 940 16 1000 42 1060 18 1120 36 1200 8V80H0Z"
              fill="currentColor"
            />
          </svg>
        </div>
      ) : null}

      <Container className="relative flex flex-col gap-8 py-10 sm:py-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xs">
          <Logo inverted />
          <p className="mt-5 text-sm leading-6 text-white/65">{tagline}</p>
        </div>

        <nav className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/75">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="space-y-2.5 text-sm text-white/75">
          <a href={site.phoneHref} className="block hover:text-white">
            {site.phone}
          </a>
          <a href={site.emailHref} className="block hover:text-white">
            {site.email}
          </a>
          <p>{site.city}</p>
        </div>

        {script ? (
          <p className="font-serif text-2xl italic text-white/80 lg:max-w-[240px] lg:text-right">
            {script}
          </p>
        ) : null}
      </Container>

      <div className="relative border-t border-white/10">
        <Container className="flex flex-col gap-3 py-5 text-[12px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2024 Golden Scope Inspections. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
            <div className="flex items-center gap-3 text-white/70">
              <a href={site.social.facebook} aria-label="Facebook" className="hover:text-white">
                <SocialGlyph path="M14 8h-2a2 2 0 0 0-2 2v2H8v3h2v7h3v-7h2.2l.8-3H13v-1.5c0-.3.2-.5.5-.5H14V8z" />
              </a>
              <a href={site.social.instagram} aria-label="Instagram" className="hover:text-white">
                <SocialGlyph path="M8 3.5h8A4.5 4.5 0 0 1 20.5 8v8a4.5 4.5 0 0 1-4.5 4.5H8A4.5 4.5 0 0 1 3.5 16V8A4.5 4.5 0 0 1 8 3.5Zm8 1.8H8A2.7 2.7 0 0 0 5.3 8v8A2.7 2.7 0 0 0 8 18.7h8A2.7 2.7 0 0 0 18.7 16V8A2.7 2.7 0 0 0 16 5.3ZM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8Zm4.15-2.85a.85.85 0 1 1-.85.85.85.85 0 0 1 .85-.85Z" />
              </a>
              <a href={site.social.youtube} aria-label="YouTube" className="hover:text-white">
                <SocialGlyph path="M21.5 8.2a3 3 0 0 0-2.1-2.1C17.6 5.6 12 5.6 12 5.6s-5.6 0-7.4.5A3 3 0 0 0 2.5 8.2 31 31 0 0 0 2 12a31 31 0 0 0 .5 3.8 3 3 0 0 0 2.1 2.1c1.8.5 7.4.5 7.4.5s5.6 0 7.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.5-3.8ZM10.2 14.8V9.2L15.3 12l-5.1 2.8Z" />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

function SocialGlyph({ path }: { path: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-footer text-white">
      <Container className="grid gap-12 py-14 sm:py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Logo inverted />
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/65">
            {site.tagline} Trusted home inspections for Houston buyers,
            sellers, and homeowners.
          </p>
        </div>

        <div>
          <p className="eyebrow text-white/45">Explore</p>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-white/45">Contact</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li>
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>{site.city}</li>
            <li>{site.hours}</li>
          </ul>
          <div className="mt-6">
            <Button href={site.bookingUrl} external arrow>
              Book an Inspection
            </Button>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-5 text-[12px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Golden Scope Inspections. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
            <a href={site.trecNoticeUrl} target="_blank" rel="noreferrer" className="hover:text-white">
              TREC Consumer Protection Notice
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}

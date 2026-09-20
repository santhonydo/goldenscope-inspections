"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const bookFirst = pathname.startsWith("/contact") || pathname.includes("jason-dixon");
  const showPhone = !pathname.includes("vi-tran");

  return (
    <header className="relative z-50 bg-cream">
      <Container className="flex min-h-[76px] items-center justify-between gap-6 py-3">
        <Logo
          compact
          tagline={
            pathname.startsWith("/contact") || pathname.includes("vi-tran")
              ? "A clearer perspective for a brighter tomorrow"
              : undefined
          }
        />

        <nav className="hidden items-center gap-4 xl:gap-6 min-[1100px]:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : link.href === "/about"
                  ? pathname.startsWith("/about") || pathname.startsWith("/inspectors")
                  : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b text-[13px] tracking-wide transition-colors ${
                  active
                    ? "border-gold text-ink"
                    : "border-transparent text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 min-[1100px]:flex">
          {bookFirst ? (
            <>
              <Button href={site.bookingUrl} external className="px-5 py-2.5">
                Book an Inspection
              </Button>
              {showPhone ? (
                <a href={site.phoneHref} className="hidden text-[13px] tracking-wide text-ink xl:inline">
                  {site.phone}
                </a>
              ) : null}
            </>
          ) : (
            <>
              {showPhone ? (
                <a href={site.phoneHref} className="hidden text-[13px] tracking-wide text-ink xl:inline">
                  {site.phone}
                </a>
              ) : null}
              <Button href={site.bookingUrl} external className="px-5 py-2.5">
                Book an Inspection
              </Button>
            </>
          )}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] border border-line min-[1100px]:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-line bg-cream min-[1100px]:hidden">
          <Container className="flex flex-col gap-1 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-base text-ink"
              >
                {link.label}
              </Link>
            ))}
            <a href={site.phoneHref} className="py-2.5 text-base text-ink">
              {site.phone}
            </a>
            <div className="pt-3">
              <Button href={site.bookingUrl} external className="w-full">
                Book an Inspection
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

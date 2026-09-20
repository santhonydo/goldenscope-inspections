import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

type CTABannerProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  image?: string;
  dark?: boolean;
};

export function CTABanner({
  eyebrow = "Ready to book?",
  title,
  body = "Get the clarity you need with a trusted Houston home inspection team.",
  image,
  dark = false,
}: CTABannerProps) {
  if (image) {
    return (
      <section className="relative overflow-hidden bg-footer text-white">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/35" />
        <Container className="relative grid gap-8 py-16 sm:py-20 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div>
            <p className="eyebrow text-gold">{eyebrow}</p>
            <h2 className="headline mt-4 max-w-xl text-4xl sm:text-5xl">{title}</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/70">{body}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={site.bookingUrl} external arrow>
                Book an Inspection
              </Button>
              <a href={site.phoneHref} className="inline-flex items-center px-2 text-sm text-white/80">
                {site.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className={dark ? "bg-footer text-white" : "bg-cream-deep"}>
      <Container className="flex flex-col gap-8 py-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <p className={`eyebrow ${dark ? "text-gold" : ""}`}>{eyebrow}</p>
          <h2 className="headline mt-3 text-3xl sm:text-5xl">{title}</h2>
          <p className={`mt-4 text-sm leading-7 ${dark ? "text-white/70" : "text-muted"}`}>
            {body}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={site.bookingUrl} external arrow>
            Book an Inspection
          </Button>
          <a
            href={site.phoneHref}
            className={`inline-flex items-center text-sm ${dark ? "text-white/80" : "text-ink"}`}
          >
            {site.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}

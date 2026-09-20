import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

type CTABannerProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  image?: string;
  tone?: "light" | "dark" | "plain";
  bookSide?: "left" | "right";
  facts?: { icon: string; label: string }[];
};

export function CTABanner({
  eyebrow = "Ready to book?",
  title,
  body = "Get the clarity you need with a trusted Houston home inspection team.",
  image,
  tone = "dark",
  bookSide = "left",
  facts,
}: CTABannerProps) {
  const defaultFacts = facts ?? [
    { icon: "phone", label: site.phone },
    { icon: "report", label: "Reports within 24 hours" },
    { icon: "location", label: "Proudly serving the Houston area" },
  ];

  if (image) {
    const light = tone === "light";
    return (
      <section className="relative min-h-[360px] overflow-hidden bg-[#0e0e0c]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
        />
        <div
          className={
            light
              ? "absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent"
              : "absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent"
          }
        />
        <Container className="relative grid gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className={`eyebrow ${light ? "text-white/80" : "text-gold"}`}>{eyebrow}</p>
            <h2 className="headline mt-4 max-w-xl text-4xl text-white sm:text-5xl">{title}</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/80">{body}</p>
            {bookSide === "left" ? (
              <div className="mt-8">
                <Button href={site.bookingUrl} external arrow>
                  Book an Inspection
                </Button>
              </div>
            ) : null}
          </div>
          <div className="space-y-4 text-white lg:justify-self-end">
            {bookSide === "right" ? (
              <div>
                <Button href={site.bookingUrl} external arrow>
                  Book an Inspection
                </Button>
              </div>
            ) : null}
            {defaultFacts.map((fact) => (
              <div key={fact.label} className="flex items-center gap-3 text-sm">
                <Icon name={fact.icon} className="h-4 w-4" />
                {fact.icon === "phone" ? (
                  <a href={site.phoneHref}>{fact.label}</a>
                ) : (
                  <span>{fact.label}</span>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className={tone === "dark" ? "bg-footer text-white" : "bg-cream-deep"}>
      <Container className="flex flex-col gap-8 py-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <p className={`eyebrow ${tone === "dark" ? "text-gold" : ""}`}>{eyebrow}</p>
          <h2 className="headline mt-3 text-3xl sm:text-5xl">{title}</h2>
          <p className={`mt-4 text-sm leading-7 ${tone === "dark" ? "text-white/70" : "text-muted"}`}>
            {body}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={site.bookingUrl} external arrow>
            Book an Inspection
          </Button>
          <a
            href={site.phoneHref}
            className={`inline-flex items-center text-sm ${tone === "dark" ? "text-white/80" : "text-ink"}`}
          >
            {site.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}

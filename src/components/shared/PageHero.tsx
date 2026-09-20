import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  body?: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
  aside?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  children,
  aside,
}: PageHeroProps) {
  return (
    <section className="overflow-hidden bg-cream">
      <Container className="grid items-center gap-10 py-12 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:gap-10 lg:gap-14 lg:py-16">
        <div>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="headline mt-4 max-w-xl text-[42px] sm:text-6xl lg:text-[72px]">
            {title}
          </h1>
          {body ? (
            <p className="mt-6 max-w-md text-[15px] leading-7 text-muted">{body}</p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
        <div className="relative">
          <div className="relative aspect-[5/4] overflow-hidden rounded-sm sm:aspect-[16/11]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
          {aside ? (
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 items-center justify-center lg:flex">
              {aside}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

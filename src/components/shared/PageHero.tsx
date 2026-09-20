import Image from "next/image";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  body?: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
  aside?: ReactNode;
  overlay?: ReactNode;
  imagePosition?: string;
};

export function PageHero({
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  children,
  aside,
  overlay,
  imagePosition = "center 40%",
}: PageHeroProps) {
  return (
    <section className="relative min-h-[520px] overflow-hidden bg-cream lg:min-h-[640px]">
      <div className="absolute inset-y-0 right-0 w-full lg:w-[68%]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          style={{ objectPosition: imagePosition }}
          sizes="(max-width: 1024px) 100vw, 68vw"
        />
      </div>
      <div className="absolute inset-0 hidden bg-gradient-to-r from-cream from-[32%] via-cream/90 via-[46%] to-transparent to-[64%] lg:block" />
      <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/70 to-transparent lg:hidden" />

      <div className="relative z-10 mx-auto flex min-h-[520px] w-full max-w-[1280px] items-center px-5 py-14 sm:px-8 lg:min-h-[640px] lg:px-12">
        <div className="max-w-[540px]">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="headline mt-4 text-[42px] sm:text-6xl lg:text-[72px]">{title}</h1>
          {body ? (
            <p className="mt-6 max-w-md text-[15px] leading-7 text-muted">{body}</p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>

      {aside ? (
        <div className="pointer-events-none absolute inset-y-0 right-6 hidden items-center lg:flex">
          {aside}
        </div>
      ) : null}
      {overlay ? (
        <div className="absolute bottom-[14%] right-[6%] hidden w-[360px] bg-white/94 px-10 py-9 lg:block">
          {overlay}
        </div>
      ) : null}
    </section>
  );
}

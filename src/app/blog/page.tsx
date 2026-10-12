import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container, Section } from "@/components/ui/Container";
import { blogPosts, formatPostDate, readingMinutes } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description:
    "Houston home inspection guides for buyers, sellers, and new homeowners — foundations, warranties, pre-listing inspections, and how to prepare.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <Section>
      <Container>
        <p className="eyebrow">Blog</p>
        <h1 className="headline mt-4 max-w-3xl text-5xl sm:text-6xl">
          Clearer answers before you buy, sell, or move in.
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-7 text-muted">
          Practical notes from Golden Scope Inspections on Houston roofs,
          foundations, builder warranties, and what to expect on inspection day.
        </p>

        <div className="mt-12 divide-y divide-line border-y border-line">
          {[...blogPosts].sort((a, b) => b.date.localeCompare(a.date)).map((post) => (
            <article key={post.slug} className="grid gap-6 py-10 md:grid-cols-[280px_1fr] md:items-center md:gap-10">
              <Link
                href={`/blog/${post.slug}`}
                className="relative block aspect-[16/10] overflow-hidden bg-cream-deep"
              >
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 280px"
                />
              </Link>
              <div>
                <p className="eyebrow">
                  {post.category}
                  <span className="mx-2 text-line">/</span>
                  {formatPostDate(post.date)}
                  <span className="mx-2 text-line">/</span>
                  {readingMinutes(post)} min
                </p>
                <h2 className="headline mt-3 text-3xl sm:text-4xl">
                  <Link href={`/blog/${post.slug}`} className="hover:text-gold-deep">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-muted">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-block text-sm tracking-wide text-ink underline decoration-gold underline-offset-4"
                >
                  Read article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

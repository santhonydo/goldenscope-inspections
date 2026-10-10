import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { blogPosts, formatPostDate, getPost, readingMinutes } from "@/lib/blog";
import { pageMetadata, siteUrl } from "@/lib/seo";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.image,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${siteUrl}/blog/${post.slug}`;
  const more = blogPosts
    .filter((entry) => entry.slug !== post.slug)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 2);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.date,
          author: { "@type": "Organization", name: post.author },
          publisher: {
            "@type": "Organization",
            name: site.name,
            url: siteUrl,
          },
          image: `${siteUrl}${post.image}`,
          mainEntityOfPage: url,
        }}
      />
      <Section className="pb-10">
        <Container className="max-w-3xl">
          <p className="eyebrow">
            <Link href="/blog" className="hover:text-ink">
              Blog
            </Link>
            <span className="mx-2 text-line">/</span>
            {post.category}
          </p>
          <h1 className="headline mt-4 text-4xl sm:text-5xl lg:text-6xl">{post.title}</h1>
          <p className="mt-5 text-sm text-muted">
            {formatPostDate(post.date)} · {readingMinutes(post)} min read · {post.author}
          </p>
        </Container>
      </Section>

      <Container className="max-w-3xl">
        <div className="relative aspect-[16/9] overflow-hidden bg-cream-deep">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      </Container>

      <Section className="pt-10">
        <Container className="max-w-3xl">
          <div className="space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="headline text-3xl">{section.heading}</h2>
                <div className="mt-4 space-y-4 text-[16px] leading-8 text-muted">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-14 border border-line bg-white p-6 sm:p-8">
            <p className="eyebrow">Next step</p>
            <h2 className="headline mt-3 text-3xl">Ready for a closer look?</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              Book a {post.relatedLabel.toLowerCase()} or call {site.phone}. Reports
              are delivered within 24 hours.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href={site.bookingUrl} external arrow>
                Book an Inspection
              </Button>
              <Button href={post.relatedHref} variant="outline">
                {post.relatedLabel}
              </Button>
            </div>
          </div>

          <div className="mt-14">
            <p className="eyebrow">More from the blog</p>
            <ul className="mt-5 divide-y divide-line border-y border-line">
              {more.map((entry) => (
                <li key={entry.slug} className="py-4">
                  <Link href={`/blog/${entry.slug}`} className="text-lg hover:text-gold-deep">
                    {entry.title}
                  </Link>
                  <p className="mt-1 text-sm text-muted">{formatPostDate(entry.date)}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}

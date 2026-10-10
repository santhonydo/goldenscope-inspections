import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InspectorPage } from "@/components/inspectors/InspectorPage";
import { getInspector, inspectors } from "@/lib/inspectors";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return inspectors.map((inspector) => ({ slug: inspector.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const inspector = getInspector(slug);
  if (!inspector) return {};
  return pageMetadata({
    title: inspector.name,
    description: inspector.intro,
    path: `/inspectors/${inspector.slug}`,
    image: inspector.photo,
  });
}

export default async function InspectorRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const inspector = getInspector(slug);
  if (!inspector) notFound();
  return <InspectorPage inspector={inspector} />;
}

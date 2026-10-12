import type { Metadata } from "next";
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services } from '@/lib/content';
import { pageMetadata } from "@/lib/seo";
export function generateStaticParams(){return services.map(s=>({slug:s.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}): Promise<Metadata> {
  const {slug}=await params;
  const service=services.find(s=>s.slug===slug);
  if(!service) return {title:'Inspection service'};
  return pageMetadata({title:service.title, description:service.body, path:`/services/${service.slug}`, image:service.image});
}
export default async function ServicePage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;const s=services.find(v=>v.slug===slug);if(!s)notFound();
  return <div className="house-scan"><section className="hs-service-detail"><div><p className="hs-eyebrow">GOLDEN SCOPE / INSPECTION SERVICES</p><h1>{s.title}</h1><p>{s.body}</p><div className="hs-service-actions"><Link className="hs-primary" href={`/book?service=${s.slug}`}>Schedule this inspection →</Link><Link href="/contact">Ask a question</Link></div></div>{/* eslint-disable-next-line @next/next/no-img-element */}<img src={s.image} alt={s.title} width="1200" height="800"/></section><section className="hs-page-section"><h2>Clear guidance, from start to finish.</h2><p>We inspect accessible components, explain what we found, and deliver a digital report within 24 hours. Contact us to confirm the scope for your property.</p><div className="hs-grid"><article><h3>On-site review</h3><p>A licensed inspector reviews accessible systems and conditions.</p></article><article><h3>Clear report</h3><p>Photos, findings and practical recommendations in a digital format.</p></article><article><h3>Questions answered</h3><p>Discuss findings with your inspector so you can decide what comes next.</p></article></div><Link href="/services">← View all services</Link></section></div>;
}

import type { Metadata } from "next";
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { RoomExplorer } from '@/components/house-scan/HouseScan';
import { rooms } from '@/lib/rooms';
import { pageMetadata } from "@/lib/seo";
export function generateStaticParams(){return rooms.map(r=>({slug:r.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}): Promise<Metadata> {
  const {slug}=await params;
  const room=rooms.find(r=>r.slug===slug);
  if(!room) return {title:'Room inspection'};
  return pageMetadata({
    title: room.title,
    description: `${room.subtitle} See what Golden Scope checks in a Houston ${room.title.toLowerCase()} inspection.`,
    path: `/rooms/${room.slug}`,
  });
}
export default async function RoomPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;const room=rooms.find(r=>r.slug===slug);if(!room)notFound();
  return <div className="house-scan"><div className="hs-page-title"><p className="hs-eyebrow">ROOM INSPECTION GUIDE</p><h1>{room.title}</h1><p>{room.subtitle}</p></div><RoomExplorer initial={slug} standalone/><section className="hs-page-section"><h2>Your {room.title.toLowerCase()} checklist</h2><div className="hs-grid">{room.checks.map(c=><article key={c.title}><h3>{c.title}</h3><p>{c.body}</p></article>)}</div><p>Inspection coverage depends on safe access, property conditions and agreed scope. Illustrations are educational.</p><Link href="/book" className="hs-primary">Book an inspection →</Link></section></div>;
}

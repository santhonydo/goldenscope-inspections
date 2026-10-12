import type { Metadata } from "next";
import { Booking } from '@/components/house-scan/Booking';
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Book an inspection",
  description:
    "Schedule a Houston home inspection online with Golden Scope Inspections. Choose a service and an available appointment.",
  path: "/book",
});
export default function BookPage(){return <div className="house-scan"><div className="hs-page-title"><p className="hs-eyebrow">INSPECTION SCHEDULING</p><h1>Let’s take a closer look.</h1><p>Use our online scheduler to select your inspection and choose an available appointment.</p></div><Booking/></div>;}

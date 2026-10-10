import type { Metadata } from "next";
import { ReportPreview } from '@/components/house-scan/HouseScan';
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Sample inspection report",
  description:
    "Preview how a Golden Scope inspection report turns findings into photos, context, and next steps.",
  path: "/sample-report",
});
export default function SampleReport(){return <div className="house-scan"><div className="hs-page-title"><p className="hs-eyebrow">SAMPLE REPORT</p><h1>From findings to a plan.</h1><p>Explore an illustrative report. Choose a category, then open a finding for context and next steps.</p></div><ReportPreview full/></div>;}

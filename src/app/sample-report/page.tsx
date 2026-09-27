import { ReportPreview } from '@/components/house-scan/HouseScan';
export const metadata={title:'Sample inspection report'};
export default function SampleReport(){return <div className="house-scan"><div className="hs-page-title"><p className="hs-eyebrow">SAMPLE REPORT</p><h1>From findings to a plan.</h1><p>Explore an illustrative report. Choose a category, then open a finding for context and next steps.</p></div><ReportPreview full/></div>;}

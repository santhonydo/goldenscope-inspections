import { Booking } from '@/components/house-scan/Booking';
export const metadata={title:'Book an inspection'};
export default function BookPage(){return <div className="house-scan"><div className="hs-page-title"><p className="hs-eyebrow">INSPECTION SCHEDULING</p><h1>Let’s take a closer look.</h1><p>Choose an inspection and tell us when you would prefer to schedule.</p></div><Booking/></div>;}

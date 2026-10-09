import { Booking } from '@/components/house-scan/Booking';
export const metadata={title:'Book an inspection'};
export default function BookPage(){return <div className="house-scan"><div className="hs-page-title"><p className="hs-eyebrow">INSPECTION SCHEDULING</p><h1>Let’s take a closer look.</h1><p>Use our online scheduler to select your inspection and choose an available appointment.</p></div><Booking/></div>;}

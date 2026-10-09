import { site } from '@/lib/site';

export function Booking() {
  return (
    <div className="hs-booking hs-booking-single">
      <aside className="hs-booking-aside">
        <p className="hs-eyebrow">LET’S MAKE IT SIMPLE</p>
        <h2>Local experts.<br/>Clear next steps.</h2>
        <p>We serve Greater Houston and surrounding communities. Schedule online to choose your inspection, property details, and an available appointment time.</p>
        <a href={site.phoneHref}>{site.phone}</a>
        <a href={site.emailHref}>{site.email}</a>
        <p>{site.hours}</p>
        <a className="hs-primary hs-scheduler" href={site.bookingUrl} target="_blank" rel="noreferrer">
          Book an Inspection <span aria-hidden="true">↗</span>
        </a>
      </aside>
    </div>
  );
}

'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowDown, ArrowLeft, ArrowRight, ChevronRight, FileText, Home, MapPin, Play, ShieldCheck, Users } from 'lucide-react';
import { rooms, roomImage } from '@/lib/rooms';
import { inspectors } from '@/lib/inspectors';
import { services } from '@/lib/content';
import { site } from '@/lib/site';

const systems = [
  {name:'Roof', room:'exterior', x:44, y:12, detail:'Coverings, flashing and drainage'},
  {name:'Attic', room:'attic', x:83, y:18, detail:'Structure, insulation and ventilation'},
  {name:'Electrical', room:'laundry-mechanical', x:53, y:44, detail:'Accessible panels, outlets and fixtures'},
  {name:'Plumbing', room:'kitchen', x:75, y:41, detail:'Fixtures, supply and drainage'},
  {name:'HVAC', room:'attic', x:67, y:17, detail:'Heating, cooling and airflow'},
  {name:'Foundation', room:'exterior', x:82, y:74, detail:'Visible slab, movement and site grading'},
];

// Replace VIDEO_ID when the final Golden Scope introduction is published.
const introVideoUrl='https://www.youtube.com/watch?v=VIDEO_ID';

export function RoomExplorer({initial='kitchen', standalone=false}:{initial?:string; standalone?:boolean}) {
  const [slug,setSlug]=useState(initial);
  const [selected,setSelected]=useState<number|null>(0);
  const [cycleVersion,setCycleVersion]=useState(0);
  const [busy,setBusy]=useState(false);
  const [error,setError]=useState(false);
  const ticket=useRef(0);
  const photo=useRef<HTMLDivElement>(null);
  const index=Math.max(0,rooms.findIndex(r=>r.slug===slug));
  const room=rooms[index];
  useEffect(()=>{
    const sync=()=>{const s=location.hash.startsWith('#room-')?location.hash.slice(6):initial;if(rooms.some(r=>r.slug===s)){ticket.current++;setSlug(s);setSelected(null);setBusy(false);}};
    sync();addEventListener('hashchange',sync);addEventListener('popstate',sync);
    return()=>{removeEventListener('hashchange',sync);removeEventListener('popstate',sync);};
  },[initial]);
  useEffect(()=>{setSelected(0);},[slug]);
  useEffect(()=>{
    if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    const timer=window.setInterval(()=>setSelected(current=>current===null?0:(current+1)%room.checks.length),5000);
    return()=>window.clearInterval(timer);
  },[slug,cycleVersion,room.checks.length]);
  async function choose(next:string){
    if(next===slug) return;
    const id=++ticket.current;setBusy(true);setError(false);
    const im=new Image();im.src=roomImage(rooms.find(r=>r.slug===next)!);
    try{await im.decode();}catch{if(id===ticket.current){setError(true);setBusy(false);}return;}
    if(id!==ticket.current)return;
    setSlug(next);setSelected(0);setBusy(false);history.pushState(null,'',`#room-${next}`);
  }
  function selectMarker(i:number){setSelected(i);setCycleVersion(version=>version+1);}
  return <section className="hs-explorer" id="rooms" aria-label="Explore the inspection room by room">
    <div className="hs-sidebar"><p className="hs-eyebrow">02 / LOOK A LITTLE CLOSER</p><h2>Every room.<br/><em>Every detail.</em></h2><p>Explore what we look at, room by room. Select a marker to see why it matters.</p>
      <div className="hs-tabs" aria-label="Choose a room">{rooms.map((r,i)=><button key={r.slug} aria-pressed={slug===r.slug} onClick={()=>choose(r.slug)}><small>{String(i+1).padStart(2,'0')}</small>{r.title}<ChevronRight size={14}/></button>)}</div>
    </div>
    <div className="hs-room"><div className="hs-room-head"><div><p className="hs-eyebrow">{String(index+1).padStart(2,'0')} / {String(rooms.length).padStart(2,'0')}</p><h3>{room.title}</h3><p>{room.subtitle}</p></div><div className="hs-arrows"><button aria-label="Previous room" onClick={()=>choose(rooms[(index+rooms.length-1)%rooms.length].slug)}><ArrowLeft/></button><button aria-label="Next room" onClick={()=>choose(rooms[(index+1)%rooms.length].slug)}><ArrowRight/></button></div></div>
      <div className="hs-photo" ref={photo} aria-busy={busy}>{/* eslint-disable-next-line @next/next/no-img-element */}<img key={slug} src={roomImage(room)} alt={`${room.title} illustrative home scene`} width="1672" height="941" />{room.checks.map((c,i)=><div className={`hs-marker-wrap${selected===i?' is-active':''}${c.y<35?' opens-down':''}${c.x<25?' aligns-left':c.x>75?' aligns-right':''}`} key={c.title} style={{left:`${c.x}%`,top:`${c.y}%`}}><button className="hs-marker" aria-label={`${c.title}: ${c.body}`} aria-expanded={selected===i} aria-describedby={selected===i?`hs-popover-${slug}-${i}`:undefined} onClick={()=>selectMarker(i)}>{i+1}</button>{selected===i&&<div className="hs-marker-popover" id={`hs-popover-${slug}-${i}`} role="tooltip"><strong>{c.title}</strong><p>{c.body}</p></div>}</div>)}<span className="hs-photo-note">Illustrative home · inspection scope varies</span></div>
      {busy&&<p role="status">Loading room…</p>}{error&&<p role="alert">This room could not load. Choose it again to retry.</p>}
      <div className="hs-room-links"><Link href="/sample-report">See how findings become a report <ArrowRight size={16}/></Link>{!standalone&&<Link href={`/rooms/${room.slug}`}>Room checklist <ChevronRight size={16}/></Link>}</div>
    </div>
  </section>;
}

const findings=[
  {id:'electrical',status:'Attention',room:'Kitchen',title:'GFCI protection to verify',body:'Ground fault protection could not be confirmed at a kitchen receptacle in this illustrative example.',next:'Ask a qualified electrician to evaluate and correct protection as needed before closing.'},
  {id:'roof',status:'Attention',room:'Exterior',title:'Flashing needs evaluation',body:'This sample finding describes a visible gap near a roof penetration.',next:'Ask a qualified roofer to evaluate and repair the flashing.'},
  {id:'window',status:'Maintenance',room:'Living room',title:'Maintain window seals',body:'A seal at an accessible window shows wear in this example.',next:'Monitor and reseal the opening as appropriate.'},
  {id:'bath',status:'Reviewed',room:'Bathroom',title:'Exhaust fan operated',body:'The accessible exhaust fan operated during the example inspection.',next:'Keep the grille clean and monitor ventilation during normal use.'},
];
export function ReportPreview({full=false}:{full?:boolean}){
  const [filter,setFilter]=useState('All');const [active,setActive]=useState<string|null>(null);
  const visible=findings.filter(f=>filter==='All'||f.status===filter);
  return <section id="report" className="hs-report"><div className="hs-report-intro"><p className="hs-eyebrow">03 / CLARITY YOU CAN USE</p><h2>A report you’ll<br/><em>actually understand.</em></h2><p>What we found. Why it matters. What to do next. Clear findings with practical context.</p><ul><li>Easy to read on your phone</li><li>Review findings with your inspector</li><li>Delivered within 24 hours</li></ul>{full?<button className="hs-primary" onClick={()=>window.print()}>Print sample report <FileText size={17}/></button>:<Link className="hs-primary" href="/sample-report">Explore the sample report <ArrowRight size={17}/></Link>}</div>
    <div className="hs-report-card"><div className="hs-report-title"><div><p className="hs-eyebrow">GOLDEN SCOPE / SAMPLE REPORT</p><h3>A clearer view of home.</h3></div><ShieldCheck/></div><p className="hs-report-note">Illustrative findings, not a report for a real property.</p><div className="hs-filters" aria-label="Filter findings">{['All','Attention','Maintenance','Reviewed'].map(s=><button key={s} aria-pressed={filter===s} onClick={()=>{setFilter(s);setActive(null);}}>{s} <span>{s==='All'?findings.length:findings.filter(f=>f.status===s).length}</span></button>)}</div><p className="sr-only" role="status">{visible.length} findings shown</p><div>{visible.map(f=><article key={f.id} className="hs-finding"><button aria-expanded={active===f.id} onClick={()=>setActive(active===f.id?null:f.id)}><span><small>{f.room} · {f.status}</small><strong>{f.title}</strong></span><ChevronRight size={18}/></button>{active===f.id&&<div className="hs-finding-detail"><p>{f.body}</p><h4>Recommended next step</h4><p>{f.next}</p><Link href="/contact">Ask our team a question →</Link></div>}</article>)}</div></div>
    {full&&<div className="hs-print"><h2>Golden Scope sample report</h2><p>Illustrative findings, not a report for a real property.</p>{findings.map(f=><article key={f.id}><h3>{f.room}: {f.title}</h3><p>{f.status} — {f.body}</p><h4>Recommended next step</h4><p>{f.next}</p></article>)}</div>}
  </section>;
}

export function HouseScan(){
  const [system,setSystem]=useState<string|null>(null);const teamRail=useRef<HTMLDivElement>(null);
  function explore(room:string){location.hash=`room-${room}`;document.getElementById('rooms')?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
  function moveTeam(dir:number){const rail=teamRail.current;if(!rail)return;const end=rail.scrollWidth-rail.clientWidth;const step=(rail.firstElementChild?.clientWidth??280)+22;rail.scrollTo({left:dir<0&&rail.scrollLeft<2?end:dir>0&&rail.scrollLeft>=end-2?0:rail.scrollLeft+dir*step,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
  return <div className="house-scan"><nav className="hs-rail" aria-label="Explore this page"><a href="#scan"><Home/>Scan</a><a href="#rooms"><MapPin/>Rooms</a><a href="#report"><FileText/>Report</a><a href="#team"><Users/>Team</a></nav>
    <section className="hs-hero" id="scan"><div className="hs-hero-copy"><p className="hs-eyebrow">HOUSTON HOMES. CLEARER ANSWERS.</p><h1>See the<br/><em>whole house.</em></h1><p>Look beyond the first impression. Get a clear understanding of your home, from roof to foundation.</p><div className="hs-hero-actions"><button className="hs-primary" onClick={()=>explore('kitchen')}>Explore the inspection <ArrowDown size={16}/></button><Link href="/book">Book an inspection <ArrowRight size={16}/></Link></div><div className="hs-trust"><span>◈ Texas licensed inspectors</span><span>◈ Digital reports within 24 hours</span></div></div><div className="hs-stage" onKeyDown={e=>{if(e.key==='Escape')setSystem(null);}}>{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/images/house-scan/hero-house-slab.webp" alt="Architectural cutaway of a Houston house with attic systems and a slab-on-grade foundation" width="1672" height="941" />{systems.map(s=><div className="hs-system" key={s.name} style={{left:`${s.x}%`,top:`${s.y}%`}}><button aria-expanded={system===s.name} onClick={()=>setSystem(system===s.name?null:s.name)}><span>●</span>{s.name}</button>{system===s.name&&<div className="hs-system-card"><strong>{s.name}</strong><p>{s.detail}</p><button onClick={()=>{setSystem(null);explore(s.room);}}>Explore this area <ArrowRight size={14}/></button></div>}</div>)}<span className="hs-stage-note">A little more insight. A lot more confidence.</span></div></section>
    <div className="hs-proof"><span>Independent inspections.</span><span>Real people. Clear guidance.</span><span>Proudly serving Greater Houston.</span></div>
    <section className="hs-intro-video" id="intro-video"><div className="hs-video-copy"><p className="hs-eyebrow">MEET GOLDEN SCOPE</p><h2>What a clearer inspection<br/><em>looks like.</em></h2><p>Meet the team, see how we inspect a home, and learn what you can expect from scheduling through your final report.</p><a href={introVideoUrl} target="_blank" rel="noreferrer">Watch our introduction <ArrowRight size={16}/></a></div><a className="hs-video-card" href={introVideoUrl} target="_blank" rel="noreferrer" aria-label="Watch the Golden Scope company introduction on YouTube"><span className="hs-video-kicker">GOLDEN SCOPE INSPECTIONS</span><span className="hs-video-play"><Play size={25} fill="currentColor"/></span><span className="hs-video-caption"><strong>Company introduction</strong><small>Watch on YouTube · Video placeholder</small></span></a></section>
    <RoomExplorer/><ReportPreview/>
    <section className="hs-section" id="services"><div className="hs-section-head"><div><p className="hs-eyebrow">FOR EVERY CHAPTER OF HOME</p><h2>The right inspection<br/>for your next move.</h2></div><Link href="/services">All services <ArrowRight size={16}/></Link></div><div className="hs-cards">{services.slice(0,3).map((s,i)=><Link href={`/services/${s.slug}`} key={s.slug}><small>{String(i+1).padStart(2,'0')}</small><h3>{s.title}</h3><p>{s.body}</p><ArrowRight size={18}/></Link>)}</div></section>
    <section className="hs-section hs-team" id="team"><div className="hs-section-head"><div><p className="hs-eyebrow">REAL PEOPLE. LOCAL KNOWLEDGE.</p><h2>The people behind<br/><em>every insight.</em></h2></div><div className="hs-arrows"><button aria-label="Previous inspectors" onClick={()=>moveTeam(-1)}><ArrowLeft/></button><button aria-label="Next inspectors" onClick={()=>moveTeam(1)}><ArrowRight/></button></div></div><div className="hs-team-rail" ref={teamRail}>{inspectors.map(p=><Link href={`/inspectors/${p.slug}`} key={p.slug} className="hs-team-card">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={p.slug==="vi-tran"?p.photo:`/images/house-scan/team-${p.firstName.toLowerCase()}.webp`} alt={p.name} width="408" height="612"/><h3>{p.name} <ArrowRight size={16}/></h3><p>{p.role}</p><small>TREC #{p.trec}</small></Link>)}</div></section>
    <section className="hs-book"><div><p className="hs-eyebrow">YOUR NEXT CHAPTER STARTS HERE</p><h2>Move forward.<br/><em>With a clearer picture.</em></h2></div><div><Link href="/book" className="hs-primary">Book your inspection <ArrowRight size={17}/></Link><p>Prefer to talk? <a href={site.phoneHref}>{site.phone}</a></p><small>Online scheduling · Greater Houston · Real people</small></div></section>
  </div>;
}

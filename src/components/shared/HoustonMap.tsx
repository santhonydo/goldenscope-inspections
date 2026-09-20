export function HoustonMap({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-sm bg-[#f3efe7] ${className}`}>
      <svg viewBox="0 0 480 420" className="h-full w-full" aria-label="Greater Houston service area">
        <rect width="480" height="420" fill="#f3efe7" />
        <path
          d="M40 90c40-30 90-40 150-28 70 14 110 8 170 30 40 15 70 50 80 95 12 52-8 110-40 150-30 38-80 55-140 58-70 4-130-10-180-50C30 305 8 240 18 185c8-42 8-70 22-95Z"
          fill="#ebe4d6"
          stroke="#d8d0c2"
          strokeWidth="1.5"
        />
        <path d="M40 210h400" stroke="#d7d0c3" strokeWidth="6" />
        <path d="M70 160h120" stroke="#d7d0c3" strokeWidth="4" />
        <path d="M250 250h150" stroke="#d7d0c3" strokeWidth="4" />
        <path d="M210 70v280" stroke="#d7d0c3" strokeWidth="5" />
        <circle cx="248" cy="214" r="7" fill="#c4a46b" />
        <text x="260" y="208" fontSize="16" fontFamily="var(--font-outfit), sans-serif" fill="#141414">
          Houston
        </text>
        <text x="168" y="92" fontSize="12" fill="#6b6560">The Woodlands</text>
        <text x="58" y="228" fontSize="12" fill="#6b6560">Katy</text>
        <text x="118" y="300" fontSize="12" fill="#6b6560">Sugar Land</text>
        <text x="268" y="318" fontSize="12" fill="#6b6560">Pearland</text>
        <text x="360" y="198" fontSize="12" fill="#6b6560">Baytown</text>
      </svg>
    </div>
  );
}

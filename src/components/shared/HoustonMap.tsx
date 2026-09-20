export function HoustonMap({
  className = "",
  caption,
}: {
  className?: string;
  caption?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-[#f6f2ea] ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/mockup/houston-highway-map.jpg"
        alt="Greater Houston service area — I-45, I-10, and Loop 610"
        className="h-full w-full object-contain object-center p-2"
      />
      {caption ? (
        <p className="absolute bottom-4 left-4 right-4 flex items-start gap-2 bg-white px-3 py-2 text-xs leading-5 text-muted shadow-sm">
          {caption}
        </p>
      ) : null}
    </div>
  );
}

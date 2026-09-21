type IconProps = {
  name: string;
  className?: string;
};

export function Icon({ name, className = "h-5 w-5" }: IconProps) {
  return (
    // Pack SVGs already use the redesign gold stroke.
    // eslint-disable-next-line @next/next/no-img-element
    <img src={`/icons/${name}.svg`} alt="" className={className} />
  );
}

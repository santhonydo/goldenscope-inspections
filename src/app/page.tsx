import { HouseScan } from "@/components/house-scan/HouseScan";
import { defaultDescription, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  description: defaultDescription,
  path: "/",
  image: "/images/house-scan/hero-house-cutaway.webp",
});

export default function HomePage() {
  return <HouseScan />;
}

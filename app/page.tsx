import Hero from "@/components/hero";
import TrustStrip from "@/components/trustStrip";
import FeaturedProduct from "@/components/feturedProduct";
import WhyCookEase from "@/components/whyCookEase";
import HowToUseIt from "@/components/howToUseIt";
import ComingSoon from "@/components/CommingSoon";
import OurGuarantee from "@/components/OurGuarantee";
export default function Home() {
  return (
   <main>
    <Hero />
    <TrustStrip />
    <FeaturedProduct />
    <WhyCookEase />
    <HowToUseIt />
    <ComingSoon />
    <OurGuarantee />
   </main>
  );
}

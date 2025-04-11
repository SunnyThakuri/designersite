import LandingHero from "@/components/landing/hero";
import LandingServices from "@/components/landing/services";
import Quote from "@/components/landing/quote";

export default function Home() {
  return (
    <div className="space-y-[160px]">
      <LandingHero/>
      <LandingServices/>
      <Quote/>
    </div>
  );
}

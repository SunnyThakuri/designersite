import LandingHero from "@/components/landing/hero";
import LandingServices from "@/components/landing/services";
import Quote from "@/components/landing/quote";
import Insights from "@/components/landing/insights";

export default function Home() {
  return (
    <div className="space-y-[160px]">
      <LandingHero/>
      <LandingServices/>
      <Quote/>
      <Insights/>
    </div>
  );
}

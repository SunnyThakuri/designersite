import LandingHero from "@/components/landing/hero";
import LandingServices from "@/components/landing/services";
import Quote from "@/components/landing/quote";
import Insights from "@/components/landing/insights";
import Expert from "@/components/landing/expert";
import OurWork from "@/components/landing/works";
import Trusted from "@/components/landing/trusted";
import Numbers from "@/components/landing/numbers";

export default function Home() {
  return (
    <div className="space-y-[160px]">
      <LandingHero/>
      <LandingServices/>
      <Trusted/>
      <Quote/>
      {/* <Numbers/> */}
      <Expert/>
      <Insights/>
      {/* <OurWork/> */}
    </div>
  );
}

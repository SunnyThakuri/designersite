import LandingHero from "@/components/landing/hero";
import LandingServices from "@/components/landing/services";
export default function Home() {
  return (
    <div className="space-y-[160px]">
      <LandingHero/>
      <LandingServices/>
    </div>
  );
}

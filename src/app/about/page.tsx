import AboutHero from "@/components/about/abouthero";
import Welcome from "@/components/about/welcome";
import LandingFaq from "@/components/landing/faq";
import OurWork from "@/components/landing/works";
import Expert from "@/components/landing/expert";
import AboutServices from "@/components/about/services";

const About = () =>{
    return(
        <div className="lg:space-y-[160px]">
            <AboutHero/>
            <Welcome/>
            <AboutServices/>
            <Expert/>
            <LandingFaq/>
            <OurWork/>
        </div>
    )
}

export default About;
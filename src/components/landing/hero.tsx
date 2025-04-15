import Image from "next/image";
import HeroCarousel from "../common/sliders/herocarousel";
const LandingHero = () =>{
    const heroImages = [
        '/images/landing/hero.jpg',
        '/images/landing/hero.jpg',
        '/images/landing/hero.jpg',
        '/images/landing/hero.jpg',
        '/images/landing/hero.jpg',
    ];

    return(
        <div className="relative w-full overflow-hidden ">
            <div className="w-full h-[400px] lg:h-[700px] ">
                {/* <Image
                    src={"/images/landing/hero.jpg"}
                    alt="hero"
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover brightness-90"/> */}
                <HeroCarousel images={heroImages}/>
            </div>
            <div className=" absolute top-[30%] left-[8%]">
                <p className="w-[20%] text-2xl lg:text-[80px] text-white lg:leading-[80px] font-semibold">About us</p>
            </div>
        </div>
    )
}

export default LandingHero;
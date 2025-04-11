import Image from "next/image";

const LandingHero = () =>{
    return(
        <div className="relative w-full ">
            <div className="w-full lg:h-[700px] ">
                <Image
                    src={"/images/landing/hero.jpg"}
                    alt="hero"
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover brightness-90"/>
            </div>
            <div className=" absolute top-[30%] left-[8%]">
                <p className="w-[20%] text-[80px] text-white leading-[80px] font-semibold">Design Interior With us</p>
            </div>
        </div>
    )
}

export default LandingHero;
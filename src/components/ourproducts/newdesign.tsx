import Image from "next/image"
import Insights from "../landing/insights"

const Newdesign  = () =>{
    const designs =[
        "/images/landing/design3.webp",
        "/images/landing/design6.webp",
        "/images/landing/design4.png",
        "/images/landing/design2.webp",
        "/images/landing/design5.webp",
        "/images/landing/design1.webp",
        "/images/landing/design8.webp",
        "/images/landing/service2.jpg",
        "/images/landing/design7.webp",
    ]

    return(
        <div className="space-y-[60px]">
            <div className="plr text-center space-y-6">
            <p className="text-3xl font-medium">New Designs</p>
            <p className="">Introducing stunning  designs blending organic beauty with timeless sophistication.</p>
            </div>

            <div className="w-full h-[600px] plr">
                <Image
                    src={"/images/Bathroom.jpg"}
                    alt="img"
                    width={1200}
                    height={600}
                    className="w-full h-full object-cover"/>
            </div>
            <div className="space-y-6 text-center">
                <p className="text-3xl font-medium">Style, Unscripted</p>
                <p>Our latest designs, featuring bold alloys and captivating textures, invite you to break free from <br /> convention and unleash your personal style.</p>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {/* card */}
                {
                    designs.map((design,index)=>(
                        
                <div key={index} className="relative">
                    <div className="w-full h-[400px]">
                        <Image
                        // src={"/images/landing/design1.webp"}
                        src={design}
                        alt="img"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover "/>
                    </div>
                    <p className="bg-white/70 px-4  absolute bottom-1 "></p>
                </div>
                    ))
                }
        
            </div>
            <Insights/>
        </div>
    )
}

export default Newdesign
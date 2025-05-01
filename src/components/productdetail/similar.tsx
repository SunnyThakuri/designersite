import Image from "next/image"
import Link from "next/link"

const Similar = () =>{

    const designs =[
        "/images/landing/design1.webp",
        "/images/landing/design2.webp",
        "/images/landing/design3.webp",
    ]
    return(
        <div className="space-y-8">
            <div className="px-12">
                <p className="text-3xl font-semibold">Explore Similar Designs</p>
                <p>Love this design but want to explore more? Browse these equally stunning quartz designs featuring similar tones and movement.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                    <p className="bg-white/70 px-4  absolute bottom-1 ">Purple Diamond</p>
                </div>
                    ))
                }
            </div>
            <div className="grid justify-center">
                <Link 
                className="bg-[#c5972d] text-white px-6 rounded-xl py-3"
                href={"/ourproducts/stonedesign"}>
                  See More
                </Link>
            </div>
        </div>
    )
}

export default Similar
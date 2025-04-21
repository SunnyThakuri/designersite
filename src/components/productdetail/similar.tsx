import Image from "next/image"

const Similar = () =>{

    const designs =[
        "/images/landing/design1.webp",
        "/images/landing/design2.webp",
        "/images/landing/design3.webp",
    ]
    return(
        <div>
            <p>Explore Similar Designs</p>
            <p>Love this design but want to explore more? Browse these equally stunning quartz designs featuring similar tones and movement.</p>
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
                    <p className="bg-white/70 px-4  absolute bottom-1 ">Purple Diamond</p>
                </div>
                    ))
                }
    
            </div>
        </div>
    )
}

export default Similar
import Image from "next/image"

const Gallery  = () =>{

    const designs =[
        "/images/landing/design1.webp",
        "/images/landing/design2.webp",
        "/images/landing/design3.webp",
    ]
    const design2 = [
        "/images/landing/design4.png",
        "/images/landing/design5.webp",
    ]

    return(
        <div className="space-y-[40px]">
            <div className="plr text-center space-y-4">
                <p className="text-3xl font-medium">Inspiration Gallery</p>
                <p className="">Find your style with our quartz countertops. Explore our <br /> impressive design palette, featuring 
                    unique and refined styles that are crafted <br />to be as enduring as they are beautiful.</p>
            </div>
            <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                    {
                        designs.map((item,index) =>(
                            <div key={index} className="w-full h-[500px]">
                                <Image
                                    // src={"/images/landing/design1.webp"}
                                    src={item}
                                    alt="img"
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover"/>
                            </div>
                            
                        ))
                    }
                </div>
                <div className="grid grid-cols-2 gap-4">
                {
                        design2.map((item,index) =>(
                            <div key={index} className="w-full h-[500px]">
                                <Image
                                    // src={"/images/landing/design1.webp"}
                                    src={item}
                                    alt="img"
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover"/>
                            </div>
                            
                        ))
                    }
                </div>

                {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
                <div className="grid grid-cols-3 gap-4">
                    {
                        designs.map((item,index) =>(
                            <div key={index} className="w-full h-[500px]">
                                <Image
                                    // src={"/images/landing/design1.webp"}
                                    src={item}
                                    alt="img"
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover"/>
                            </div>
                            
                        ))
                    }
                </div>
                <div className="grid grid-cols-2 gap-4">
                {
                        design2.map((item,index) =>(
                            <div key={index} className="w-full h-[500px]">
                                <Image
                                    // src={"/images/landing/design1.webp"}
                                    src={item}
                                    alt="img"
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover"/>
                            </div>
                            
                        ))
                    }
                </div>
            </div>
        
        </div>
    )
}

export default Gallery
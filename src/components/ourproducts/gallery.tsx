import Image from "next/image"

const Gallery  = () =>{
    const designs =[1,2,3]
    const design2 = [1,2]

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
                                    src={"/images/landing/design1.webp"}
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
                                    src={"/images/landing/design1.webp"}
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
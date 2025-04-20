import Image from "next/image"

const Stonedesign  = () =>{
    const designs =[1,2,3,4,5,6,7,8,9]

    return(
        <div className="space-y-[60px]">
            <div className="plr text-center space-y-6">
            <p className="text-3xl font-medium">Inspiration Gallery</p>
            <p className="">Find your style with our quartz countertops. Explore our <br /> impressive design palette, featuring 
                unique and refined styles that are crafted <br />to be as enduring as they are beautiful.</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
                    {/* card */}
                    {
                        designs.map((design,index)=>(
                            
                    <div key={index} className="relative">
                        <div className="w-full h-[400px]">
                            <Image
                            src={"/images/landing/design1.webp"}
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

export default Stonedesign
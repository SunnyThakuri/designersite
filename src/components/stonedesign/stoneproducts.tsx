import Image from "next/image"

const StoneProducts = () =>{
    
    
    return(
        <div className="grid grid-cols-3 gap-4">
            {/* card */}
            <div className="relative">
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
        </div>
    )
}

export default StoneProducts
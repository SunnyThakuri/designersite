import Image from "next/image"

const Bloggrid = () =>{
    return(
        <div className="plr flex gap-6">
            {/* Card left */}
            <div className="space-y-4 w-[70%]">
                <div className="w-full h-[550px]">
                    <Image
                        src={"/images/landing/design6.webp"}
                        alt="blog1"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover rounded-xl"/>
                </div>
                <div className="space-y-2">
                    <p className="text-[#434343] text-sm">Nov 12, 2024 | Clean, Organize</p>
                    <p className="text-xl font-semibold">The Magic of Interior Designing</p>
                </div>
            </div>

            {/* cards right */}
            <div className="w-[30%] space-y-4">
                {/* Card 1 */}
                <div className="space-y-4 ">
                    <div className="w-full h-[230px] ">
                        <Image
                            src={"/images/landing/design1.webp"}
                            alt="blog1"
                            width={300}
                            height={300}
                            className="w-full h-full object-cover rounded-xl"/>
                    </div>
                    <div className="space-y-2">
                        <p className="text-[#434343] text-sm">Nov 12, 2024 | Clean, Organize</p>
                        <p className="text-xl font-semibold">The Magic of Interior Designing</p>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="space-y-4">
                    <div className="w-full h-[230px]">
                        <Image
                            src={"/images/landing/service1.jpg"}
                            alt="blog1"
                            width={300}
                            height={300}
                            className="w-full h-full object-cover rounded-xl"/>
                    </div>
                    <div className="space-y-2">
                        <p className="text-[#434343] text-sm">Nov 12, 2024 | Clean, Organize</p>
                        <p className="text-xl font-semibold">The Magic of Interior Designing</p>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Bloggrid
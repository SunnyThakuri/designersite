import Image from "next/image";

const Trusted = () =>{
    return(
        <div className="plr space-y-8">
            <div className="flex flex-col md:flex-row md:gap-[200px] justify-between">
                <p className="md:w-[30%] text-4xl">Hire Trusted Designers to Make Your Home Shine</p>
                <p className="md:w-[30%]">Trust our skilled cleaners for eco-friendly, sparkling results—whether 
                    regular or deep cleaning, we expertly renew and refresh your home.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* card1 */}
                <div className="w-full h-[500px]">
                    <Image
                        src={"/images/landing/service1.jpg"}
                        alt=""
                        width={400}
                        height={500}
                        className="w-full h-full object-cover hover:scale-105 transition-transform ease-in-out duration-700 rounded-lg"/>
                </div>
                {/* card2 */}
                <div className="w-full h-[500px]">
                    <Image
                        src={"/images/landing/design1.webp"}
                        alt=""
                        width={400}
                        height={500}
                        className="w-full h-full object-cover hover:scale-105 transition-transform ease-in-out duration-700 rounded-lg"/>
                </div>
                {/* card3 */}
                <div className="w-full h-[500px]">
                    <Image
                        src={"/images/landing/design2.webp"}
                        alt=""
                        width={400}
                        height={500}
                        className="w-full h-full object-cover hover:scale-105 transition-transform ease-in-out duration-700 rounded-lg"/>
                </div>
            </div>
        </div>
    )
}

export default Trusted;
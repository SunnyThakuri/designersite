import Image from "next/image";

const Insights = () =>{
    return(
        <div className="plr space-y-[48px]">
            <p className="text-center text-4xl font-semibold">Fresh and Clean Insights</p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {/* card1 */}
                <div className="space-y-3">
                    <div className="w-full h-[260px] ">
                        <Image
                            src={"/images/landing/service1.jpg"}
                            alt="insgiht1"
                            width={500}
                            height={500}
                            className="w-full h-full object-cover rounded-xl"/>
                    </div>
                    <p>Nov 12, 2024 | Clean, Organize</p>
                    <p className="text-lg md:text-xl font-semibold">The Pros of Interior designing</p>
                </div>
                {/* card1 */}
                <div className="space-y-3">
                    <div className="w-full h-[260px] ">
                        <Image
                            src={"/images/landing/service1.jpg"}
                            alt="insgiht1"
                            width={500}
                            height={500}
                            className="w-full h-full object-cover rounded-xl"/>
                    </div>
                    <p>Nov 12, 2024 | Clean, Organize</p>
                    <p className="text-lg md:text-xl font-semibold">The Pros of Interior designing</p>
                </div>
                {/* card1 */}
                <div className="space-y-3">
                    <div className="w-full h-[260px] ">
                        <Image
                            src={"/images/landing/service1.jpg"}
                            alt="insgiht1"
                            width={500}
                            height={500}
                            className="w-full h-full object-cover rounded-xl"/>
                    </div>
                    <p>Nov 12, 2024 | Clean, Organize</p>
                    <p className="text-lg md:text-xl font-semibold">The Pros of Interior designing</p>
                </div>
            </div>
        </div>
    )
}

export default Insights;
import Image from "next/image";

const LandingText = () =>{
    return(
        <div className="lg:text-5xl text-center space-y-2">
            <p>"We'll help transform your spaces </p>
            <div className="flex gap-2 items-center justify-center">
                <p> with premium marble   </p>
                <div className=" w-28 h-16 rounded-full">
                    <Image
                        src={"/images/landing/service1.jpg"}
                        alt="image"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover rounded-full"/>
                </div>
            </div>
            <p>and granite every step of the way. Choose from</p>
            <div className="flex gap-2 items-center justify-center">
                <div className=" w-28 h-16 rounded-full">
                    <Image
                        src={"/images/landing/service1.jpg"}
                        alt="image"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover rounded-full"/>
                </div>
                <p> personalized consultations </p>
                <div className=" w-28 h-16 rounded-full">
                    <Image
                        src={"/images/landing/service1.jpg"}
                        alt="image"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover rounded-full"/>
                    </div>
                <p>weekly,</p>

            </div>
            <p> biweekly, or monthly.</p>
        </div>
    )
}

export default LandingText;
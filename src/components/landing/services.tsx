import Image from "next/image";

const LandingServices= () =>{

    const services=[
        "/images/landing/service1.jpg",
        "/images/landing/service1.jpg",
        "/images/landing/service3.webp",
        "/images/landing/service1.jpg",
        "/images/landing/service1.jpg",
        "/images/landing/service3.webp",
        "/images/landing/service1.jpg",
        "/images/landing/service3.webp",
    ]

    return(
        <div className="plr space-y-12">
            <div className="flex justify-between">
                <p className="text-2xl md:w-[20%]">Discover the Benefits & Our  Services</p>
                <p className="w-[40%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco  </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
                {
                    services.map((item,index) =>  (
                        <div key={index} className="w-full h-[400px]">
                            <Image
                                src={item}
                                alt="service"
                                width={400}
                                height={400}
                                className="w-full h-full object-cover rounded-lg"/>
                        </div>
                    ))
                }
            </div>  
        </div>
    )
}

export default LandingServices;

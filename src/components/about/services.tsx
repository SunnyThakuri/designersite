import Image from "next/image"

const AboutServices = () =>{
    return(
        <div className="plr flex md:gap-[130px]">
            <div className="w-full md:w-1/2 h-[650px]">
                <Image
                    src={"/images/landing/service1.jpg"}
                    alt=""
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-xl"/>
            </div>
            <div className="w-full md:w-1/2 lg:py-16 space-y-8">
                <p className=" text-4xl font-semibold hover:underline underline-offset-8">Macael White</p>
                <p className=" text-4xl font-semibold hover:underline underline-offset-8">Calacatta Gold</p>
                <p className=" text-4xl font-semibold hover:underline underline-offset-8">Carrara White</p>
                <p className=" text-4xl font-semibold hover:underline underline-offset-8">Arabescato Breccia</p>
                <p className=" text-4xl font-semibold hover:underline underline-offset-8">Bianco Lasa</p>
                <p className=" text-4xl font-semibold hover:underline underline-offset-8">Thassos White</p>
            <button className='bg-[#0C02EC] px-8 py-2 rounded-xl text-white mx-auto'>View All Services</button> 
            </div>

        </div>
    )
}

export default AboutServices
import Image from "next/image"

const AboutServices = () =>{
    return(
        <div className="plr w-full overflow-hidden flex md:gap-[130px] relative md:static">
            <div className="w-full md:w-1/2 h-[650px] relative  md:static">
                <Image
                    src={"/images/landing/service1.jpg"}
                    alt=""
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-xl brightness-75 md:brightness-100"/>
            </div>
            <div className="w-full md:w-1/2 top-12 left-10 text-white md:text-black  md:px-0 lg:py-16 space-y-8 md:block absolute md:static">
                <p className="  text-3xl md:text-4xl font-semibold hover:underline md:underline-offset-8">Macael White</p>
                <p className="  text-3xl md:text-4xl font-semibold hover:underline md:underline-offset-8">Calacatta Gold</p>
                <p className="  text-3xl md:text-4xl font-semibold hover:underline md:underline-offset-8">Carrara White</p>
                <p className="  text-3xl md:text-4xl font-semibold hover:underline md:underline-offset-8">Arabescato Breccia</p>
                <p className="  text-3xl md:text-4xl font-semibold hover:underline md:underline-offset-8">Bianco Lasa</p>
                <p className="  text-3xl md:text-4xl font-semibold hover:underline md:underline-offset-8">Thassos White</p>
                <button className='bg-[#c5972d] px-8 py-2 rounded-xl text-white  mx-auto'>View All Services</button> 
            </div>

        </div>
    )
}

export default AboutServices
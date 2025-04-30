import Image from "next/image"

const Quote = () =>{
    return(
        <div className="plr">
            <div className="bg-[#F3FAFF] flex gap-[100px] p-14">
                <div className="space-y-[48px]">
                    <p className="text-[40px] font-semibold">Get Free Quotes</p>
                    <div className="space-y-8">
                        <input 
                            placeholder="Full Name"
                            className="bg-white py-2 rounded-lg w-full px-4" />
                            <input 
                            placeholder="Last Name"
                            className="bg-white py-2 rounded-lg w-full px-4" />
                            <input 
                            placeholder="Email"
                            className="bg-white py-2 rounded-lg w-full px-4" />
                            <textarea 
                            rows={5}
                            placeholder="Message"
                            className="bg-white py-2 rounded-lg w-full px-4" />
                    </div>
                    <button className="px-6 text-white py-2 bg-[#c5972d] rounded-xl">
                        Submit
                    </button>
                </div>
                <div className="w-full h-[600px]  hidden sm:block ">
                    <Image
                    src={"/images/landing/service1.jpg"}
                    alt="img"
                    height={600}
                    width={500}
                    className="w-full h-full object-cover rounded-lg"/>
                </div>
            </div>
        </div>
    )
}

export default Quote
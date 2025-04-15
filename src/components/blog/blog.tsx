import Image from "next/image"

const items = [1,2,3,4,5,6,7,8,9]

const AllBlogs = () =>{
    return(
        <div className="plr max-w-[1440px] mx-auto">
            <p className="text-center text-3xl">All Blogs</p>
            <div className="grid lg:grid-cols-3 gap-6 ">
                {
                    items.map((item,index) =>(
                        <div key={index} className="space-y-4">
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
                    ))
                }
            </div>
        </div>
    )
}

export default AllBlogs
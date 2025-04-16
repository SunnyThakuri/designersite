import Image from "next/image"

const BlogDetailHeader= () =>{
    return(
        <div className="relative">
            <div className="w-full h-[200px] md:h-[300px] ">
                <Image
                src={"/images/blog/blogheader.png"}
                alt=""
                width={1200}
                height={400}
                className="w-full h-full object-cover brightness-90  "/>
            </div>
            <div className=" space-y-6 absolute left-12 top-1/2 transform -translate-y-1/2">
                <p className="text-white font-bold text-2xl">Our Blogs</p>
                <p className="text-white font-semibold text-lg">{`Home > Blogs > The Magic of Designing`}</p>
            </div>
        </div>
    )
}

export default BlogDetailHeader
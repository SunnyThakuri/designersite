import Image from "next/image"

const BlogHeader= () =>{
    return(
        <div className="">
            <div className="w-full h-[200px] md:h-[300px]">
                <Image
                src={"/images/blog/blogheader.png"}
                alt=""
                width={1200}
                height={400}
                className="w-full h-full object-cover "/>
            </div>
        </div>
    )
}

export default BlogHeader
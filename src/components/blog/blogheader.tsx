import Image from "next/image"

const BlogHeader= () =>{
    return(
        <div className="px-[100px]">
            <div className="w-full h-[300px]">
                <Image
                src={"/images/blog/blogheader.png"}
                alt=""
                width={1200}
                height={400}
                className="w-full h-full object-cover rounded-xl"/>
            </div>
        </div>
    )
}

export default BlogHeader
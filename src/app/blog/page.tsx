import AllBlogs from "@/components/blog/blog";
import Bloggrid from "@/components/blog/blogsgrid";
import BlogHeader from "@/components/blog/blogheader";
const Blog = () =>{
    return(
        <div className="lg:space-y-[160px]">
            <BlogHeader/>
            <Bloggrid/>
            <AllBlogs/>
        </div>
    )
}

export default Blog;
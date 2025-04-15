import AllBlogs from "@/components/blog/blog";
import Bloggrid from "@/components/blog/blogsgrid";
import BlogHeader from "@/components/blog/blogheader";
const Blog = () =>{
    return(
        <div>
            <BlogHeader/>
            <Bloggrid/>
            <AllBlogs/>
        </div>
    )
}

export default Blog;
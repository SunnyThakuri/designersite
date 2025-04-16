import BlogDetailHeader from "@/components/blog/blogdetailheader"
import BlogContent from "@/components/blog/blogcontent"
import AllBlogs from "@/components/blog/blog"
import BlogFooter from "@/components/blog/blogFooter"

const BlogDetail = () =>{
    return(
        <div className="space-y-[60px]">
            <BlogDetailHeader/>
            <BlogContent/>
            <BlogFooter/>
            <AllBlogs/>
        </div>
    )
}

export default BlogDetail
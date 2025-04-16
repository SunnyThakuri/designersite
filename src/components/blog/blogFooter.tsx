import { FaInstagram, FaFacebook } from "react-icons/fa";

const BlogFooter = ( )=>{
    return(
        <div className="plr max-w-[1440px] space-y-4 mx-auto">
            <p>Share with</p>
            <div className="flex gap-4">
                <FaInstagram className="w-6 h-6"/>
                <FaFacebook className="w-6 h-6"/>
            </div>
        </div>
    )
}

export default BlogFooter;
import { FiPhone } from "react-icons/fi";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Link from "next/link";
const Footer = () =>{
    return(
        <div className="flex justify-between flex-wrap plr mt-[60px] lg:mt-[160px] py-8 lg:py-[54px]">
            {/* Logo */}
            <div>
                logo
            </div>

            <div className="space-y-5">
                <p className="text-xl font-semibold">Quick Links</p>
                <div className="text-[#383838] space-y-2">
                    <Link href={"/blog"}>
                        <p>Home</p>
                    </Link>
                    <Link href={"/blog"}>
                        <p>About</p>
                    </Link>
                    <Link href={"/blog"}>
                        <p>Blog</p>
                    </Link>
                    <Link href={"/blog"}>
                        <p>Contact</p>
                    </Link>
                </div>
            </div>

            <div className="space-y-5">
                <p className="text-xl font-semibold">Useful Links</p>
                <div className="text-[#383838] flex flex-col gap-2 ">
                    <Link href={"/blog"}>
                        <p>Blog</p>
                    </Link>
                    <Link href={"/ourproducts/stonedesign"}>
                        <p>Stone Designs</p>
                    </Link>
                    <Link href={"/ourproducts/gallery"}>
                        <p>Inspiration Gallery</p>
                    </Link>
                    <Link href={"/ourproducts/newdesign"}>
                        <p>New Designs</p>
                    </Link>
                </div>
            </div>

            <div className="space-y-5">
                <p className="text-xl font-semibold">Contact</p>
                <div className="space-y-2">
                    <div className="flex items-center gap-4">
                        <FiPhone className="w-5 h-5"/>
                        <p>+61 416 942 392</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <CiLocationOn className="w-5 h-5"/>
                        <p>Ohio, USA</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <CiMail className="w-5 h-5"/>
                        <p>info@interniordesign.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <FaFacebook className="w-5 h-5"/>
                    <FaInstagram className="w-5 h-5"/>
                </div>
            </div>
        </div>
    )
}

export default Footer;
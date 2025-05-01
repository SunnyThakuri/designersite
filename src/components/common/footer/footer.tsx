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
                <div className="text-[#383838] flex flex-col gap-2">
                    <Link href={"/blog"}>
                        <p className="hover:underline underline-offset-4 hover:text-[#c5972d]">Home</p>
                    </Link>
                    <Link href={"/blog"}>
                        <p className="hover:underline underline-offset-4 hover:text-[#c5972d]">About</p>
                    </Link>
                    <Link href={"/blog"}>
                        <p className="hover:underline underline-offset-4 hover:text-[#c5972d]">Blog</p>
                    </Link>
                    <Link href={"/blog"}>
                        <p className="hover:underline underline-offset-4 hover:text-[#c5972d]">Contact</p>
                    </Link>
                </div>
            </div>

            <div className="space-y-5">
                <p className="text-xl font-semibold">Useful Links</p>
                <div className="text-[#383838] flex flex-col gap-2 ">
                    <Link href={"/blog"}>
                        <p className="hover:underline underline-offset-4 hover:text-[#c5972d]">Blog</p>
                    </Link>
                    <Link href={"/ourproducts/stonedesign"}>
                        <p className="hover:underline underline-offset-4 hover:text-[#c5972d]">Stone Designs</p>
                    </Link>
                    <Link href={"/ourproducts/gallery"}>
                        <p className="hover:underline underline-offset-4 hover:text-[#c5972d]">Inspiration Gallery</p>
                    </Link>
                    <Link href={"/ourproducts/newdesign"}>
                        <p className="hover:underline underline-offset-4 hover:text-[#c5972d]">New Designs</p>
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
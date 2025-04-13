import { FiPhone } from "react-icons/fi";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaInstagram, FaFacebook } from "react-icons/fa";
const Footer = () =>{
    return(
        <div className="flex justify-between flex-wrap plr lg:mt-[160px] lg:py-[54px]">
            {/* Logo */}
            <div>
                logo
            </div>

            <div className="space-y-5">
                <p className="text-xl font-semibold">Quick Links</p>
                <div className="text-[#383838] space-y-2">
                    <p>Home</p>
                    <p>About</p>
                    <p>Services</p>
                    <p>Appointment</p>
                    <p>Contact</p>
                </div>
            </div>

            <div className="space-y-5">
                <p className="text-xl font-semibold">Services</p>
                <div className="text-[#383838] space-y-2">
                    <p>Gutter Cleaning</p>
                    <p>Office Cleaning</p>
                    <p>Home Cleaning</p>
                    <p>Window Cleaning</p>
                    <p>Solar Cleaning</p>
                    <p>Pressure Cleaning</p>
                    <p>Carpet Cleaning</p>
                    <p>Tiles Cleaning</p>
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
                        <p>Sydney, Australia</p>
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
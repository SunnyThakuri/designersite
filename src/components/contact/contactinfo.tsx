import { FiPhone } from "react-icons/fi";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Contactinfo = () =>{
    return(
        <div className="w-full space-y-2">   
            <p className="text-2xl  font-semibold">Contact Info</p>
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

            <div className="hongkong_map  h-[290px] w-full">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14124.876210929546!2d85.3414185!3d27.7413888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1744785057992!5m2!1sen!2snp"
                className="rounded-[8px] w-full h-full "
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                
            </div>
        </div>
    )
}

export default Contactinfo
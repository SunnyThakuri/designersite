import ContactForm from "@/components/contact/contactForm";
import Contactinfo from "@/components/contact/contactinfo";
const Contact = () =>{
    return(
        <div className="flex flex-col md:flex-row plr">
            <ContactForm/>
            <Contactinfo/>
        </div>
    )
}

export default Contact;
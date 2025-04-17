import ContactForm from "@/components/contact/contactForm";
import Contactinfo from "@/components/contact/contactinfo";
const Contact = () =>{
    return(
        <div className="flex gap-6 flex-col md:flex-row pt-16 plr">
            <ContactForm/>
            <Contactinfo/>
        </div>
    )
}

export default Contact;
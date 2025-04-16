const ContactForm = () =>{
    return(
        <div className="w-full space-y-2 p-[60px]">
            <p className="text-2xl font-semibold">Contact Us</p>
            <form className="space-y-3">
                <div className="flex gap-3">
                    <input type="text" className="w-full px-4 py-3 border-2 outline-none rounded-lg" placeholder="First Name" />
                    <input type="text" className="w-full px-4 py-3 border-2 outline-none rounded-lg"
                        placeholder="last name" />
                </div>
                <input type="email" className="w-full px-4 py-3 border-2 outline-none rounded-lg"
                    placeholder="email" />
                <input type="text" className="w-full px-4 py-3 border-2 outline-none rounded-lg"
                    placeholder="contact" />
                <textarea 
                className="w-full px-4 py-3 border-2 outline-none rounded-lg"
                rows={5}
                placeholder="Your Message"
                id=""/>
            </form>                                                                     
        </div>
    )
}

export default ContactForm
import Image from "next/image"

const BlogContent = () =>{
    return(
        <div className="plr space-y-6 max-w-[1440px] mx-auto">
            <p>Nov 12, 2024 | Clean, Organize</p>
            <div className="space-y-6">
                <p className="text-4xl font-bold">Lorem ipsum dolor sit </p>
                <p>{`Discover the unparalleled benefits of WOW Cleaning, where excellence meets efficiency. Our professional team is 
                trained in the latest cleaning techniques, ensuring that every job is performed to the highest standards. By employing 
                advanced equipment and eco-friendly products, we guarantee a thorough and safe clean that protects both your health 
                and the environment. Whether it’s removing stubborn stains from carpets, polishing hardwood floors, or sanitizing 
                high-touch surfaces, our expertise ensures impeccable results every time. We stay abreast of industry advancements 
                to continuously improve our methods, ensuring we deliver the best possible service. With our skilled technicians at 
                work, you can rest assured that your space will not only be clean but also healthier and more comfortable for everyone
                who uses it.`}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id
                    cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec
                    metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent
                    taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>

                <div className="h-[400px] w-full">
                    <Image
                        src={"/images/landing/service2.jpg"}
                        alt="img"
                        width={1200}
                        height={500}
                        className="w-full h-full object-cover rounded-xl"/>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id
                    cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec
                    metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent
                    taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id
                    cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec
                    metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent
                    taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
            </div>
        </div>
    )
}

export default BlogContent
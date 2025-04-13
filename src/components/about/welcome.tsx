import Image from "next/image";

const Welcome = () =>{
    return(
        <div className="plr  flex flex-col md:flex-row md:gap-[135px]">
            <div className="md:py-[84px] md:w-1/2 md:space-y-16">
                <p className="text-4xl font-semibold">Welcome to our Team, a Designing Company!</p>
                <div className="space-y-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.
                        In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus 
                        fringilla lacus nec 
                        </p>
                    <p>metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.
                    Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                </div>
            </div>
            <div className="md:w-1/2">
                <Image
                src={"/images/landing/service1.jpg"}
                alt=""
                width={500}
                height={500}
                className="w-full h-full object-cover"/>
            </div>
        </div>
    )
}

export default Welcome;
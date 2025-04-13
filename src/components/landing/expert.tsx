import Image from "next/image";

const Expert = () =>{
    return(
        <div className=" relative w-full h-[300px] md:h-[600px] text-white">
            <Image
                src={"/images/landing/hero.jpg"}
                alt=""
                width={1200}
                height={700}
                className="w-full h-full object-cover"/>
                <div className=" absolute top-[50%] text-center w-[50%] left-[25%]">
                    <p className="text-center text-xl md:text-[56px]">An Expert Cleaning Service You Can Trust</p>
                    <p className="hidden sm:block">Our attention to detail is unmatched and we take pride in leaving your space sparkling clean. We treat your home as ours.</p>
                </div>
        </div>
    )
}

export default Expert;
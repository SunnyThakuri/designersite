import Image from "next/image"
import Link from "next/link"

const Experience = () =>{
    return(
        <div className="plr max-w-[1440px] mx-auto flex gap-12">
            <div className="w-1/2 space-y-10 text-lg">
                <p className="text-4xl font-semibold">Experience the Designs </p>
                <p>Discover the unparalleled beauty at a local showroom. 
                    Knowledgeable experts are ready to provide design advice, project planning, and unlimited inspiration.</p>
                <p>{`Looking for Designing? Call ahead and we’ll get it ready for you.`}</p>
                <div className=" w-fit">
                    <Link href={'/contact'}>
                    <div className="border-2  border-black rounded-xl mx-auto px-6 py-2">
                        Contact us
                    </div>
                    </Link>
                </div>
            </div>
            <div className="w-1/2 h-400px">
                <Image
                    src={"/images/landing/design6.webp"}
                    width={600}
                    height={600}
                    alt="img"
                    className="w-full h-full object-cover"/>
            </div>
        </div>
    )
}

export default Experience
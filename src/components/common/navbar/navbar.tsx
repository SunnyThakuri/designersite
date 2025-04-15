import Image from "next/image";
import Link from "next/link";

const Navbar = () =>{
    return(
        <div className="plr absolute z-10 w-full text-white">
            <div className=" w-full px-4  mt-4 rounded-full backdrop-blur-md items-center flex justify-between">
                <div className="h-[50px] w-[200px] items-center grid ">
                    {/* <Image
                    src={""}
                    alt=""
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"/> */}
                    Logo
                </div>
                <div className="hidden md:flex items-center gap-4  sm:block">
                    <Link href={"/"}>
                        <p>Home</p>
                    </Link>
                    <Link href={"/about"}>
                        <p>About</p>
                    </Link>
                    <Link href={""}>
                        <p>Services</p>
                    </Link>
                    <Link href={""}>
                        <p>Appointment</p>
                    </Link>
                    <Link href={""}>
                        <p>Contact</p>
                    </Link>
                    <Link href={""}>
                        <p className="bg-blue-500 px-4 rounded-full py-2">Call Us</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
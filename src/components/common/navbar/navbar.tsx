"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () =>{
    // return(
    //     <div className="plr absolute z-10 w-full text-white">
    //         <div className=" w-full px-4  mt-4 rounded-full backdrop-blur-md items-center flex justify-between">
    //             <div className="h-[50px] w-[200px] items-center grid ">
    //                 {/* <Image
    //                 src={""}
    //                 alt=""
    //                 width={100}
    //                 height={100}
    //                 className="w-full h-full object-cover"/> */}
    //                 Logo
    //             </div>
    //             <div className="hidden md:flex items-center gap-4  sm:block">
    //                 <Link href={"/"}>
    //                     <p>Home</p>
    //                 </Link>
    //                 <Link href={"/about"}>
    //                     <p>About</p>
    //                 </Link>
    //                 <Link href={""}>
    //                     <p>Services</p>
    //                 </Link>
    //                 <Link href={""}>
    //                     <p>Appointment</p>
    //                 </Link>
    //                 <Link href={""}>
    //                     <p>Contact</p>
    //                 </Link>
    //                 <Link href={""}>
    //                     <p className="bg-blue-500 px-4 rounded-full py-2">Call Us</p>
    //                 </Link>
    //             </div>
    //         </div>
    //     </div>
    // )

    const[isActive,setisActive] = useState(false)

    return(
        <>
            <div className="plr bg-white absolute z-10 w-full shadow-md ">
                <div className=" w-full px-4  py-4 rounded-full backdrop-blur-md items-center  flex justify-between">
                    <div className="h-[50px] w-[200px] items-center grid ">
                        {/* <Image
                        src={""}
                        alt=""
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"/> */}
                        Logo
                    </div>
                    <div className="hidden text-[#474747] md:flex items-center gap-4 lg:gap-10 sm:block">
                        <Link href={"/"}>
                            <p>Home</p>
                        </Link>
                        <Link href={"/about"}>
                            <p>About</p>
                        </Link>
                        <div 
                            onMouseLeave={()=>setisActive(false)}
                            onMouseEnter={()=>setisActive(true)}>
                            <Link href={""} >
                                <p>Our Products</p>
                            </Link>

                        </div>
                            

                        <Link href={""}>
                            <p>Appointment</p>
                        </Link>
                        <Link href={""}>
                            <p>Contact</p>
                        </Link>
                    </div>
                    <Link href={""}>
                        <p className="bg-blue-500 px-4 rounded-full py-2">Call Us</p>
                    </Link>
                </div>
            </div>
            {
                isActive &&

                <div
                onMouseLeave={()=>setisActive(false)}
                onMouseEnter={()=>setisActive(true)}
                className="flex gap-10 absolute z-40 top-12 pl-32 py-10 justify-center  bg-white w-full h-[400px]">
                    <div className="flex flex-col gap-6 text-xl font-medium">
                        <Link href={"/ourproducts/stonedesign"}>
                            <p >Stone design</p>
                        </Link>
                        <Link href={"/ourproducts/gallery"}>
                            <p>Inspiration Gallery</p>
                        </Link>
                        <Link href={"/ourproducts/newdesign"}>
                            <p>New Designs</p>
                        </Link>
                    </div>
                    <div className="h-full border-[0.5px] border-yellow-700"></div>
                    <div className="h-full w-[500px]">
                        <Image
                        src={"/images/landing/service2.jpg"}
                        alt="img"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover rounded-lg"/>
                    </div>
                </div>
            }
        </>
    )
}

export default Navbar;
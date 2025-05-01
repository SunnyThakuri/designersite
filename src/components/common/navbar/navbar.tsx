// "use client"
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// const Navbar = () =>{

//     const[isActive,setisActive] = useState(false)

//     return(
//         <>
//             {/* <div className="plr bg-[#080404] text-white absolute z-10 w-full shadow-md "> */}
//             <div className="plr   absolute z-10 w-full shadow-md ">

//                 <div className=" w-full px-4  py-4 rounded-full  items-center  flex justify-between">
//                     <div className="h-[50px] w-[200px] items-center grid ">
//                         {/* <Image
//                         src={""}
//                         alt=""
//                         width={100}
//                         height={100}
//                         className="w-full h-full object-cover"/> */}
//                         Logo
//                     </div>
//                     <div className="hidden text-black md:flex items-center gap-4 lg:gap-10 sm:block">
//                         <Link href={"/"}>
//                             <p>Home</p>
//                         </Link>
//                         <Link onMouseEnter={()=>setisActive(false)} href={"/about"}>
//                             <p>About</p>
//                         </Link>
//                         <div 
//                             // onMouseLeave={()=>setisActive(false)}
//                             onMouseEnter={()=>setisActive(true)}>
//                             <Link href={""} >
//                                 <p>Our Products</p>
//                             </Link>

//                         </div>
                            
//                         <Link href={"/contact"}>
//                             <p>Contact</p>
//                         </Link>
//                     </div>
//                     <Link href={"/contact"}>
//                         <p className="bg-[#c5972d] text-white px-4 rounded-full py-2">Call Us</p>
//                     </Link>
//                 </div>
//             </div>
//             {
//                 isActive &&

//                 <div
//                 onMouseLeave={()=>setisActive(false)}
//                 onMouseEnter={()=>setisActive(true)}
//                 className="flex gap-10 absolute z-40 top-[80px] pl-32 py-10 justify-center  bg-white w-full h-[400px]">
//                     <div className="flex flex-col gap-6 text-xl font-medium">
//                         <Link href={"/ourproducts/stonedesign"}>
//                             <p className="hover:underline underline-offset-6" >Stone design</p>
//                         </Link>
//                         <Link href={"/ourproducts/gallery"}>
//                             <p className="hover:underline underline-offset-6">Inspiration Gallery</p>
//                         </Link>
//                         <Link href={"/ourproducts/newdesign"}>
//                             <p className="hover:underline underline-offset-6">New Designs</p>
//                         </Link>
//                     </div>
//                     <div className="h-full border-[0.5px]"></div>
//                     <div className="space-y-6">
//                         <div className="h-[250px] w-[450px]">
//                             <Image
//                             src={"/images/landing/service2.jpg"}
//                             alt="img"
//                             width={500}
//                             height={500}
//                             className="w-full h-full object-cover "/>
//                         </div>
//                         <p className="text-center">Our Products</p>
//                     </div>
//                 </div>
//             }
//         </>
//     )
// }

// export default Navbar;

"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for hamburger and close menu
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Original Navbar for Larger Screens */}
      <div className="hidden md:block plr absolute z-10 w-full shadow-md">
        <div className="w-full px-4 py-4 rounded-full items-center flex justify-between">
          <div className="h-[50px] w-[200px] items-center grid">
            {/* Logo */}
            Logo
          </div>
          <div className="hidden text-black md:flex items-center gap-4 lg:gap-10 sm:block">
            <Link href={"/"}>
              <p>Home</p>
            </Link>
            <Link href={"/about"}>
              <p>About</p>
            </Link>
            <div
              onMouseEnter={() => setIsMenuOpen(true)}
              onMouseLeave={() => setIsMenuOpen(false)}
            >
              <Link href={""}>
                <p>Our Products</p>
              </Link>
            </div>
            <Link href={"/contact"}>
              <p>Contact</p>
            </Link>
          </div>
          <Link href={"/contact"}>
            <p className="bg-[#c5972d] text-white px-4 rounded-full py-2">Call Us</p>
          </Link>
        </div>

        {/* Dropdown Menu for "Our Products" */}
        {isMenuOpen && (
          <div
            onMouseLeave={() => setIsMenuOpen(false)}
            className="flex gap-10 absolute z-40 top-[80px] pl-32 py-10 justify-center bg-white w-full h-[400px]"
          >
            <div className="flex flex-col gap-6 text-xl font-medium">
              <Link href={"/ourproducts/stonedesign"}>
                <p className="hover:underline underline-offset-6">Stone Design</p>
              </Link>
              <Link href={"/ourproducts/gallery"}>
                <p className="hover:underline underline-offset-6">Inspiration Gallery</p>
              </Link>
              <Link href={"/ourproducts/newdesign"}>
                <p className="hover:underline underline-offset-6">New Designs</p>
              </Link>
            </div>
            <div className="h-full border-[0.5px]"></div>
            <div className="space-y-6">
              <div className="h-[250px] w-[450px]">
                <Image
                  src={"/images/landing/service2.jpg"}
                  alt="img"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center">Our Products</p>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Navbar for Smaller Screens */}
      <div className="md:hidden flex items-center justify-between px-4 py-4 bg-white shadow-md">
        {/* Logo */}
        <div className="text-xl font-bold">Logo</div>

        {/* Hamburger Menu */}
        <button
          className="text-3xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Sliding Menu for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full bg-white w-[75%] max-w-[300px] shadow-lg transform transition-transform duration-300 z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-start gap-6 px-6 pt-10 text-lg font-medium">
          <li>
            <Link href="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/ourproducts" onClick={toggleMenu}>
              Our Products
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
          <li>
            <button
              className="bg-[#c5972d] text-white px-6 py-2 rounded-lg"
              onClick={toggleMenu}
            >
              Call Us
            </button>
          </li>
        </ul>
      </div>

      {/* Backdrop for Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default Navbar;
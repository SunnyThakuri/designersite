"use client"
import React, { useState } from "react";
import Image from "next/image";

const AboutServices = () => {
  // State to manage the currently hovered image
  const [hoveredImage, setHoveredImage] = useState("/images/landing/service1.jpg");

  // Object mapping services to their images
  const services = [
    { name: "Macael White", image: "/images/landing/service1.jpg" },
    { name: "Calacatta Gold", image: "/images/landing/service2.jpg" },
    { name: "Carrara White", image: "/images/landing/design1.webp" },
    { name: "Arabescato Breccia", image: "/images/landing/design2.webp" },
    { name: "Bianco Lasa", image: "/images/landing/design3.webp" },
    { name: "Thassos White", image: "/images/landing/design4.png" },
  ];

  return (
    <div className="plr w-full overflow-hidden flex md:gap-[130px] relative md:static">
      {/* Image Section */}
      <div className="w-full md:w-1/2 h-[650px] relative md:static">
        <Image
          src={hoveredImage}
          alt=""
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-xl brightness-75 md:brightness-100"
        />
      </div>

      {/* Services Section */}
      <div className="w-full md:w-1/2 top-12 left-10 text-white md:text-black md:px-0 lg:py-16 space-y-8 md:block absolute md:static">
        {services.map((service, index) => (
          <p
            key={index}
            className="text-3xl md:text-4xl font-semibold hover:underline md:underline-offset-8 cursor-pointer"
            onMouseEnter={() => setHoveredImage(service.image)}
            onMouseLeave={() => setHoveredImage("/images/landing/service1.jpg")} // Reset image when hover ends
          >
            {service.name}
          </p>
        ))}
        <button className="bg-[#c5972d] px-8 py-2 rounded-xl text-white mx-auto">View All Services</button>
      </div>
    </div>
  );
};

export default AboutServices;
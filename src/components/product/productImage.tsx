"use client"
import React, { useState } from "react";
import Image from "next/image";
import ProductCarousel from "../common/sliders/productcarousel";

const imageItems = [
  { image: "/images/landing/design1.webp" },
  { image: "/images/landing/design2.webp" },
  { image: "/images/landing/design3.webp" },
  { image: "/images/landing/design4.png" },
  { image: "/images/landing/design5.webp" },
];

const ProductImage: React.FC = () => {
  console.log(imageItems[0].image)
  const [selectedImage, setSelectedImage] = useState(imageItems[0].image);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="md:w-[530px] h-[450px] w-full md:h-[580px] ">
        <Image
          src={selectedImage}
          alt="product"
          className="w-full h-full object-cover rounded-xl"
          width={600}
          height={600}
        />
      </div>
      <div className="md:w-[530px] w-full">
        <ProductCarousel items={imageItems} onImageClick={handleImageClick} />
      </div>
    </div>
  );
};

export default ProductImage;

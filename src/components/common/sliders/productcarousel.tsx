import React, { useState } from "react";
import Image from "next/image";

type ProductImage = {
  image: string;
};

type CarouselsProps = {
  items: Array<ProductImage>;
  onImageClick: (image: string) => void;
};

const ProductCarousel: React.FC<CarouselsProps> = ({ items, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex items-center justify-between absolute top-1/2 transform -translate-y-1/2 w-full px-4">
        <button
          className="bg-gray-400 p-2 rounded-full hover:bg-gray-500 focus:outline-none"
          onClick={handlePrev}
        >
          ❮
        </button>
        <button
          className="bg-gray-400 p-2 rounded-full hover:bg-gray-500 focus:outline-none"
          onClick={handleNext}
        >
          ❯
        </button>
      </div>
      <div
        className="flex transition-transform duration-300"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${items.length * 100}%`,
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full md:w-1/4 px-2 cursor-pointer"
            onClick={() => onImageClick(item.image)}
          >
            <div className="h-[110px] md:h-[123px]">
              <Image
                src={item.image}
                alt="product"
                className="w-full h-full rounded-lg object-cover"
                width={100}
                height={100}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
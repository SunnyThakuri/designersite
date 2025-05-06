import React, { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel  from "embla-carousel-react";

type ProductImage = {
  image: string;
};

type CarouselsProps = {
  items: Array<ProductImage>;
  onImageClick: (image: string) => void;
};

const ProductCarousel: React.FC<CarouselsProps> = ({ items, onImageClick }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }); // Initializing Embla with loop enabled

  const handleImageClick = useCallback(
    (image: string) => {
      if (onImageClick) {
        onImageClick(image);
      }
    },
    [onImageClick]
  );

  return (
    <div className="relative w-full overflow-hidden">
      {/* Embla Viewport */}
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {items.map((item, index) => (
            <div
              key={index}
              className="embla__slide flex-shrink-0 w-1/4 px-2 cursor-pointer"
              onClick={() => handleImageClick(item.image)}
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
    </div>
  );
};

export default ProductCarousel;
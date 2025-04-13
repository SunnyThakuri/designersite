"use client";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

interface HeroCarouselProps {
  images: string[];
  autoplayInterval?: number;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ images, autoplayInterval = 3000 }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      const autoplay = setInterval(() => {
        emblaApi.scrollNext();
      }, autoplayInterval);

      emblaApi.on("select", () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });

      return () => {
        clearInterval(autoplay);
        //@ts-expect-error //error coming
        emblaApi.off("select");
      };
    }
  }, [emblaApi, autoplayInterval]);

  return (
    <div className="relative h-full">
      <div className="overflow-hidden h-full " ref={emblaRef}>
        <div className="flex h-full">
          {images.map((image, index) => (
            <div className="flex-shrink-0  w-full h-full" key={index}>
              <Image src={image} width={600} height={650} alt={`Slide ${index}`} className="w-full h-full  object-cover" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute left-[8%] bottom-6 w-full flex">
        {images.map((_, index) => (
            <div
            key={index}
            className={`mx-1 bg-white  w-[10px] h-[10px] rounded-full 
                ${selectedIndex === index ? 'border-[6px] border-white bg-gray-400' : ' border-gray-400  border-[4px]'}
            `}
            />
        ))}
        </div>
    </div>
  );
};

export default HeroCarousel;

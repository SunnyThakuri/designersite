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
      <div className="overflow-hidden h-full rounded-2xl" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((image, index) => (
            <div className="flex-shrink-0 rounded-2xl w-full h-full" key={index}>
              <Image src={image} width={600} height={650} alt={`Slide ${index}`} className="w-full h-full rounded-2xl object-cover" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 w-full flex justify-center">
        {images.map((_, index) => (
          <div
            key={index}
            className={`mx-1 h-[2px] ${selectedIndex === index ? 'bg-white w-12' : 'bg-gray-300 w-8'} rounded`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;

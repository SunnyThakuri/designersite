import Image from 'next/image'
import React from 'react'

const OurWork = () => {
  return (
    <div className="my-12 lg:my-[140px] w-full">
      <h1 className="text-center text-[22px] mb-6">Some of our Works</h1>
      <div className='flex flex-col md:flex-row gap-3 w-full py-6 px-4 md:px-0'>
        {/* Left Side */}
        <div className='flex flex-col w-full md:w-[40%] gap-3 '>
          {/* Left1 */}
          <div className='flex gap-3 '>
            <div className=" md:h-[405px] w-full">
              <Image
                src="/images/landing/service1.jpg"
                width={270}
                height={405}
                alt="instagram-photo"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="md:h-[325px] w-full self-end">
              <Image
                src="/images/landing/service1.jpg"
                width={270}
                height={325}
                alt="instagram-photo"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Left2 */}
          <div className='flex gap-3 w-full overflow-hidden'>
            <div className=" md:h-[240px] md:w-[317px] ">
              <Image
                src="/images/landing/service1.jpg"
                width={317}
                height={240}
                alt="instagram-photo"
                className="rounded-lg w-full h-full object-cover "
              />
            </div>
            <div className="md:h-[200px] md:w-[317px] lg:w-full  ">
              <Image
                src="/images/landing/service1.jpg"
                width={317}
                height={200}
                alt="instagram-photo"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Middle */}
        <div className='grid items-center justify-center w-full md:w-[20%]'>
        <div className="md:h-[390px] w-full">
              <Image
                src="/images/landing/service1.jpg"
                alt="instagram"
                width={324}
                height={390}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
        </div>

        {/* Right */}
        <div className='flex flex-col w-full md:w-[40%] gap-3 '>
          {/* Left1 */}
          <div className='w-full flex gap-3'>
            <div className=" md:h-[325px] w-full self-end">
              <Image
                src="/images/landing/service1.jpg"
                width={270}
                height={405}
                alt="instagram-photo"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="md:h-[405px] w-full">
              <Image
                src="/images/landing/service1.jpg"
                width={270}
                height={325}
                alt="instagram-photo"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Left2 */}
          <div className='flex gap-3 '>
          <div className="w-full md:w-[200px] md:h-[186px]">
              <Image
                src="/images/landing/service1.jpg"
                width={270}
                height={405}
                alt="instagram-photo"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="md:h-[240px] w-full">
              <Image
                src="/images/landing/service1.jpg"
                width={270}
                height={325}
                alt="instagram-photo"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
      <div className='grid items-center mx-auto'>
        <button className='shop-btn-dark mx-auto'>VIEW INSTAGRAM</button>
      </div>
    </div>
  );
};

export default OurWork;
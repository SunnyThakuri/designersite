"use client";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const LandingFaq = () => {
    const faqList = [
        {
          id: 1,
          title: "How to choose the right marble or granite for your space?",
          description:
            "Our team of experts will guide you through selecting the perfect marble or granite that complements your style, budget, and functional needs. Visit our showroom for inspiration and professional advice.",
        },
        {
          id: 2,
          title: "What are the care and maintenance tips for marble and granite surfaces?",
          description:
            "To ensure durability, clean spills promptly, use pH-neutral cleaners, and reseal surfaces periodically. Our care guide provides detailed instructions for keeping your surfaces pristine.",
        },
        {
          id: 3,
          title: "Do you provide custom cutting and installation services?",
          description:
            "Yes, we offer precision cutting and expert installation services tailored to your project requirements. Our team ensures a flawless finish for kitchens, bathrooms, or other spaces.",
        },
        {
          id: 4,
          title: "What is the delivery process for marble and granite orders?",
          description:
            "We handle safe and timely delivery of all orders, ensuring your materials arrive in perfect condition. For more details, our team will coordinate the delivery schedule with you.",
        },
    ]

  const [showAns, setShowAns] = useState(-1);

  return (
    <section className=" max-sm:pt-4 plr mx-auto max-sm:pb-12  flex flex-col md:flex-row " >
        <div className="container bg-[#f7f7f7] md:px-[60px] py-8 md:py-[60px] md:w-[50%]">
            <div className="flex">
                <div className="flex-1">
                    <h3 className="font-medium text-xl sm:text-2xl lg:text-3xl">
                        Frequently Asked Questions
                    </h3>
                    <p className="mt-2   max-sm:text-[14px] sm:mt-4 ">
                        .
                    </p>

                    <div className="flex flex-col gap-6 mt-6 sm:mt-12    ">
                    {faqList.map((faq, index) => (
                        <div
                        key={faq.title}
                        className="border-b pb-3 sm:pb-6   "
                        onClick={() => {
                            if(index==showAns){

                            setShowAns(-1);
                            }
                            else{

                            setShowAns(index);
                            }



                            
                        }}
                        >
                        <div className="flex justify-between cursor-pointer ">
                            <p className="text-base sm:text-[18px]">{faq.title}</p>
                            {index == showAns ? <FaMinus /> : <FaPlus />}
                        </div>
                        <div
                            className={`${
                            showAns == index
                                ? " transition-all ease-in-out duration-500 overflow-auto  opacity-100 translate-x-1 "
                                : "h-0 overflow-hidden opacity-0"
                            } `}
                        >
                            <p className=" text-[#828282] max-sm:text-sm mt-1 sm:mt-3 ">
                            {faq.description}
                            </p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            </div>
        </div>
        <div className="space-y-[48px] bg-white py-8 md:py-[60px] md:w-1/2 md:px-[60px]">
            <p className="text-3xl font-semibold">Contact Us</p>
            <form className="space-y-6">
                <input
                placeholder="Full Name"
                className="p-2 w-full border-[1px] rounded-lg"/>
                <input
                placeholder="Email Adderess"
                className="p-2 w-full border-[1px] rounded-lg"/>
                <input
                placeholder="Contact"
                className="p-2 w-full border-[1px] rounded-lg"/>
                <textarea 
                    rows={5}
                    placeholder="Your Message"
                    className="w-full p-2 border-[1px] rounded-lg"/>
                <button className='bg-[#c5972d] px-8 py-2 rounded-lg text-white mx-auto'>Submit</button>

            </form>
        </div>
    </section>
  );
};

export default LandingFaq;

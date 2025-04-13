"use client";
import { FaChevronUp, FaChevronDown  } from "react-icons/fa";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const LandingFaq = () => {
  const faqList = [
    {
      id: 1,
      title: "How to submit your Documents?",
      description:
        "Simply scan and email your documents to our dedicated submission email address provided, ensuring a swift and hassle-free process",
    },

    {
      id: 2,
      title: "Know Rules & Regulations",
      description:
        "For Information on rules and regulations, kindly refer to the official Government of Poland website at https://www.gov.pl/",
    },

    {
      id: 3,
      title: "How to get Embassy Datas?",
      description:
        "Please consult the official embassy website or contact their dedicated appointment booking system for detailed instructions and available options.",
    },

    {
      id: 4,
      title: "How to Flight Tickets?",
      description:
        "Simply provide your travel details to our team at DK Travel Services, and we'll take care of securing the best flight options tailored to your needs.",
    },
  ];

  const [showAns, setShowAns] = useState(-1);

  return (
    <section className=" max-sm:pt-4 plr mx-auto py-20 max-sm:pb-12 lg:-translate-y-96 flex flex-col md:flex-row " >
        <div className="container bg-[#f7f7f7] md:px-[60px] py-8 md:py-[60px] md:w-[50%]">
            <div className="flex">
                <div className="flex-1">
                    <h3 className="font-medium text-xl sm:text-2xl lg:text-3xl">
                        Frequently Asked Questions
                    </h3>
                    <p className="mt-2   max-sm:text-[14px] sm:mt-4 ">
                        Poland&apos;s job market ally, empowering seekers with expertise
                        and comprehensive support for a successful career journey.
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
                <button className='bg-[#0C02EC] px-8 py-2 rounded-lg text-white mx-auto'>Submit</button>

            </form>
        </div>
    </section>
  );
};

export default LandingFaq;

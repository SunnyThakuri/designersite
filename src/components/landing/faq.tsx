// import { FaChevronUp, FaChevronDown  } from "react-icons/fa";
// import { useState } from "react";

// const LandingFaq= ()=>{
//     return(
//         <div>

//         </div>
//     )
// }

// export default LandingFaq


// const Faq = () => {
//   const faqList = [
//     {
//       id: 1,
//       title: "What is PramiRaut?",
//       description:
//         "PramiRaut focuses on elegant, confident and classically styled women clothing which is beautifully designed. The outfits are Fully lined that gives the confidence and luxurious feeling as well as the look.  ",
//     },

//     {
//       id: 2,
//       title: "Who is behind PramiRaut?",
//       description:
//         "Pramila Raut, who always had the vision of building a clothing line brought PramiRaut into reality. Her strong motivation of completing her trip from Nepal to the US as a designer concept serves as the basis of this company.  ",
//     },

//     {
//       id: 3,
//       title: "What is the goal that PramiRaut holds?",
//       description:
//         "Women’s uniqueness, heritage, and belief are beautifully expressed through our fashion, let alone our goal of helping them with our fashion designs that are filled with elegance.  ",
//     },

//     {
//       id: 4,
//       title: "Guideline on how to shop from the website?",
//       description:
//       "You can add the items you add it to a cart where you can put them into certain categories, and when you check down out you can view the complete order.  ",  
//       },

//     {
//       id: 5,
//       title: "Am I allowed to alter or cancel my purchase?",
//       description:
//         "Yes, within 24 hours of ordering that is going to be entirely possible but otherwise, it is going to be difficult for us to do so. In that case, please make sure you drop us an email at [pramidesigns@gmail.com] (mail to - pramidesigns@gmail.com) as soon as possible.  ",
//     },
//     {
//       id: 6,
//       title: "Which items do you constantly have in stock?",
//       description:
//       "Our goal is to make every item easily accessible but if due to a high demand for certain items we are unable to stock them then customers may still face inconveniences.\nIt is possible to register for stock replenishment notifications if an item is out of stock."
//     },
    
//   ];  



//   const [showAns, setShowAns] = useState(-1);


//   return (
//     <div className="relative bg-[#f7f7f7]">
//     <section className=" max-sm:pt-4 lg:max-w-[1300px] mx-auto max-sm:pb-12" >
 
//       <div className="container  py-4 sm:py-28 ">
//         <div className="flex">
//           <div className="flex-1">
//             <h3 className="font-semibold text-xl  sm:text-2xl lg:text-3xl">
//               Frequently Asked Questions
//             </h3>
//             <p className="mt-2   max-sm:text-[14px] sm:mt-4 ">
              
//             </p>
//             {/* Intro */}
//             <div className="flex flex-col gap-6 mt-6 sm:mt-12    ">
//               {faqList.slice(0,3).map((faq, index) => (
//                 <div
//                 key={faq.title}
//                 className="border-b pb-3 sm:pb-6   "
//                 onClick={() => {
//                   if(index==showAns){
//                     setShowAns(-1);
//                   }
//                   else{
                    
//                     setShowAns(index);
//                   }
//                 }}
//                 >
//                   <div className="flex justify-between cursor-pointer ">
//                     <p className="text-base sm:text-[18px]">{faq.title}</p>
//                     {index == showAns ? <FaChevronUp /> : <FaChevronDown />}
//                   </div>
//                   <div
//                     className={`${
//                       showAns == index
//                       ? " transition-all ease-in-out duration-500 overflow-auto  opacity-100 translate-x-1 "
//                       : "h-0 overflow-hidden opacity-0"
//                     } `}
//                     >
//                     <p className=" text-[#828282] max-sm:text-sm mt-1 sm:mt-3 ">
//                     {faq.description.split('\n').map((line, idx) => ( <p key={idx} className="text-[#828282] max-sm:text-sm mt-1 sm:mt-3"> {line} </p> ))}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//       </div>
//       </div>

//     </section>
//   </div>
//   </div>

//   );
// };



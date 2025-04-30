import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";

const ProductDesc = () =>{
    return(
        <div className="flex flex-col gap-16 md:w-[75%]">
            <div className="flex flex-col gap-12 ">
                <div className="flex flex-col gap-4">
                    <p className="primary largest-text">Plastic Chair</p>
                    <p className="text-[#4B4B4B]">Enhance Your Space with This Low-Maintenance,  Wonder—Perfect for Indoors or Outdoor</p>
                </div>
                <p className="text-[26px] font-bold">Dhr. 340</p>
                <div className="flex gap-5 items-center">
                    <p className="text-sm md:text-base">Quantity:</p>
                    <div className="flex cursor-pointer  ">
                    <div className="bg-[#EBEBEB] justify-center border-[1px] rounded-tl-lg rounded-bl-lg w-9 h-9 grid items-center ">
                        <p className="text-xl">-</p>
                    </div>
                    <div className="h-9 w-10 md:w-16 border-[1px] grid items-center justify-center">
                        1
                    </div>
                    <div className="bg-[#EBEBEB] border-[1px] justify-center rounded-tr-lg rounded-br-lg w-9 h-9 grid items-center ">
                        <p className="text-xl">+</p>
                    </div>
                    </div>
                </div>
                <div className="flex gap-3 w-full">
                    <button  className="w-full flex items-center">
                        <FaWhatsapp className="w-6 h-6" />
                        <p className="hidden md:block">Chat on Whatsapp</p>
                    </button>
                    <button  className="w-full flex items-center">
                        <FaFacebookMessenger />
                        <p className="hidden md:block">Chat on Messenger</p>
                    </button>
                </div>
                {/* <button >Add to Wishlist</button> */}
            </div>
            {/* Details */}
            <div>
                <p className="font-bold">Product Details:</p>
                
                <p>Plastic Chairr. lorem lorem lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem</p>
            </div>

        </div>
    )
}

export default ProductDesc
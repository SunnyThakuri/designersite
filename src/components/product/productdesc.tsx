import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";

const ProductDesc = () =>{
    return(
        <div className="flex flex-col gap-16 md:w-[75%]">
            <div className="flex flex-col gap-12 ">
                <div className="flex flex-col gap-4">
                    <p className="primary largest-text">Green Marble</p>
                    <p className="text-[#4B4B4B]">Enhance Your Space with This Low-Maintenance,  Wonder—Perfect for Indoors or Outdoor</p>
                </div>
                <p className="text-[26px] font-bold">$ 340</p>
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
                
                <p>Green diamond stone. lorem lorem lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem</p>
            </div>

        </div>
    )
}

export default ProductDesc
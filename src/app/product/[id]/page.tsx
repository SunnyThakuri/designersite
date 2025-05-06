import ProductImage from "@/components/product/productImage"
import ProductInfo from "@/components/product/productdesc"
// import Image from "next/image"
import Benefits from "@/components/productdetail/benefits"
import Similar from "@/components/productdetail/similar"
import Experience from "@/components/productdetail/experience"
// import Carousels from "@/components/common/carousel/carousel"
// import { products } from "@/components/landingpage/productSection"

const IndividualProduct = () =>{
    return(
        <div className="  space-y-[100px]">
            <div className="flex max-w-[1440px] mx-auto plr flex-col md:flex-row gap-16 pt-8 md:pt-16 ">
                <div className="md:w-[70%]">
                    <ProductImage/>
                </div>
                <div className="md:w-[40%]">
                    <ProductInfo/>
                </div>
            </div>
            {/* <div className="flex flex-col gap-12 pt-36">
                <p className="text-center largest-text ">View Similar Products</p>
                 <Carousels items={products}/>
            </div> */}
            <Benefits/>
            <Similar/>
            <Experience/>
        </div>
    )
}

export default IndividualProduct
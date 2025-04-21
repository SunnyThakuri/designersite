import ProductInfo from "@/components/productdetail/productinfo"
import ProductImage from "@/components/productdetail/productImage"
import Benefits from "@/components/productdetail/benefits"
import Similar from "@/components/productdetail/similar"
import Experience from "@/components/productdetail/experience"

const ProductDetai = () =>{
    return(
        <div className="space-y-[100px] py-8">
            <div className="flex plr gap-12">
                <div className="w-[60%] ">
                    <ProductImage/>
                </div>
                <div className="w-[40%]">
                    <ProductInfo/>
                </div>
            </div>
            <Benefits/>
            <Similar/>
            <Experience/>
        </div>
        
    )
}

export default ProductDetai
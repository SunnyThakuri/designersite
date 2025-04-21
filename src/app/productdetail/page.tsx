import ProductInfo from "@/components/productdetail/productinfo"
import ProductImage from "@/components/productdetail/productImage"
import Benefits from "@/components/productdetail/benefits"

const ProductDetai = () =>{
    return(
        <div className=" py-8">
            <div className="flex plr gap-12">
                <div className="w-[60%] ">
                    <ProductImage/>
                </div>
                <div className="w-[40%]">
                    <ProductInfo/>
                </div>
            </div>
            <Benefits/>
        </div>
        
    )
}

export default ProductDetai
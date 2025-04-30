import ProductImage from "@/components/product/productImage"
import ProductDesc from "@/components/product/productdesc"
import Image from "next/image"
// import Carousels from "@/components/common/carousel/carousel"
// import { products } from "@/components/landingpage/productSection"

const IndividualProduct = () =>{
    return(
        <div className="plr  max-w-[1440px] mx-auto space-y-[100px]">
            <div className="flex flex-col md:flex-row gap-16 pt-8 md:pt-16 ">
                <div>
                    <ProductImage/>
                </div>
                <div>
                    <ProductDesc/>
                </div>
            </div>
            {/* <div className="flex flex-col gap-12 pt-36">
                <p className="text-center largest-text ">View Similar Products</p>
                 <Carousels items={products}/>
            </div> */}
            <div className="space-y-[60px]">
                <p className="text-center text-4xl font-semibold">Similar products</p>
                <div className="flex gap-4" >
                    {/* card1 */}
                    <div className="space-y-2">
                        <div className="h-[200px]">
                            <Image
                                src={"/images/blog/blog1.jpg"}
                                alt="prodyucts"
                                width={400}
                                height={400}
                                className="w-full h-full object-cover rounded-lg"/>
                        </div>
                        <p className="font-bold text-center" >Plastic table</p>
                    </div>
                    {/* card1 */}
                    <div className="space-y-2">
                        <div className="h-[200px]">
                            <Image
                                src={"/images/blog/blog1.jpg"}
                                alt="prodyucts"
                                width={400}
                                height={400}
                                className="w-full h-full object-cover rounded-lg"/>
                        </div>
                        <p className="font-bold text-center" >Plastic table</p>
                    </div>
                    {/* card1 */}
                    <div className="space-y-2">
                        <div className="h-[200px]">
                            <Image
                                src={"/images/blog/blog1.jpg"}
                                alt="prodyucts"
                                width={400}
                                height={400}
                                className="w-full h-full object-cover rounded-lg"/>
                        </div>
                        <p className="font-bold text-center" >Plastic table</p>
                    </div>
                    {/* card1 */}
                    <div className="space-y-2">
                        <div className="h-[200px]">
                            <Image
                                src={"/images/blog/blog1.jpg"}
                                alt="prodyucts"
                                width={400}
                                height={400}
                                className="w-full h-full object-cover rounded-lg"/>
                        </div>
                        <p className="font-bold text-center"> Plastic table</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default IndividualProduct
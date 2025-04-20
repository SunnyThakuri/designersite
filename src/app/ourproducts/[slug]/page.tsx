"use client"
import Stonedesign from "@/components/ourproducts/stonedesigns"
import { useParams } from "next/navigation"

const StoneDesigns = () =>{
    const param = useParams()
    const par=param.slug
    console.log(param.slug)

    return(
        <div className="py-8 ">
            <Stonedesign/>
        </div>
    )
}

export default StoneDesigns
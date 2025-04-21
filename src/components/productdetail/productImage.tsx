import Image from "next/image"

const ProductImage = () =>{
    return(
        <div>
            <Image
                src={"/images/landing/design3.webp"}
                alt="img"
                width={800}
                height={800}
                className="w-full h-full object-cover"/>
        </div>
    )
}

export default ProductImage
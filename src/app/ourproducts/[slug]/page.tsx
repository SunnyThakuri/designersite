"use client";
import Stonedesign from "@/components/ourproducts/stonedesigns";
import Gallery from "@/components/ourproducts/gallery";
import Newdesign from "@/components/ourproducts/newdesign";
import { useParams } from "next/navigation";

const StoneDesigns = () => {
    const param = useParams();
    const par = param.slug;
    console.log(par);

    const renderComponent = () => {
        switch (par) {
        case "stonedesign":
            return <Stonedesign />;
        case "gallery":
            return <Gallery />;
        case "newdesign":
            return <Newdesign />;
        default:
            return <div>Component not found </div>;
        }
    };

    return <div className="py-8">{renderComponent()}</div>;
};

export default StoneDesigns;
import Image from "next/image";
import Button from "./button";
import { products } from "@/data/products";

export default function FeaturedProduct() {
    return (
        <section className="flex flex-col sm:flex-row justify-between items-center  max-w-6xl mx-auto  px-4 py-8 ">
            <Image src={products[0].image} alt={products[0].name} width={894} height={824} className="flex m-10 w-[400px]"/>
            <article className="max-w-2xl h-[100%] flex-1 max-w-lg">
                <h2 className="text-2xl font-bold mb-4">{products[0].name}</h2>
                <p className="text-textMuted mb-6">{products[0].description}</p>
                <div className="flex flex-row justify-between items-center mt-20 max-w-lg">
                    <p className="font-bold relative">
                        ${products[0].price}
                        <span className="carvedLine"></span>
                    </p>
                    <Button label="Bay Now" onClick={() => {console.log("Shop Now clicked")}}/>
                </div>
                
            </article>
        </section>
    )
}
import { products } from "@/data/products"
import Image from "next/image";
import Button from "./button";
export default function Hero() {
    console.log(products[0].image);
    return (
       <section className="flex flex-col sm:flex-row justify-between items-center  max-w-6xl mx-auto  px-4 py-8 ">
            <div className="max-w-lg m">
                <h1 className="text-4xl font-bold mb-4">Make garlic prep fast, clean and effortless</h1>
                <p className="text-textMuted mb-6">Small kitchen tools designed to save time and reduce mess - starting with our electric gerlic grinder</p>
                <Button label="Shop the Garlic Grander" onClick={() => {console.log("Shop Now clicked")}}/>
            </div> 
             <Image src={products[0].image} alt="Garlic Grinder" width={894} height={824} className="flex m-10 w-[400px]"/>
       </section>
    )
}
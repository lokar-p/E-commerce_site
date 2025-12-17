import Button from "@/components/button"
import Link from "next/link";
export default function CartPage() {
    return (
       <main className="min-h-[80vh] flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-6">Your Cart is Empty</h1>
        <p className="text-lg text-textMuted">Browse our shop to add life-hacking  kitchen tools to your cart!</p>
        <Link href="/shop" >
                <Button label="Go to Shop" onClick={() => {console.log("Go to Shop clicked")}}/>

         </Link>
       </main>
    )
}
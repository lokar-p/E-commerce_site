import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";
export default function GlobalNav() {

    
    return (
        <nav className="stick bg-white text-textMain font-sans py-2 px-4 border-b border-gray-300 mb-4 shadow-sm  mx-auto px-4">
            <ul className="flex flex-row justify-between items-center max-w-6xl mx-auto">
                <li className="font-bold text-3xl pointer-cursor">
                    <Link href="/">
                    Cook<span className="text-accent ">Ease</span>
                    </Link>
                </li>
                {/* Desktop navbar */}
                <li className="flex items-center justify-between w-[250px] hidden sm:flex">
                    <Link  className="hover:text-accent hover:text-lg transition-[1s]" href="/shop">Shop</Link>
                    <Link className="hover:text-accent hover:text-lg transition-[1s]" href="/about">About</Link>
                    <Link className="hover:text-accent hover:text-lg transition-[1s]" href="">Contact</Link>
                    <Link className="hover:text-accent hover:text-lg transition-[1s]" href="/cart"><Icon icon="iconoir:cart-alt" className="text-2xl text-accent hover:text-accent-hover hover:text-3xl transition-[1s]"/></Link>
            
                </li>
                {/* Mobile navbar */}
                <Icon icon="mdi:menu" className="text-3xl sm:hidden text-accent hover:text-4xl cursor-pointer hover:text-accent-hover"/>
            </ul>
        </nav>
    )
}
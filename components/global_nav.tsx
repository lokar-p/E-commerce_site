import { Icon } from "@iconify/react"
export default function GlobalNav() {
    return (
        <nav className="stick bg-white text-textMain font-sans py-2 px-4 border-b border-gray-300 mb-4 shadow-sm max-w-6xl mx-auto px-4">
            <ul className="flex flex-row justify-between">
                <li className="font-bold text-3xl">Cook<span className="text-accent ">Ease</span></li>
                <li className="flex items-center justify-between w-[250px] ">
                    <a  className="hover:text-accent transition-[1s]" href="">Shop</a>
                    <a className="hover:text-accent transition-[1s]" href="">About</a>
                    <a className="hover:text-accent transition-[1s]" href="">Contact</a>
                    <a className="hover:text-accent transition-[1s]" href=""><Icon icon="iconoir:cart-alt" className="text-2xl text-accent hover:accent-hover"/></a>
                </li>
            </ul>
        </nav>
    )
}
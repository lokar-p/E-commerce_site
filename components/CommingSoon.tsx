import {Icon} from "@iconify/react"
export default function ComingSoon() {
    return (
        <section className="flex flex-col   py-8 min-h-[60vh] text-white px-5 bg-[#3a414f] ">
            <h2 className="text-3xl font-bold mb-4 text-center">More Kitchen Magic Coming Soon</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8 max-w-6xl mx-20  ">
                <article className="relative bg-[#6C748C] flex flex-col p-4 h-[200px]  justify-center items-center rounded-lg ">
                    <span className="absolute top-4 right-4 bg-accent text-white px-2 py-1 rounded"> launching soon </span>
                    <Icon icon="mdi:timer-sand-empty" className="text-6xl text-accent mb-4"></Icon>
                    <p>Smart Oil Sprayer</p> 
                </article>
                <article className="relative bg-[#6C748C] flex flex-col p-4 h-[200px] justify-center items-center rounded-lg">
                    <span className="absolute top-4 right-4 bg-accent text-white px-2 py-1 rounded"> launching soon </span>
                    <Icon icon="mdi:timer-sand-empty" className="text-6xl text-accent mb-4"></Icon>
                    <p>Smart Oil Sprayer</p> 
                </article>
                <article className="relative bg-[#6C748C] flex flex-col p-4 h-[200px] justify-center items-center rounded-lg">
                    <span className="absolute top-4 right-4 bg-accent text-white px-2 py-1 rounded"> launching soon </span>
                    <Icon icon="mdi:timer-sand-empty" className="text-6xl text-accent mb-4"></Icon>
                    <p>Smart Oil Sprayer</p> 
            </article> 
            </div>
           
        </section>
    )
}
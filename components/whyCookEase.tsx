import { features } from "@/data/whyCookEaseData"
import InfoCard from "./infoCard"
import React from "react"
export default function WhyCookEase() {
    const featurs = features.map((feature) => {
        return (
            <li>
                <InfoCard title={feature.name} description={feature.description} icon={feature.icon} />
            </li>
        )
    })
   

    return (
        <section className="max-w-6xl mx-10  px-4 py-8 ">
            <h2 className="text-2xl font-bold mb-4 text-center">Why CookEase?</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {featurs}
            </ul>
        </section>
    )
}
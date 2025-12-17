import InfoCard from "./infoCard";

export default function OurGuarantee() {
    return (
        <section className="px-4 py-8 flex w-auto flex-col justify-center items-center">
            <h2 className="text-2xl font-bold mb-4 text-center">Our Guarantee</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  max-w-md sm:max-w-6xl ">
                <li>
                    <InfoCard
                        title="30-Day Money-Back"
                        description="Try it for 30 days, If you don't love it, return it - no questions asked." 
                        icon="ri:refund-2-line"
                        className="rounded-lg shadow-accentShadow shadow-sm hover:shadow-lg transition-shadow transition-300"
                    />
                </li>   
                <li>
                    <InfoCard
                        title="1-Year Replacement Warranty"
                        description="If it breaks, we'll replace it free of charge within the first year."
                        icon="ri:shield-check-line"
                        className="rounded-lg shadow-accentShadow shadow-sm hover:shadow-lg transition-shadow transition-300"
                    />
                </li>
                <li>
                    <InfoCard
                        title="Fast Shipping & Tracking"
                        description="Quick, trackable delivery on all orders-direct to your door."
                        icon="ri:truck-line"
                        className="rounded-lg shadow-accentShadow shadow-sm hover:shadow-lg transition-shadow transition-300"
                    />
                </li>   
            </ul>
        </section>
    )
}
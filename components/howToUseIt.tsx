import { Icon } from "@iconify/react";
import InfoCard from "./infoCard";

export default function HowToUseIt() {
    return (
        <section className="max-w-lg sm:max-w-6xl mx-auto px-4 py-8">  
            <h2 className="text-2xl font-bold mb-4 text-center">How to Use It</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <InfoCard
                    title="Step 1"
                    description=" add Garlic & ingredients "
                    icon="healthicons:vegetables-outline"
                    className="rounded-lg shadow-accentShadow shadow-sm hover:shadow-lg transition-shadow transition-300"
                />
                <InfoCard 
                    title="Step 2"
                    description="Close the lid & press the start button."
                    icon="mingcute:finger-press-line"
                    className="rounded-lg shadow-accentShadow shadow-sm hover:shadow-lg transition-shadow transition-300"
                />
                <InfoCard
                    title="Step 3"
                    description="Get your fresh garlic in seconds"
                    icon="emojione-monotone:green-salad"
                    className="rounded-lg shadow-accentShadow shadow-sm hover:shadow-lg transition-shadow transition-300"
                />
            </div>
        </section>
    );
}
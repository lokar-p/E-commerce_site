import { Icon } from "@iconify/react"
import InfoCard from "./infoCard"
export default function TrustStrip(){
    return(
        <div>
            <ul className="grid grid-cols-2 gap-10 sm:grid-cols-4 max-w-6xl mx-5 text-center py-8 px-4 gap-4 border-b border-borderLight mb-8">
                <li>
                    
                    <InfoCard title="" description="Fast prep" icon="ri:timer-flash-line" />
                </li>
                <li>
                    <InfoCard title="" description="Easy to clean" icon="iconoir:clean-water" />
                </li>
               
                <li>
                    <InfoCard title="" description="USB rechargeable" icon="fluent:battery-charge-7-20-regular" />
                </li>
                <li>
                    <InfoCard title="" description="30-day guarantee" icon="ri:refund-2-line" />
                </li>
            </ul>
        </div>
    )
}
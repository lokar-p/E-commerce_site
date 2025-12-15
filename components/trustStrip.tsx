import { Icon } from "@iconify/react"
export default function TrustStrip(){
    return(
        <div>
            <ul className="grid grid-cols-2 gap-10 sm:grid-cols-4 max-w-6xl mx-auto text-center py-8 px-4 gap-4 border-b border-borderLight mb-8">
                <li>
                    <Icon icon="ri:timer-flash-line" className="text-4xl mx-auto mb-4 text-accent"/>                
                    <p>Fast prep</p>
                </li>
                <li>
                    <Icon icon="iconoir:clean-water" className="text-4xl  mx-auto mb-4 text-accent"/>
                    <p>Easy to clean</p>
                </li>
                <li>
                    <Icon icon="fluent:battery-charge-7-20-regular" className="text-4xl mx-auto mb-4 text-accent"/>
                    <p>USB rechargeable</p>
                </li>
                <li>
                    <Icon icon="ri:refund-2-line" className="text-4xl mx-auto mb-4 text-accent"/>
                    <p>30-day guarantee</p>
                </li>
            </ul>
        </div>
    )
}
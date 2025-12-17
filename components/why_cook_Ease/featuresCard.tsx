
import { Icon } from "@iconify/react"

export default function WhyCookEaseCard(props : {name : string , description : string, icon : string}) {
    return(
        <section className="rounded-lg flex flex-row items-center justify-center lg:min-h-[300px] lg:flex-col lg:py-10 lg:justify-center px-10 py-5 shadow-sm min-h-[200px]">
            <Icon icon={props.icon} className="text-6xl text-accent mr-10 lg:m-5"/>
            <div className=" flex flex-col lg:items-center items-start ">
                <h3 className="text-lg font-semibold mb-2 text-wrap">{props.name}</h3>
                <p className="text-textMuted">{props.description}</p>
            </div>
        </section>
    )
}
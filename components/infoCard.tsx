import {Icon} from "@iconify/react"
export default function InfoCard({title , description, icon , className}: {title:string , description:string, icon:string , className?:string}) {
    return(
        <article className={`${className} flex flex-col items-center p-6 bg-white `}>

            <Icon icon={icon} className="text-4xl text-accent"></Icon>
            <h3 className="mt-4 text-xl font-semibold text-center">{title}</h3>
            <p className="mt-2 text-Muted text-center">{description}</p>
        </article>

    )
}
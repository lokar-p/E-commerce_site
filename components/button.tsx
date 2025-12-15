export default function Button(props: {label: string, onClick: () => void}) {
    return(
         <button className="bg-accent text-white px-4 py-2 rounded hover:bg-accent-hover transition cursor-pointer">{props.label}</button>

    )
}
import { ReactElement } from "react"
import { bebas_neue } from "@/app/utils/font"

export default function Footer(): ReactElement{
    return(
        <footer className="flex py-6 bg-gray-200">
            <p className={`text-white text-lg mx-auto ${bebas_neue.className}`}>Curiosidades de Tecnologia</p>
        </footer>
    )
}

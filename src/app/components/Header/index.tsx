import { ReactElement } from "react"
import { bebas_neue } from "@/app/utils/font"
import NavigationBar from "./NavigationBar"

export default function Header(): ReactElement{
    return(
        <header className="pt-5 pr-2.5 pb-2.5 pl-2.5 bg-gradient-to-b from-green-400 to-green-600">
            <div className="flex flex-col items-center justify-center">
                <h1 className={`text-3xl text-white text-center ${bebas_neue.className} sm:text-5xl`}>CURIOSIDADES DE TECNOLOGIA</h1>
                <p className="max-w-65 text-white text-center">Tudo aquilo que você sempre quis saber sobre o mundo Tech, em um único lugar.</p>
            </div>
            <NavigationBar/>
        </header>
    )
}

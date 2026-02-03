"use client"
import { ReactElement, useEffect } from "react"
import { bebas_neue } from "@/app/utils/font"
import NavigationBar from "./NavigationBar"
import scrollYListener from "@/app/utils/scrollYListener"


export default function Header(): ReactElement {

    useEffect(()=>{
        window.addEventListener('scroll', scrollYListener)
    })

    return (
        <header className="pt-5 pr-2.5 pb-2.5 pl-2.5 bg-gradient-to-b from-green-400 to-green-600 md:fixed md:w-full md:z-10">
            <div className="flex flex-col items-center justify-center md:flex">
                <h1 className={`text-3xl text-white text-center ${bebas_neue.className} sm:text-5xl`}>CURIOSIDADES DE TECNOLOGIA</h1>
                <p className="max-w-65 text-white text-center">Tudo aquilo que você sempre quis saber sobre o mundo Tech, em um único lugar.</p>
            </div>
            <NavigationBar />
        </header>
    )
}

import { ReactElement } from "react"
import { anta } from "@/app/utils/font"


interface TitleSectionProps{
    children: React.ReactNode
}

export default function TitleSection({children}: TitleSectionProps): ReactElement{
    return(
        <h3 className={`text-xl text-green-500 font-bold indent-2.5 ${anta.className} bg-gradient-to-r from-green-200 to-transparent`}>{children}</h3>
    )
}
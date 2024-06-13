import { anta } from "@/app/utils/font";
import { ReactElement } from "react";

interface SectionTitleProps{
    children: string
}

export default function SectionTitle({children}: SectionTitleProps):ReactElement{
    return(
        <h2 className={`text-xl font-bold text-green-600 ${anta.className}`}>{children}</h2>     
    )
}

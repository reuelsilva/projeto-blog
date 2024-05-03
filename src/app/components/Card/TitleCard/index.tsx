import { ReactElement } from "react";

interface TitleCardProps{
    title: string
}

export default function TitleCard({title}: TitleCardProps):ReactElement{
    return(
        <div className="flex items-center grow p-2">
            <h3 className="text-sm text-green-600 font-semibold mobile-lg:text-lg">{title}</h3>
        </div>
    )
}
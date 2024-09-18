import { ReactElement } from "react";

interface TitleCardProps{
    children: React.ReactNode
}

export default function TitleCard({children}: TitleCardProps):ReactElement{
    return(
        <div className="flex items-center grow p-2">
            <h3 className="text-sm text-green-600 font-semibold mobile-lg:text-lg">{children}</h3>
        </div>
    )
}

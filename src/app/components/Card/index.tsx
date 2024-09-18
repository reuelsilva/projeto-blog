import { ReactElement } from "react"
import Link from "next/link"
import TitleCard from "./TitleCard"

interface CardProps{
    image: string,
    title: string,
    url: string
}

export default function Card({title, image, url}: CardProps): ReactElement{
    return(
        <article className="h-20 max-w-lg border border-stone rounded-lg overflow-hidden sm:h-64 sm:w-64 sm:cursor-pointer mobile-lg:h-25">
            <Link className="flex h-full sm:flex-col" href={url} title={title}>
                <div className="w-20 overflow-hidden shrink-0 sm:h-40 sm:w-full mobile-m:w-30">
                    <div className="h-full" style={{background: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}></div>
                </div>
                <TitleCard>{title}</TitleCard>
            </Link>
        </article>
    )
}

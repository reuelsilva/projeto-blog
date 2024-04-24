import { ReactElement } from "react"
import Link from "next/link"

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
                <div className="flex items-center grow p-2">
                    <h3 className="text-sm text-green-600 font-semibold mobile-lg:text-lg">{title}</h3>
                </div>
            </Link>
        </article>
    )
}

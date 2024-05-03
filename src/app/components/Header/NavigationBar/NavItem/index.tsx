import { ReactElement} from "react"
import Link from "next/link"

interface NavItemProps{
    to: string,
    children: React.ReactNode
}

export default function NavItem({to, children}: NavItemProps): ReactElement{
    return(
        <li>
            <Link href={to} className="text-green-100 font-bold sm:p-2 sm:hover:text-green-600 sm:hover:bg-green-200 sm:hover:rounded">{children}</Link>
        </li>
    )
}

import { ReactElement } from "react";
import NavItem from "./NavItem";

export default function NavigationMenu():ReactElement{
    return(
            <ul id="menu" className="hidden flex-col items-center justify-center gap-2.5 sm:flex sm:flex-row sm:p-2.5">
                <NavItem to="/">Home</NavItem>
                <NavItem to="#">Notícias</NavItem>
                <NavItem to="#">Curiosidades</NavItem>
                <NavItem to="#">Fale Conosco</NavItem>
            </ul>
    )
}

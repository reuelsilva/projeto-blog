import { ReactElement } from "react";
import ToggleButton from "./ToggleButton";
import NavItem from "./NavItem";

export default function NavigationBar(): ReactElement{
    return(
        <nav className="flex flex-col items-center justify-center gap-2.5 mt-5 sm:items-start">
            <ToggleButton/>
            <ul id="menu" className="hidden flex-col items-center justify-center gap-2.5 sm:flex sm:flex-row sm:p-2.5">
                <NavItem to="/">Home</NavItem>
                <NavItem to="#">Notícias</NavItem>
                <NavItem to="#">Curiosidades</NavItem>
                <NavItem to="#">Fale Conosco</NavItem>
            </ul>
        </nav>
    )
}

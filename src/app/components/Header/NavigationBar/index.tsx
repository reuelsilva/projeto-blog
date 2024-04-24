import { ReactElement } from "react";
import ToggleButton from "./ToggleButton";
import ItemMenu from "./ItemMenu";

export default function NavigationBar(): ReactElement{
    return(
        <nav className="flex flex-col items-center justify-center gap-2.5 mt-5 sm:items-start">
            <ToggleButton/>
            <ul id="menu" className="hidden flex-col items-center justify-center gap-2.5 sm:flex sm:flex-row sm:p-2.5">
                <ItemMenu to="/">Home</ItemMenu>
                <ItemMenu to="#">Notícias</ItemMenu>
                <ItemMenu to="#">Curiosidades</ItemMenu>
                <ItemMenu to="#">Fale Conosco</ItemMenu>
            </ul>
        </nav>
    )
}

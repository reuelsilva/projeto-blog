import { ReactElement } from "react";
import ToggleButton from "./ToggleButton";
import NavigationMenu from "./NavigationMenu";

export default function NavigationBar(): ReactElement{
    return(
        <nav className="flex flex-col items-center justify-center gap-2.5 mt-5 sm:items-start">
            <ToggleButton/>
            <NavigationMenu/>
        </nav>
    )
}

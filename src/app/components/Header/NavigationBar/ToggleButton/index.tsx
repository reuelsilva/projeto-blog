"use client"

import { ReactElement } from 'react'
import MenuIcon from '@mui/icons-material/Menu'

const toggleMenu = () => {
    const ul = document.getElementById("menu")
    ul?.classList.toggle("hidden")
    ul?.classList.toggle("flex")
}

export default function ToggleButton(): ReactElement{
    return(
        <>
            <button onClick={toggleMenu} className='sm:hidden'>
                <MenuIcon className='text-white text-4xl'/>
            </button>
        </>
    )
}

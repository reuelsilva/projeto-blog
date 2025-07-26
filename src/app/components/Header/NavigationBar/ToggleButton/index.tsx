"use client"
import { ReactElement } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import toggleNavigationMenu from '@/app/utils/toggle-navigation-menu'

export default function ToggleButton(): ReactElement{
    return(
        <>
            <button data-testid="button-toggle" onClick={toggleNavigationMenu} className='sm:hidden'>
                <MenuIcon className='text-white text-4xl'/>
            </button>
        </>
    )
}

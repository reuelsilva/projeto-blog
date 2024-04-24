import { Bebas_Neue} from "next/font/google";

import localFont from "next/font/local"

export const bebas_neue = Bebas_Neue({
    weight: "400", 
    subsets:["latin"]
})

export const anta = localFont({
    src: '../assets/fonts/Anta-Regular.ttf',
    display: 'swap',
})

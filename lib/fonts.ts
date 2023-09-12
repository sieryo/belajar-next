import { Bebas_Neue, Poppins, Black_Ops_One } from "next/font/google";
import localFont from 'next/font/local'

export const titleFont = Bebas_Neue({
    weight: ["400"],
    subsets: ['latin']

})
export const titleFont2 = Black_Ops_One({
  weight: ["400"],
  subsets: ["latin"],
});

export const mainFont = Poppins({
    weight: ["200", '400'],
    subsets: ['latin']
})

export const myFont = localFont({
  src: "./Albertus Bold.ttf",
  display: "swap",
});
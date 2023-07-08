import { ReactNode } from "react"

import 'keen-slider/keen-slider.min.css'

interface ProductProps {
  name: string
  price: number
  children: ReactNode
}

export function Product({ children, name, price }: ProductProps) {
  return (
    <div className="keen-slider__slide bg-gradient-to-b from-[#1ea483] to-[#7465d4] rounded-lg  relative flex justify-center items-center overflow-hidden group">
      {children}

      <footer className="bg-[rgba(0,0,0,0.6)] flex justify-between items-center absolute bottom-1 left-1 right-1 p-8 rounded-md transform translate-y-full opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
        <strong className="text-lg text-gray-100">{name}</strong>
        <span className="text-xl text-green-300 font-bold">{price
        }</span>
      </footer>
    </div>
  )
}

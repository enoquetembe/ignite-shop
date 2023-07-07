"use client"
import { Product } from "@/components/Product"
import { useKeenSlider } from "keen-slider/react"
import Image from "next/image"

import 'keen-slider/keen-slider.min.css'

import shirt1 from '@/assets/tshirts/1.png'
import shirt2 from '@/assets/tshirts/2.png'
import shirt3 from '@/assets/tshirts/3.png'
import shirt4 from '@/assets/tshirts/1.png'


export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <main 
      ref={sliderRef}
      className='max-w-[calc(100vw-((100vw-1180px)/2))] w-full min-h-[656px] 
      ml-auto flex keen-slider'>
     
     <Product
          //key={} 
          name='Tshirt' 
          price={100}
        >
          <Image 
            className='object-cover'
            src={shirt1} 
            width={520} 
            height={480} 
            alt=""
          />
        </Product>
     <Product
          //key={} 
          name='Tshirt' 
          price={100}
        >
          <Image 
            className='object-cover'
            src={shirt2} 
            width={520} 
            height={480} 
            alt=""
          />
        </Product>
     <Product
          //key={} 
          name='Tshirt' 
          price={100}
        >
          <Image 
            className='object-cover'
            src={shirt3} 
            width={520} 
            height={480} 
            alt=""
          />
        </Product>
     <Product
          //key={} 
          name='Tshirt' 
          price={100}
        >
          <Image 
            className='object-cover'
            src={shirt1} 
            width={520} 
            height={480} 
            alt=""
          />
        </Product>
    </main>
  )
}


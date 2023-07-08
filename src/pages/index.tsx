"use client"
import Image from "next/image"
import { GetStaticProps } from "next"
import { useKeenSlider } from "keen-slider/react"
import 'keen-slider/keen-slider.min.css'
import Stripe from "stripe"
import { stripe } from "@/lib/stripe"

import { Product } from "@/components/Product"
interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
  }[]
}
  
export default function Home({ products }:  HomeProps) {
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
  
     {
      products.map(product => {
        return(
          <Product
            key={product.id} 
            name={product.name} 
            price={product.price}
           >
            <Image 
              className='object-cover'
              src={product.imageUrl} 
              width={520} 
              height={480} 
              alt=""
            />
          </Product>
        )
      })
     }
    </main>
  )
}

export const getStaticProps: GetStaticProps  = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: Intl.NumberFormat('en-us', {
        style: 'currency',
        currency: 'USD'
      }).format(Number(price.unit_amount) / 100),
    }
  })

  return {
    props: {
      products,
    },

    revalidate: 60 * 60 * 2 //2 hours
  }
}

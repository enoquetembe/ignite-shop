import { stripe } from "@/lib/stripe"
import axios from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import { useState } from "react"
import Stripe from "stripe"

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
  }
}


export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setISCreatingCheckoutSession] = useState(false)

  async function handleBuyProduct() {
    try {
      setISCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl

    } catch(error) {
      setISCreatingCheckoutSession(false)
      alert('Failed to redirect to checkout')
    }
  }
  
  return(
    <main 
      className='max-w-[1180px] mx-auto grid grid-cols-2 items-stretch gap-4
      pb-8'>
      <div 
        className='bg-gradient-to-b from-[#1ea483] to-[#7465d4] flex items-center
         w-full max-w-[576px] h-[calc(556px-0.5rem)] rounded-lg p-1'>
          <Image 
            className='object-cover'
            src={product.imageUrl} 
            width={520} 
            height={480} 
            alt=""
          />
      </div>

      <div className='flex flex-col'>
        <h1 className='text-2xl text-gray-300 font-bold'>
         {product.name}
        </h1>
        
        <span className='block mt-4 text-2xl text-green-300'>{product.price}</span>

        <p className='mt-10 text-md leading-6'>
         {product.description}
        </p>


        <button 
          className='bg-green-500 rounded-lg p-5 mt-auto font-bold text-md
          hover:bg-green-300 disabled:cursor-not-allowed disabled:opacity-70
          disabled:bg-green-300'
          disabled={isCreatingCheckoutSession}
          onClick={handleBuyProduct}
        >
          Buy Now
        </button>
      </div>
    </main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_OCGKOLZYTE4opp' } },
    ],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = String(params?.id)

  const product  = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price
  
  return {
    props: {
      product: {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: Intl.NumberFormat('en-us', {
        style: 'currency',
        currency: 'USD'
      }).format(Number(price.unit_amount) / 100),
      description: product.description,
      defaultPriceId: price.id
     }
    },

    revalidate: 60 * 60 * 2,
  } 
}

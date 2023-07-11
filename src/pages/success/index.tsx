import { stripe } from "@/lib/stripe"
import { GetServerSideProps } from "next"
import Link from "next/link"
import Stripe from "stripe"
import Image from "next/image"

interface SuccessProps {
  costumerName: string
  product: {
    imageUrl: string
  }
}

export default function Success({ costumerName, product }: SuccessProps) {
  return(
    <main className='h-[656px] flex flex-col justify-center items-center mx-auto'>
      <h1 className='text-2xl font-bold text-gray-100'>
        Successful purchase!
      </h1>

      <div 
        className='bg-gradient-to-b from-[#1ea483] to-[#7465d4]flex 
        justify-center items-center max-w-[130px] h-[145px] w-full rounded-lg 
        p-1 mt-16 object-cover'>
          <Image src={product.imageUrl} alt="" width={120} height={110}/>
        
      </div>

      <p className='max-w-[560px] text-center text-xl text-gray-300 mt-8 leading-6'>
        <strong>{costumerName}</strong>, your t-shirt is already on its way home.
      </p>

      <Link href='/' className='mt-20 block text-green-500 text-lg
       hover:text-green-300'>
        Back to home
      </Link>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id)
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const costumerName = session.customer_details?.name
  const product = session.line_items?.data[0]?.price?.product as Stripe.Product

  return {
    props: {
      costumerName,
      product: {
        name: product.name,
        imageUrl: product.images[0]
      }
    }
  }
}

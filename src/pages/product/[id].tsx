import { useRouter } from "next/router"
import Image from "next/image"

export default function Product() {
  const { query } = useRouter()
  return(
    <main 
      className='max-w-[1180px] mx-auto grid grid-cols-2 items-stretch gap-4
      pb-8'>
      <div 
        className='bg-gradient-to-b from-[#1ea483] to-[#7465d4] flex items-center
         w-full max-w-[576px] h-[calc(556px-0.5rem)] rounded-lg p-1'>

      </div>

      <div className='flex flex-col'>
        <h1 className='text-2xl text-gray-300 font-bold'>
          T-shirt 1
        </h1>
        
        <span className='block mt-4 text-2xl text-green-300'>100</span>

        <p className='mt-10 text-md leading-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus 
          velit quasi possimus quidem nulla dignissimos labore ratione iure, 
          excepturi, provident temporibus tempore ipsa culpa maiores. Nam, 
          doloribus optio. Facilis, labore?
        </p>


        <button 
          className='bg-green-500 rounded-lg p-5 mt-auto font-bold text-md
          hover:bg-green-300'>
          Buy Now
        </button>
      </div>
    </main>
  )
}

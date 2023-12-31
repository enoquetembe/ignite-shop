import { stripe } from "../../lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { priceId } = req.body

  if(req.method !== 'POST') {
    return res.status(405).json
  }

  if(!priceId) {
    return res.status(400).json({
      error: 'Product not found'
    })
  }

  const successUrl = 'http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}'
  const cancelUrl = 'http://localhost:3000'

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,

    mode:'payment',
    line_items: [{
      price: priceId,
      quantity: 1
    }]
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
import Stripe from "stripe"

const stripeSecretKey = 'sk_test_51Mz0wKDz9I4Mp2e8PLYLlAWCzxoFqvNCn3F0sOI0pJHSnNNgeSXJm6M5jpscYYTOhByzUPi9W8jigNQWeXcUCKaT0051dgujdS'

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2022-11-15',
  appInfo: {
    name: 'Ignite Shop',
  }
})


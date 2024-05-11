export type CartItem = {
  image: string | undefined
  slug: string
  quantity: number
  pocetKusu: number
  cena: number
  _id: string
  nazev: string
}

export type ShippingAddress = {
  fullName: string
  address: string
  city: string
  country: string
  postalCode: string
}

export type Cart = {
  cartItems: CartItem[]
  shippingAddress: ShippingAddress
  paymentMethod: string
  itemsPrice: number
  shippingPrice: number
  taxPrice: number
  totalPrice: number
}

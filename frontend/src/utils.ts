import { ApiError } from './types/ApiError'
import { CartItem } from './types/Cart'
import { Product } from './types/products'

export const getError = (error: ApiError) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message
}

export const convertProductToCartItem = (product: Product): CartItem => {
  const cartItem: CartItem = {
    _id: product._id,
    nazev: product.nazev,
    slug: product.slug,
    image: product.image,
    cena: product.cena,
    pocetKusu: product.pocetKusu,
    quantity: 1,
  }
  return cartItem
}

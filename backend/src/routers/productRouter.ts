import express from 'express'
import { ProductModel } from '../models/productModel'
export const productRouter = express.Router()

productRouter.get('/', async (req, res) => {
  const products = await ProductModel.find()
  res.json(products)
})

productRouter.get('/slug/:slug', async (req, res) => {
  const product = await ProductModel.findOne({ slug: req.params.slug })
  if (product) {
    res.json(product)
  } else {
    res.status(404).json({ message: 'Produkt nebyl nalezen' })
  }
})

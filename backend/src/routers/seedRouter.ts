import express, { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import { sampleProducts, ukazkovyUzivatel } from '../data'
import { ProductModel } from '../models/productModel'
import { UserModel } from '../models/userModel'

export const seedRouter = express.Router()

seedRouter.get(
  '/',
  asyncHandler(async (req: Request, res: Response) => {
    await ProductModel.deleteMany({})
    const createdProducts = await ProductModel.insertMany(sampleProducts)

    await UserModel.deleteMany({})
    const createdUsers = await UserModel.insertMany(ukazkovyUzivatel)

    res.json({ createdProducts, createdUsers })
  })
)

import { modelOptions, prop, getModelForClass } from '@typegoose/typegoose'

@modelOptions({ schemaOptions: { timestamps: true } })
export class Product {
  public _id?: string

  @prop({ required: true })
  public nazev!: string

  @prop({ required: true, unique: true })
  public slug!: string

  @prop({ required: true })
  public image!: string

  @prop({ required: true })
  public znacka!: string

  @prop({ required: true })
  public kategorie!: string

  @prop({ required: true })
  public popis!: string

  @prop({ required: true, default: 0 })
  public cena!: number

  @prop({ required: true, default: 0 })
  public pocetKusu!: number

  @prop({ required: true, default: 0 })
  public rating!: number

  @prop({ required: true, default: 0 })
  public numReviews!: number
}

export const ProductModel = getModelForClass(Product)

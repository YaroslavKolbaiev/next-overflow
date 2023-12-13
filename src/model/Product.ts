import { ProductCategory } from '@/types/enums';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      max: 100,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      min: 0,
    },
    category: {
      type: String,
      required: true,
      enum: Object.values(ProductCategory),
    },
  },
  { timestamps: true }
);

export const modelProduct =
  mongoose.models.Product || mongoose.model('Product', productSchema);

import { ProductCategory } from '@/types/enums';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema(
  {
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
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

export const modelProduct =
  mongoose.models.Product || mongoose.model('Product', productSchema);

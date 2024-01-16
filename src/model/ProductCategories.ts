import { ProductCategory } from '@/types/enums';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const productCategoriesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      enum: Object.values(ProductCategory),
    },
    color: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

export const modelCategories =
  mongoose.models.ProductsCategory ||
  mongoose.model('ProductsCategory', productCategoriesSchema);

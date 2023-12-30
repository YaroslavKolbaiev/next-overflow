import { TransactionStatus } from '@/types/enums';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const transactionsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: Object.values(TransactionStatus),
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
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

export const modelTransaction =
  mongoose.models.Transaction ||
  mongoose.model('Transaction', transactionsSchema);

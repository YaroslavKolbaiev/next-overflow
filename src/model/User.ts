import { User } from '@/types';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    country: {
      type: String,
    },
    phone: {
      type: String,
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

export const modelUser =
  mongoose.models.User || mongoose.model('User', userSchema);

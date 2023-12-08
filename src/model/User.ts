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
    adress: {
      type: String,
    },
    phone: {
      type: String,
    },
    avatarImage: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

export const modelUser =
  mongoose.models.User || mongoose.model('User', userSchema);

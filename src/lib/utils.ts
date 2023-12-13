import mongoose from 'mongoose';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const connectToMongo = async () => {
  if (!process.env.MONGODB_URI) {
    throw new Error('MONGO_URL must be defined');
  }

  let connection;

  try {
    if (connection) return;
    const db = await mongoose.connect(process.env.MONGODB_URI);
    connection = db.connection.readyState;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const converDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

export const ITEMS_PER_PAGE = 5;

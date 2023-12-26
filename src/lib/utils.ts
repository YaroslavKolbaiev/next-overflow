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
    throw new Error('Failed to connect to Database');
  }
};

export const converDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

export const ITEMS_PER_PAGE = 10;

function wait(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export async function getData(data: any): Promise<any> {
  return wait(3000).then(() => {
    return data;
  });
}

export const validateEmail = (value: string) => {
  if (!value) {
    return 'Email is required';
  }

  const emailPattern = /^[\w.+-]+@([\w-]+\.){1,3}[\w-]{2,}$/;

  if (!emailPattern.test(value)) {
    return 'Email is not valid';
  }
};

export const validatePassword = (value: string) => {
  if (!value) {
    return 'Password is required';
  }

  if (value.length < 6) {
    return 'At least 6 characters';
  }
};

export const currentYear = new Date().getFullYear().toString();

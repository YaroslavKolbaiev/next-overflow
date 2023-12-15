import { modelUser } from '@/model/User';
import { connectToMongo, validateEmail, validatePassword } from './utils';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';

export const addUser = async (formData: FormData) => {
  'use server';
  const { userName, email, password, phone, adress } =
    Object.fromEntries(formData);

  const errors = {
    email: validateEmail(email as string),
    password: validatePassword(password as string),
  };

  if (errors.email || errors.password) {
    throw new Error('Email or password is invalid');
  }

  const userNameCheck = await modelUser.findOne({ userName });

  if (userNameCheck) {
    throw new Error('Username already exists');
  }

  const emailCheck = await modelUser.findOne({ userName });

  if (emailCheck) {
    throw new Error('Email already taken');
  }

  const hashedPassword = await bcrypt.hash(password as string, 10);

  try {
    connectToMongo();
    const user = new modelUser({
      userName,
      email,
      password: hashedPassword,
      phone,
      adress,
    });
    await user.save();
  } catch (error) {
    throw new Error('Failed to add user');
  }

  revalidatePath('/users');
  redirect('/users');
};

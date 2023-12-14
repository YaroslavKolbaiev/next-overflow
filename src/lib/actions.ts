import { modelUser } from '@/model/User';
import { connectToMongo } from './utils';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const addUser = async (formData: FormData) => {
  'use server';
  const { userName, email, password, phone, adress } =
    Object.fromEntries(formData);

  try {
    connectToMongo();
    const user = new modelUser({
      userName,
      email,
      password,
      phone,
      adress,
    });
    await user.save();
    revalidatePath('/users');
    redirect('/users');
  } catch (error: any) {
    throw new Error(error.message);
  }
};

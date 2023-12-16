'use server';

import { modelUser } from '@/model/User';
import { connectToMongo, validateEmail, validatePassword } from './utils';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';
import { modelProduct } from '@/model/Product';

export const addUser = async (formData: FormData) => {
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

export const addProduct = async (formData: FormData) => {
  const { title, description, price, stock, category } =
    Object.fromEntries(formData);

  try {
    connectToMongo();
    const product = new modelProduct({
      title,
      description,
      price,
      stock,
      category,
    });
    await product.save();
  } catch (error) {
    throw new Error('Failed to add product');
  }

  revalidatePath('/products');
  redirect('/products');
};

export const deleteProduct = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);

  const product = await modelProduct.findById(id);

  if (!product) {
    throw new Error('Product not found');
  }
  try {
    connectToMongo();
    await modelProduct.findByIdAndDelete(id);
  } catch (error) {
    throw new Error('Failed to delete product');
  }

  revalidatePath('/products');
};

export const deleteUser = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);

  const user = await modelUser.findById(id);

  if (!user) {
    throw new Error('User not found');
  }
  try {
    connectToMongo();
    await modelUser.findByIdAndDelete(id);
  } catch (error) {
    throw new Error('Failed to delete product');
  }

  revalidatePath('/users');
};

export const editProduct = async (formData: FormData) => {
  const { id, title, description, price, stock, category } =
    Object.fromEntries(formData);

  const product = await modelProduct.findById(id);

  if (!product) {
    throw new Error('Product not found');
  }
  try {
    connectToMongo();
    await modelProduct.findByIdAndUpdate(id, {
      title,
      description,
      price,
      stock,
      category,
    });
  } catch (error) {
    throw new Error('Failed to edit product');
  }

  revalidatePath('/products');
};

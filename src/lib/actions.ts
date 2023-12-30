'use server';

import { modelUser } from '@/model/User';
import {
  connectToMongo,
  currentYear,
  validateEmail,
  validatePassword,
} from './utils';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';
import { modelProduct } from '@/model/Product';
import { Statistic } from '@/model/Statistic';

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

  await connectToMongo();

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
    const user = new modelUser({
      userName,
      email,
      password: hashedPassword,
      phone,
      adress,
    });
    await user.save();

    await Statistic.findOneAndUpdate(
      { year: currentYear },
      { $inc: { 'statistics.$[element].users': 1 } },
      { arrayFilters: [{ 'element.monthId': user.createdAt.getMonth() }] }
    );
  } catch (error) {
    throw new Error('Failed to add user');
  }

  revalidatePath('/users');
  revalidatePath('/');
  redirect('/users');
};

export const addProduct = async (formData: FormData) => {
  const { title, description, price, stock, category } =
    Object.fromEntries(formData);

  await connectToMongo();
  try {
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

  await connectToMongo();

  const product = await modelProduct.findById(id);

  if (!product) {
    throw new Error('Product not found');
  }
  try {
    await modelProduct.findByIdAndDelete(id);
  } catch (error) {
    throw new Error('Failed to delete product');
  }

  revalidatePath('/products');
};

export const deleteUser = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);

  await connectToMongo();

  const user = await modelUser.findById(id);

  if (!user) {
    throw new Error('User not found');
  }
  try {
    await modelUser.findByIdAndDelete(id);
  } catch (error) {
    throw new Error('Failed to delete product');
  }

  revalidatePath('/users');
};

export const editProduct = async (formData: FormData) => {
  const { id, title, description, price, stock, category } =
    Object.fromEntries(formData);

  await connectToMongo();

  const product = await modelProduct.findById(id);

  if (!product) {
    throw new Error('Product not found');
  }
  try {
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
  redirect('/products');
};

export const editUser = async (formData: FormData) => {
  const { id, userName, email, phone, adress } = Object.fromEntries(formData);

  await connectToMongo();

  const user = await modelUser.findById(id);

  if (!user) {
    throw new Error('User not found');
  }
  try {
    await modelUser.findByIdAndUpdate(id, {
      userName,
      email,
      phone,
      adress,
    });
  } catch (error) {
    throw new Error('Failed to edit user');
  }

  revalidatePath('/users');
  redirect('/users');
};

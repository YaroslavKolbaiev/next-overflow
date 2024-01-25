import {
  CategoriesStatistic,
  FetchProductsResponse,
  FetchTransactionsResponse,
  FetchUserResponse,
  Product,
  User,
  UserStatistic,
  UsersByCountry,
} from '@/types';
import { modelUser } from '../model/User';
import { ITEMS_PER_PAGE, connectToMongo } from './utils';
import { modelProduct } from '@/model/Product';
import { Statistic } from '@/model/Statistic';
import { modelTransaction } from '@/model/Transaction';
import { modelCategories } from '@/model/ProductCategories';
import { modelUserByCountry } from '@/model/UsersByCountry';

export const fetchUsers = async (
  search: string,
  page: number
): Promise<FetchUserResponse> => {
  // regex expression to search for users case insensitive
  const regex = new RegExp(search, 'i');

  await connectToMongo();
  try {
    const users = await modelUser
      .find({ userName: { $regex: regex } })
      .limit(ITEMS_PER_PAGE)
      .skip(ITEMS_PER_PAGE * (page - 1));

    return { usersReponse: users };
  } catch (error: any) {
    return { usersReponse: error.message };
  }
};

export const fetchProducts = async (
  search: string,
  page: number
): Promise<FetchProductsResponse> => {
  const regex = new RegExp(search, 'i');

  await connectToMongo();
  try {
    const products = await modelProduct
      .find({ title: { $regex: regex } })
      .limit(ITEMS_PER_PAGE)
      .skip(ITEMS_PER_PAGE * (page - 1));

    return { productsResponse: products };
  } catch (error: any) {
    return { productsResponse: error.message };
  }
};

export const fetchTransactions = async (
  page: number
): Promise<FetchTransactionsResponse> => {
  await connectToMongo();
  try {
    const transactions = await modelTransaction
      .find({})
      .limit(ITEMS_PER_PAGE)
      .skip(ITEMS_PER_PAGE * (page - 1))
      .sort({ createdAt: -1 });

    return { transactions };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const fetchCount = async (
  search: string,
  param: 'users' | 'products' | 'transactions'
): Promise<number> => {
  const regex = new RegExp(search, 'i');
  let count: number;

  await connectToMongo();

  try {
    if (param === 'transactions') {
      count = await modelTransaction.find({}).countDocuments();
      return count;
    }

    if (param === 'users') {
      count = await modelUser
        .find({ userName: { $regex: regex } })
        .countDocuments();
      return count;
    }

    count = await modelProduct
      .find({ title: { $regex: regex } })
      .countDocuments();
    return count;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const fetchProductById = async (id: string): Promise<Product> => {
  await connectToMongo();

  const product = await modelProduct.findById(id);

  if (!product) {
    throw new Error('Product not found');
  }

  return product;
};

export const fetchUserById = async (id: string): Promise<User> => {
  await connectToMongo();

  try {
    const user = await modelUser.findById(id);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  } catch (error) {
    throw new Error('Fail to fetch user');
  }
};

export const fetchStats = async (year: string): Promise<UserStatistic[]> => {
  await connectToMongo();

  try {
    const { statistics } = await Statistic.findOne({ year });
    return statistics;
  } catch (error) {
    throw new Error('Failed to fetch stats');
  }
};

export const fetchCategories = async (): Promise<CategoriesStatistic[]> => {
  await connectToMongo();

  try {
    const categories = await modelCategories.find({}, 'title color value');
    return categories;
  } catch (error) {
    throw new Error('Failed to fetch categories');
  }
};

export const fetchUsersByCountry = async (): Promise<UsersByCountry[]> => {
  await connectToMongo();

  try {
    const usersByCountry = await modelUserByCountry.find(
      {},
      { _id: 0, __v: 0 }
    );
    return usersByCountry;
  } catch (error) {
    throw new Error('Failed to fetch categories');
  }
};

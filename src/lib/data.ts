import { FetchProductsResponse, FetchUserResponse, Product } from '@/types';
import { modelUser } from '../model/User';
import { ITEMS_PER_PAGE, connectToMongo, getData } from './utils';
import { modelProduct } from '@/model/Product';

export const fetchUsers = async (
  search: string,
  page: number
): Promise<FetchUserResponse> => {
  // regex expression to search for users case insensitive
  const regex = new RegExp(search, 'i');
  try {
    connectToMongo();
    // await getData('Hello');
    const users = await modelUser
      .find({ userName: { $regex: regex } })
      .limit(ITEMS_PER_PAGE)
      .skip(ITEMS_PER_PAGE * (page - 1));

    return { users };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const fetchProducts = async (
  search: string,
  page: number
): Promise<FetchProductsResponse> => {
  // regex expression to search for users case insensitive
  const regex = new RegExp(search, 'i');
  try {
    connectToMongo();

    const products = await modelProduct
      .find({ title: { $regex: regex } })
      .limit(ITEMS_PER_PAGE)
      .skip(ITEMS_PER_PAGE * (page - 1));

    return { products };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const fetchCount = async (
  search: string,
  param: 'users' | 'products'
): Promise<number> => {
  // regex expression to search for users case insensitive
  const regex = new RegExp(search, 'i');
  let count: number;

  try {
    connectToMongo();
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
  try {
    connectToMongo();
    const product = await modelProduct.findById(id);

    if (!product) {
      throw new Error('Product not found');
    }

    return product;
  } catch (error) {
    throw new Error('Fail to fetch product');
  }
};

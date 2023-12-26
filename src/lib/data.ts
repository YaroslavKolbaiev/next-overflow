import {
  FetchProductsResponse,
  FetchUserResponse,
  Product,
  User,
  UserStatistic,
} from '@/types';
import { modelUser } from '../model/User';
import { ITEMS_PER_PAGE, connectToMongo, getData } from './utils';
import { modelProduct } from '@/model/Product';
import { Statistic } from '@/model/Statistic';
// import { usersStats } from './tempData';

export const fetchUsers = async (
  search: string,
  page: number
): Promise<FetchUserResponse> => {
  // regex expression to search for users case insensitive
  const regex = new RegExp(search, 'i');

  await connectToMongo();
  try {
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

  await connectToMongo();
  try {
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

  await connectToMongo();

  try {
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

  try {
    const product = await modelProduct.findById(id);

    if (!product) {
      throw new Error('Product not found');
    }

    return product;
  } catch (error) {
    throw new Error('Fail to fetch product');
  }
};

export const fetchProductsWithDates = async (): Promise<Product[]> => {
  await connectToMongo();

  try {
    const products = await modelProduct.find({
      createdAt: { $gte: '2023-01-01', $lt: '2023-12-31' },
    });
    // .countDocuments(); +++ check if you need count or all documents

    if (!products) {
      throw new Error('Product not found');
    }

    return products;
  } catch (error) {
    throw new Error('Fail to fetch product');
  }
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

// export const insertUsersStats = async () => {
//   'use server';
//   await connectToMongo();

//   try {
//     const year = await Statistic.findOne({ year: 2023 });

//     year.set({ statistics: usersStats });
//     await year.save();
//   } catch (error) {
//     console.log('failed to insert many users stats');
//   }
// };

export const fetchStats = async (year: string): Promise<UserStatistic[]> => {
  await connectToMongo();

  try {
    const { statistics } = await Statistic.findOne({ year });
    return statistics;
  } catch (error) {
    throw new Error('Failed to fetch stats');
  }
};

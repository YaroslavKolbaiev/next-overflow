import { FetchUserResponse } from '@/types';
import { modelUser } from '../model/User';
import { ITEMS_PER_PAGE, connectToMongo } from './utils';

export const fetchUsers = async (
  search: string,
  page: number
): Promise<FetchUserResponse> => {
  // regex expression to search for users case insensitive
  const regex = new RegExp(search, 'i');
  try {
    connectToMongo();

    const usersCount = await modelUser
      .find({ userName: { $regex: regex } })
      .countDocuments();

    const users = await modelUser
      .find({ userName: { $regex: regex } })
      .limit(ITEMS_PER_PAGE)
      .skip(ITEMS_PER_PAGE * (page - 1));

    return { users, usersCount };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

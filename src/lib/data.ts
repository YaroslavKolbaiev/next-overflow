import { FetchUserResponse } from '@/types';
import { modelUser } from '../model/User';
import { connectToMongo } from './utils';

export const fetchUsers = async (
  search: string,
  page: number
): Promise<FetchUserResponse> => {
  // regex expression to search for users case insensitive
  const regex = new RegExp(search, 'i');
  try {
    connectToMongo();
    const usersCount = await modelUser.countDocuments();
    const users = await modelUser
      .find({ userName: { $regex: regex } })
      .limit(2)
      .skip(2 * (page - 1));
    return { users, usersCount };
  } catch (error) {
    console.log(error);
    return { users: [], usersCount: 0 };
  }
};

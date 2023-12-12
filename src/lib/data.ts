import { User } from '@/types';
import { modelUser } from '../model/User';
import { connectToMongo } from './utils';

export const fetchUsers = async (search: string) => {
  // regex expression to search for users case insensitive
  const regex = new RegExp(search, 'i');
  try {
    connectToMongo();
    const users = await modelUser.find({ userName: { $regex: regex } });
    return users as User[];
  } catch (error) {
    console.log(error);
    return [];
  }
};

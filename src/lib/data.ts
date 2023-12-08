import { User } from '@/types';
import { modelUser } from '../model/User';
import { connectToMongo } from './utils';

export const fetchUsers = async () => {
  try {
    connectToMongo();
    const users = await modelUser.find();
    return users as User[];
  } catch (error) {
    console.log(error);
  }
};

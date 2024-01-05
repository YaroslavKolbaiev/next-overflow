import React from 'react';
import Card from './Card';
import { FaUsers } from 'react-icons/fa6';
import { fetchCount } from '@/lib/data';

const UsersCard = async () => {
  const totalUsers = await fetchCount('', 'users');

  return (
    <Card linkPath='/users'>
      <FaUsers className="text-dark500_light500" />
      <div className="text-dark100_light900 flex flex-col gap-2 text-sm">
        <h2>Total Users</h2>
        <p className="text-base font-bold">{totalUsers}</p>
      </div>
    </Card>
  );
};

export default UsersCard;

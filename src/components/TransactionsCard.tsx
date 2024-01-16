import React from 'react';
import { ImCoinDollar } from 'react-icons/im';
import Card from './Card';
import { fetchCount } from '@/lib/data';

const TransactionsCard = async () => {
  const transactionsCount = await fetchCount('', 'transactions');
  return (
    <Card linkPath='/transactions'>
      <ImCoinDollar className="text-dark500_light500" />
      <div className="text-dark100_light900 flex flex-col gap-2 text-sm">
        <h2>Total Transactions</h2>
        <p className="text-base font-bold">{transactionsCount}</p>
      </div>
    </Card>
  );
};

export default TransactionsCard;

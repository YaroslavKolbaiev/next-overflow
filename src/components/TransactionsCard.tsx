import React from 'react';
import { ImCoinDollar } from 'react-icons/im';
import Card from './Card';

const TransactionsCard = () => {
  const totalTransactions = 0;
  return (
    <Card>
      <ImCoinDollar className="text-dark500_light500" />
      <div className="text-dark100_light900 flex flex-col gap-2 text-sm">
        <h2>Total Transactions</h2>
        <p className="text-base font-bold">{totalTransactions}</p>
      </div>
    </Card>
  );
};

export default TransactionsCard;

import React, { Suspense } from 'react';
import TableHead from './TableHead';
import {
  TableHeadMailDescStatus,
  TableHeadNameTitle,
  TableHeadPriceDate,
  TableHeadStockPhoneAmount,
} from '@/types/enums';
import TableSkeleton from './TableSkeleton';
import TransactionsTable from './TransactionsTable';

const Transactions = () => {
  return (
    <div className="background-light900_dark200 mb-2 rounded-md p-4">
      <h1 className="text-dark500_light500 mb-3 font-semibold">
        Latest Transactions
      </h1>
      <table className="text-dark200_light800 w-full text-left text-sm rtl:text-right">
        <TableHead
          isTransactions={true}
          head={{
            name_title: TableHeadNameTitle.NAME,
            mail_description_status: TableHeadMailDescStatus.STATUS,
            createdAt_price: TableHeadPriceDate.DATE,
            phone_stock_amount: TableHeadStockPhoneAmount.AMOUNT,
          }}
        />
        <Suspense fallback={<TableSkeleton />}>
          <TransactionsTable page={'1'} />
        </Suspense>
      </table>
    </div>
  );
};

export default Transactions;

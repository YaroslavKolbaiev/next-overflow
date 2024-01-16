import Pagination from '@/components/Pagination';
import TableHead from '@/components/TableHead';
import TableSkeleton from '@/components/TableSkeleton';
import TransactionsTable from '@/components/TransactionsTable';
import { fetchCount } from '@/lib/data';
import { ITEMS_PER_PAGE } from '@/lib/utils';
import { SearchParamsProps } from '@/types';
import {
  TableHeadMailDescStatus,
  TableHeadNameTitle,
  TableHeadPriceDate,
  TableHeadStockPhoneAmount,
} from '@/types/enums';
import React, { Suspense } from 'react';

const Transactions = async ({ searchParams }: SearchParamsProps) => {
  const page = searchParams.page || '1';
  const transactionsCount = await fetchCount('', 'transactions');

  return (
    <div
      className="
        background-light900_dark200
        page-width
        h-full
        rounded-md
        p-4
        sm:w-full
      "
    >
      <div className="overflow-x-auto">
        <table
          className="
            text-dark200_light800
            w-full
            text-left
            text-xs
            rtl:text-right
            md:text-sm
          "
        >
          <TableHead
            isTransactions={true}
            head={{
              name_title: TableHeadNameTitle.NAME,
              mail_description_status: TableHeadMailDescStatus.STATUS,
              createdAt_price: TableHeadPriceDate.DATE,
              phone_stock_amount: TableHeadStockPhoneAmount.AMOUNT,
            }}
          />
          <Suspense key={page} fallback={<TableSkeleton />}>
            <TransactionsTable page={page} />
          </Suspense>
        </table>
        {transactionsCount > ITEMS_PER_PAGE && (
          <Pagination totalItems={transactionsCount} />
        )}
      </div>
    </div>
  );
};

export default Transactions;

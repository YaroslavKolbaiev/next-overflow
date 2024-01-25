import { fetchCount } from '@/lib/data';
import React, { Suspense } from 'react';
import Pagination from '@/components/Pagination';
import TableHead from '@/components/TableHead';
import AddNewBtn from '@/components/AddNewBtn';
import { ITEMS_PER_PAGE } from '@/lib/utils';
import { SearchParamsProps } from '@/types';
import UsersTabe from '@/components/UsersTable';
import TableSkeleton from '@/components/TableSkeleton';
import {
  TableHeadNameTitle,
  TableHeadMailDescStatus,
  TableHeadPriceDate,
  TableHeadStockPhoneAmount,
} from '@/types/enums';

const Users = async ({ searchParams }: SearchParamsProps) => {
  const search = searchParams.search || '';
  const page = searchParams.page || '1';
  const usersCount = await fetchCount(search, 'users');
  return (
    <div
      className="background-light900_dark200
        page-width
        h-full
        rounded-md
        p-4
        sm:w-full
      "
    >
      <div className="overflow-x-auto">
        <AddNewBtn href="/users/add" />
        <table
          className="text-dark200_light800
            w-full
            text-left
            text-xs
            rtl:text-right
            md:text-sm
          "
        >
          <TableHead
            head={{
              name_title: TableHeadNameTitle.NAME,
              mail_description_status: TableHeadMailDescStatus.EMAIL,
              createdAt_price: TableHeadPriceDate.DATE,
              phone_stock_amount: TableHeadStockPhoneAmount.PHONE,
            }}
          />
          {/* <Suspense key={page + search} fallback={<TableSkeleton />}> */}
          <UsersTabe search={search} page={+page} />
          {/* </Suspense> */}
        </table>
        {usersCount > ITEMS_PER_PAGE && <Pagination totalItems={usersCount} />}
      </div>
    </div>
  );
};

export default Users;

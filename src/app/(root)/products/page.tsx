import AddNewBtn from '@/components/AddNewBtn';
import Pagination from '@/components/Pagination';
import ProductsTable from '@/components/ProductsTable';
import TableHead from '@/components/TableHead';
import TableSkeleton from '@/components/TableSkeleton';
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

const Products = async ({ searchParams }: SearchParamsProps) => {
  const search = searchParams.search || '';
  const page = searchParams.page || '1';
  const productCount = await fetchCount(search, 'products');
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
        <AddNewBtn href="/products/add" />
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
              name_title: TableHeadNameTitle.TITLE,
              mail_description_status: TableHeadMailDescStatus.DESCRIPTION,
              createdAt_price: TableHeadPriceDate.PRICE,
              phone_stock_amount: TableHeadStockPhoneAmount.STOCK,
              category: 'Category',
            }}
          />
          <Suspense key={page + search} fallback={<TableSkeleton />}>
            <ProductsTable search={search} page={page} />
          </Suspense>
        </table>
        {productCount > ITEMS_PER_PAGE && (
          <Pagination totalItems={productCount} />
        )}
      </div>
    </div>
  );
};

export default Products;

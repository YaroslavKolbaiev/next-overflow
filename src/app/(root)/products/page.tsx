import AddNewBtn from '@/components/AddNewBtn';
import Pagination from '@/components/Pagination';
import ProductsTable from '@/components/ProductsTable';
import TableHead from '@/components/TableHead';
import TableSkeleton from '@/components/TableSkeleton';
import { fetchProducts } from '@/lib/data';
import { ITEMS_PER_PAGE } from '@/lib/utils';
import { SearchParamsProps } from '@/types';
import React, { Suspense } from 'react';

const Products = async ({ searchParams }: SearchParamsProps) => {
  const search = searchParams.search || '';
  const page = searchParams.page || '1';
  const { productCount } = await fetchProducts(search, +page);
  return (
    <div
      className="background-light900_dark200
        w-[calc(100vw-1rem)]
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
              name_title: 'Title',
              mail_description: 'Description',
              createdAt_price: 'Price',
              phone_stock: 'Stock',
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

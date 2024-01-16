import Chart from '@/components/Chart';
import ProductsByCategoryChart from '@/components/ProductsByCategoryChart';
import SelectYear from '@/components/SelectYear';
import { fetchCategories, fetchStats } from '@/lib/data';
import { SearchParamsProps } from '@/types';
import React from 'react';

const Statistic = async ({ searchParams }: SearchParamsProps) => {
  const year = searchParams.year || '2023';
  const data = await fetchStats(year);
  const categories = await fetchCategories();
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
      <div className="flex items-center justify-around gap-2">
        <SelectYear />
        <h2 className="text-dark200_light800 font-semibold">
          Users statistic for {year} year
        </h2>
      </div>
      <Chart data={data} />
      <ProductsByCategoryChart categories={categories} />
    </div>
  );
};

export default Statistic;

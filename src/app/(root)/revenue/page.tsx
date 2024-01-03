import Chart from '@/components/Chart';
import SelectYear from '@/components/SelectYear';
import { fetchStats } from '@/lib/data';
import { SearchParamsProps } from '@/types';
import React from 'react';

const Revenue = async ({ searchParams }: SearchParamsProps) => {
  const year = searchParams.year || '2023';
  const data = await fetchStats(year);
  return (
    <div
      className="background-light900_dark200
        h-full
        w-[calc(100vw-1rem)]
        rounded-md
        p-4
        sm:w-full
      "
    >
      <div className="flex items-center justify-around gap-2">
        <SelectYear />
        <h2 className="text-dark200_light800 font-semibold">
          Data for {year} year
        </h2>
      </div>
      <Chart data={data} />
      <div>Products by Category Chart</div>
    </div>
  );
};

export default Revenue;

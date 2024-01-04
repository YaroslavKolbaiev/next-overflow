'use client';

import { COLORS } from '@/constants/constants';
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const ProductsByCategoryChart = ({ categories }: any) => {
  return (
    <div className="mx-auto max-w-lg">
      <h1 className="text-dark200_light800 py-4 text-center font-bold">
        Products by category
      </h1>
      <div className="flex flex-col items-center sm:flex-row">
        <ul className="flex flex-col gap-3 px-5">
          {categories.map(({ id, color, title }: any) => (
            <li key={id} className="flex items-center gap-2">
              <div
                className="h-4 w-4 rounded-full"
                style={{ backgroundColor: color }}
              ></div>
              <span className="text-dark200_light800">{title}</span>
            </li>
          ))}
        </ul>
        <ResponsiveContainer height={240}>
          <PieChart height={600}>
            <Pie
              data={categories}
              cx="50%"
              cy="50%"
              labelLine={true}
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              dataKey="value"
            >
              {categories.map((_entry: any, index: number) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length].value}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProductsByCategoryChart;

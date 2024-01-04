'use client';

import { UserStatistic } from '@/types';
import React from 'react';
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Chart = ({ data }: { data: UserStatistic[] }) => {
  return (
    <div className="background-light900_dark200 mb-6 h-56 rounded-md xs:h-72 sm:h-96">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="users"
            fill="#8884D8"
            activeBar={<Rectangle fill="#FC8493" stroke="blue" />}
          />{' '}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;

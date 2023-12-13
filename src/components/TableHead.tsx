import { TableHeadProps } from '@/types';
import React from 'react';

export default function TableHead({ head }: TableHeadProps) {
  return (
    <thead className="uppercase">
      <tr>
        <th scope="col" className="px-2 py-3 md:px-3">
          {head.name_title}
        </th>
        <th scope="col" className="px-2 py-3 md:px-3">
          {head.mail_description}
        </th>
        {head.category && (
          <th scope="col" className="px-2 py-3 md:px-3">
            {head.category}
          </th>
        )}
        <th scope="col" className="px-2 py-3 md:px-3">
          {head.createdAt_price}
        </th>
        <th scope="col" className="px-2 py-3 md:px-3">
          {head.phone_stock}
        </th>
        <th scope="col" className="px-2 py-3 md:px-3" />
        <th scope="col" className="px-2 py-3 md:px-3" />
      </tr>
    </thead>
  );
}

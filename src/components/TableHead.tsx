import React from 'react';

interface TableHeadProps {
  head: {
    name_title: string;
    mail_description: string;
    adress_price: string;
    phone_stock: string;
  };
}

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
        <th scope="col" className="px-2 py-3 md:px-3">
          {head.adress_price}
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

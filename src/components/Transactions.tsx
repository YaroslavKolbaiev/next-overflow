'use client';

import React from 'react';
import Image from 'next/image';

const Transactions = () => {
  return (
    <div className="background-light900_dark200 mb-2 rounded-md p-4">
      <h1 className="text-dark500_light500 mb-3 font-semibold">
        Latest Transactions
      </h1>
      <table className="w-full text-left text-sm rtl:text-right">
        <thead className="text-dark200_light800 text-xs uppercase">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-dark200_light800 border-b">
            <th scope="row" className="flex gap-2 px-6 py-3">
              <Image
                src="/assets/images/site-logo.svg"
                alt="avatar"
                width={20}
                height={20}
              />
              John Doe
            </th>
            <td className="px-6 py-3">Pending</td>
            <td className="px-6 py-3">14.10.2023</td>
            <td className="px-6 py-3">$ 3000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;

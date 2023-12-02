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
            <th scope="col" className="px-2 py-3 md:px-4">
              Name
            </th>
            <th scope="col" className="px-2 py-3 md:px-4">
              Status
            </th>
            <th scope="col" className="px-2 py-3 md:px-4">
              Date
            </th>
            <th scope="col" className="px-2 py-3 md:px-4">
              Amount
            </th>
          </tr>
        </thead>
        <tbody className="text-xs sm:text-sm">
          <tr className="text-dark200_light800 border-b">
            <th scope="row" className="flex gap-2 px-2 py-3 md:px-4">
              <Image
                src="/assets/images/site-logo.svg"
                alt="avatar"
                width={20}
                height={20}
                className="hidden sm:block"
              />
              John Doe
            </th>
            <td className="px-2 py-3 md:px-4">Pending</td>
            <td className="px-2 py-3 md:px-4">14.10.2023</td>
            <td className="px-2 py-3 md:px-4">$ 3000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;

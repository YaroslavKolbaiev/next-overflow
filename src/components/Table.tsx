'use client';

import React from 'react';
import Pagination from './Pagination';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface TableProps {
  name_title: string;
  mail_description: string;
  createdAt_price: string;
  status_stock: string;
}

type Props = { head: TableProps; body: TableProps; addLink: string };

const Table = ({ head, body, addLink }: Props) => {
  const currentPath = usePathname();
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
        <Link
          href={addLink}
          className="primary-gradient
          btn-hover_active
          float-left
          rounded-md
          p-2
          text-sm
          text-light-800
          sm:float-right
        "
        >
          Add New
        </Link>
        <table className="text-dark200_light800 w-full text-left text-xs rtl:text-right md:text-sm">
          <thead className="uppercase">
            <tr>
              <th scope="col" className="px-2 py-3 md:px-3">
                {head.name_title}
              </th>
              <th scope="col" className="px-2 py-3 md:px-3">
                {head.mail_description}
              </th>
              <th scope="col" className="px-2 py-3 md:px-3">
                {head.createdAt_price}
              </th>
              <th scope="col" className="px-2 py-3 md:px-3">
                {head.status_stock}
              </th>
              <th scope="col" className="px-2 py-3 md:px-3" />
              <th scope="col" className="px-2 py-3 md:px-3" />
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <th scope="row" className="px-2 py-3 md:px-3">
                {body.name_title}
              </th>
              <td className="px-2 py-3 md:px-3">{body.mail_description}</td>
              <td className="px-2 py-3 md:px-3">{body.createdAt_price}</td>
              <td className="px-2 py-3 md:px-3">{body.status_stock}</td>
              <td className="px-2 py-3 text-center md:px-3">
                <Link
                  href={`${currentPath}/id-1`}
                  className="btn-hover_active
                    rounded-md
                    border
                    border-green-600
                    bg-green-500
                    px-2
                    py-1
                    text-light-800
                  "
                >
                  View
                </Link>
              </td>
              <td className="px-2 py-3 text-center md:px-3">
                <button
                  className="btn-hover_active
                    rounded-md
                    border
                    border-red-600
                    bg-red-500
                    px-2
                    py-1
                    text-light-800
                  "
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination />
      </div>
    </div>
  );
};

export default Table;

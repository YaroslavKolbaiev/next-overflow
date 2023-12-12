import Link from 'next/link';
import React from 'react';
import { FaRegEye } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

const TableButtons = ({ href }: { href: string }) => {
  return (
    <>
      <td className="px-2">
        <Link href={href} className="flex-center">
          <FaRegEye className="btn-hover_active h-5 w-5" />
        </Link>
      </td>
      <td className="px-2">
        <Link href="#" className="flex-center">
          <ImCross className="btn-hover_active h-4 w-4 text-red-700" />
        </Link>
      </td>
    </>
  );
};

export default TableButtons;

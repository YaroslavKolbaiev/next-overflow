'use client';

import { deleteProduct, deleteUser } from '@/lib/actions';
import { TableButtonsProps } from '@/types';
import Link from 'next/link';
import React from 'react';
import { FaRegEye } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { useFormStatus } from 'react-dom';
import { usePathname } from 'next/navigation';

const TableButtons = ({ href, id }: TableButtonsProps) => {
  const { pending } = useFormStatus();
  const path = usePathname();

  const deleteAction = (formData: FormData) => {
    if (path === '/products') {
      return deleteProduct(formData);
    }

    return deleteUser(formData);
  };
  return (
    <>
      <td className="px-2">
        <Link href={href} className="flex-center">
          <FaRegEye className="btn-hover_active h-5 w-5" />
        </Link>
      </td>
      <td className="px-2">
        <form action={deleteAction}>
          <input type="hidden" name="id" value={id} />
          <button aria-disabled={pending} className="flex-center">
            <ImCross className="btn-hover_active h-4 w-4 text-red-700" />
          </button>
        </form>
      </td>
    </>
  );
};

export default TableButtons;

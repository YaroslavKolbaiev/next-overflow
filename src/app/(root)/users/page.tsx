import { fetchUsers } from '@/lib/data';
import React from 'react';
import Pagination from '@/components/Pagination';
import TableHead from '@/components/TableHead';
import TableButtons from '@/components/TableButtons';
import AddNewBtn from '@/components/AddNewBtn';
import { ITEMS_PER_PAGE, converDate } from '@/lib/utils';
import { SearchParamsProps } from '@/types';

const Users = async ({ searchParams }: SearchParamsProps) => {
  const search = searchParams.search || '';
  const page = searchParams.page || '1';
  const { users, usersCount } = await fetchUsers(search, +page);
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
        <AddNewBtn href="/users/add" />
        <table
          className="text-dark200_light800
            w-full
            text-left
            text-xs
            rtl:text-right
            md:text-sm
          "
        >
          <TableHead
            head={{
              name_title: 'Name',
              mail_description: 'E-Mail',
              adress_price: 'Created At',
              phone_stock: 'Phone',
            }}
          />
          <tbody className="">
            {users.map(({ _id, userName, email, createdAt, phone }) => (
              <tr key={_id}>
                <th scope="row" className="px-2 py-3 md:px-3">
                  {userName}
                </th>
                <td className="px-2 py-3 md:px-3">{email}</td>
                <td className="px-2 py-3 md:px-3">{converDate(createdAt)}</td>
                <td className="px-2 py-3 md:px-3">{phone}</td>
                <TableButtons href={`/users/${_id}`} />
              </tr>
            ))}
          </tbody>
        </table>
        {usersCount > ITEMS_PER_PAGE && <Pagination totalItems={usersCount} />}
      </div>
    </div>
  );
};

export default Users;

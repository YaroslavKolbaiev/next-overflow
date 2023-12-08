import { fetchUsers } from '@/lib/data';
import React from 'react';
import Link from 'next/link';
import Pagination from '@/components/Pagination';

const Users = async () => {
  const users = await fetchUsers();

  if (!users) {
    console.log('No users found');
    return;
  }

  console.log('[USERS]:', users);
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
          href="/users/add"
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
                Name
              </th>
              <th scope="col" className="px-2 py-3 md:px-3">
                E-Mail
              </th>
              <th scope="col" className="px-2 py-3 md:px-3">
                Adress
              </th>
              <th scope="col" className="px-2 py-3 md:px-3">
                Status
              </th>
              <th scope="col" className="px-2 py-3 md:px-3" />
              <th scope="col" className="px-2 py-3 md:px-3" />
            </tr>
          </thead>
          <tbody className="">
            {users.map(({ _id, userName, email, adress, phone }) => (
              <tr key={_id}>
                <th scope="row" className="px-2 py-3 md:px-3">
                  {userName}
                </th>
                <td className="px-2 py-3 md:px-3">{email}</td>
                <td className="px-2 py-3 md:px-3">{adress}</td>
                <td className="px-2 py-3 md:px-3">{phone}</td>
                <td className="px-2 py-3 text-center md:px-3">
                  <Link
                    href={`/users/${_id}`}
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
            ))}
          </tbody>
        </table>
        <Pagination />
      </div>
    </div>
  );
};

export default Users;

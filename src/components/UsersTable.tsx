import { fetchUsers } from '@/lib/data';
import React from 'react';
import TableButtons from './TableButtons';
import { converDate } from '@/lib/utils';

const UsersTabe = async ({
  search,
  page,
}: {
  search: string;
  page: string;
}) => {
  const { users } = await fetchUsers(search, +page);
  return (
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
  );
};

export default UsersTabe;

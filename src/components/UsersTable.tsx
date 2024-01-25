'use client';

import React, { useContext } from 'react';
import TableButtons from './TableButtons';
import { converDate } from '@/lib/utils';
import { User } from '@/types';
import TableSkeleton from './TableSkeleton';
import { IsLoadingContext } from '@/context/IsLoadingProvider';
import { UseRequest } from '@/hooks/useRequest';

const UsersTabe = ({ search, page }: { search: string; page: number }) => {
  const [users, setUsers] = React.useState<User[]>([]);
  const { isLoading, setIsLoading } = useContext(IsLoadingContext);
  const { doRequest } = UseRequest();

  React.useEffect(() => {
    setIsLoading(true);
    (async () => {
      const data = await doRequest('/api/get-users', { search, page });
      setUsers(data);
      setIsLoading(false);
    })();
  }, [search, page]);
  return (
    <>
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <tbody className="">
          {users.map(({ id, userName, email, createdAt, phone }) => (
            <tr key={id}>
              <th scope="row" className="px-2 py-3 md:px-3">
                {userName}
              </th>
              <td className="px-2 py-3 md:px-3">{email}</td>
              <td className="px-2 py-3 md:px-3">{converDate(createdAt)}</td>
              <td className="px-2 py-3 md:px-3">{phone}</td>
              <TableButtons id={id} href={`/users/${id}`} />
            </tr>
          ))}
        </tbody>
      )}
    </>
  );
};

export default UsersTabe;

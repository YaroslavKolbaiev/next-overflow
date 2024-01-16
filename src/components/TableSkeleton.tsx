import React from 'react';
import Skeleton from './Skeleton';

const TableSkeleton = () => {
  const arr = ['1', '2', '3', '4', '5', '6', '7', '8'];
  return (
    <tbody className="">
      {arr.map((item, i) => (
        <tr key={item}>
          <th scope="row" className="px-2 py-3 md:px-3">
            <Skeleton />
          </th>
          <td className="px-2 py-3 md:px-3">
            <Skeleton />
          </td>
          <td className="px-2 py-3 md:px-3">
            <Skeleton />
          </td>
          <td className="px-2 py-3 md:px-3">
            <Skeleton />
          </td>
          <td className="px-2">
            <Skeleton />
          </td>
          <td className="px-2">
            <Skeleton />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableSkeleton;

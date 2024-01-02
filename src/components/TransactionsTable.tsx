import { fetchTransactions } from '@/lib/data';
import { converDate } from '@/lib/utils';
import React from 'react';

const TransactionsTable = async ({ page }: { page: string }) => {
  const { transactions } = await fetchTransactions(+page);
  return (
    <tbody className="">
      {transactions.map(({ id, name, createdAt, status, amount }) => (
        <tr key={id}>
          <th scope="row" className="px-2 py-3 md:px-3">
            {name}
          </th>
          <td className="px-2 py-3 md:px-3">{status}</td>
          <td className="px-2 py-3 md:px-3">{converDate(createdAt)}</td>
          <td className="flex px-2 py-3 md:px-3">{amount} $</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TransactionsTable;

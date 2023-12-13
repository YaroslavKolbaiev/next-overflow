import { fetchProducts } from '@/lib/data';
import React from 'react';
import TableButtons from './TableButtons';

const ProductsTable = async ({
  search,
  page,
}: {
  search: string;
  page: string;
}) => {
  const { products } = await fetchProducts(search, +page);
  return (
    <tbody className="">
      {products.map(({ _id, title, category, description, price, stock }) => (
        <tr key={_id}>
          <th scope="row" className="px-2 py-3 md:px-3">
            {title}
          </th>
          <td className="px-2 py-3 md:px-3">{description}</td>
          <td className="px-2 py-3 md:px-3">{category}</td>
          <td className="px-2 py-3 md:px-3">{price}</td>
          <td className="px-2 py-3 md:px-3">{stock}</td>
          <TableButtons href={`/products/${_id}`} />
        </tr>
      ))}
    </tbody>
  );
};

export default ProductsTable;

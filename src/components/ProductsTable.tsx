'use client';

import { fetchProducts } from '@/lib/data';
import React, { useContext } from 'react';
import TableButtons from './TableButtons';
import { UseRequest } from '@/hooks/useRequest';
import { IsLoadingContext } from '@/context/IsLoadingProvider';
import TableSkeleton from './TableSkeleton';

const ProductsTable = ({ search, page }: { search: string; page: number }) => {
  const [products, setProducts] = React.useState([]);
  const { isLoading, setIsLoading } = useContext(IsLoadingContext);
  const { doRequest } = UseRequest();

  React.useEffect(() => {
    setIsLoading(true);
    (async () => {
      const data = await doRequest('/api/get-products', { search, page });
      setProducts(data);
      setIsLoading(false);
    })();
  }, [search, page]);

  return (
    <>
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <tbody className="">
          {products.map(
            ({ id, title, category, description, price, stock }) => (
              <tr key={id}>
                <th scope="row" className="px-2 py-3 md:px-3">
                  {title}
                </th>
                <td className="px-2 py-3 md:px-3">{description}</td>
                <td className="px-2 py-3 md:px-3">{category}</td>
                <td className="px-2 py-3 md:px-3">{price}</td>
                <td className="px-2 py-3 md:px-3">{stock}</td>
                <TableButtons id={id} href={`/products/${id}`} />
              </tr>
            )
          )}
        </tbody>
      )}
    </>
  );
};

export default ProductsTable;

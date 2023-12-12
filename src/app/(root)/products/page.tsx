import AddNewBtn from '@/components/AddNewBtn';
import Pagination from '@/components/Pagination';
import TableButtons from '@/components/TableButtons';
import TableHead from '@/components/TableHead';
import React from 'react';

const page = () => {
  const products = [
    {
      _id: 'Id-1',
      title: 'title1',
      desc: 'desc1',
      price: 'price1',
      stock: 'stock1',
    },
  ];
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
        <AddNewBtn href="/products/add" />
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
              name_title: 'Title',
              mail_description: 'Description',
              adress_price: 'Price',
              phone_stock: 'Stock',
            }}
          />
          <tbody className="">
            {products.map(({ _id, title, desc, price, stock }) => (
              <tr key={_id}>
                <th scope="row" className="px-2 py-3 md:px-3">
                  {title}
                </th>
                <td className="px-2 py-3 md:px-3">{desc}</td>
                <td className="px-2 py-3 md:px-3">{price}</td>
                <td className="px-2 py-3 md:px-3">{stock}</td>
                <TableButtons href={`/users/${_id}`} />
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination />
      </div>
    </div>
  );
};

export default page;

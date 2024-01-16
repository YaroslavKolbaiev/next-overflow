import { fetchCount } from '@/lib/data';
import React from 'react';
import Card from './Card';
import { MdPhoneIphone } from 'react-icons/md';

const ProductCard = async () => {
  const totalProducts = await fetchCount('', 'products');
  return (
    <Card linkPath='/products'>
      <MdPhoneIphone className="text-dark500_light500" />
      <div className="text-dark100_light900 flex flex-col gap-2 text-sm">
        <h2>Total Products</h2>
        <p className="text-base font-bold">{totalProducts}</p>
      </div>
    </Card>
  );
};

export default ProductCard;

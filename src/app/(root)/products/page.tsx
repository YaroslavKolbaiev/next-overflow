import Table from '@/components/Table';
import React from 'react';

const page = () => {
  return (
    <Table
      head={{
        name_title: 'Title',
        mail_description: 'Description',
        createdAt_price: 'Price',
        status_stock: 'Stock',
      }}
      body={{
        name_title: 'iPhone',
        mail_description: 'iPhone 12 Pro Max 256GB',
        createdAt_price: '$700',
        status_stock: '21',
      }}
      addLink="/products/add"
    />
  );
};

export default page;

import Table from '@/components/Table';
import React from 'react';

const Users = () => {
  return (
    <Table
      head={{
        name_title: 'Name',
        mail_description: 'E-Mail',
        createdAt_price: 'Created at',
        status_stock: 'Status',
      }}
      body={{
        name_title: 'John Doe',
        mail_description: 'JohnDou@gmail.com',
        createdAt_price: '14.10.2023',
        status_stock: 'online',
      }}
      addLink="/users/add"
    />
  );
};

export default Users;

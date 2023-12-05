import React from 'react';

type Props = {
  params: {
    userId: string;
  };
};

const UserPage = ({ params: { userId } }: Props) => {
  return <div>User ID: {userId}</div>;
};

export default UserPage;

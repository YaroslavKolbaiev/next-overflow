import React from 'react';
import { FaUsers } from 'react-icons/fa6';

const Card = () => {
  return (
    <div
      className="background-light900_dark200
        hover:background-light700_dark400
        flex
        grow
        cursor-pointer
        gap-4
        rounded-md
        p-4
        transition
      "
    >
      <FaUsers className="text-dark500_light500" />
      <div className="text-dark100_light900 flex flex-col gap-2 text-sm">
        <h2>Total Users</h2>
        <p>10.928</p>
        <p className="text-xs">12% more than prev week</p>
      </div>
    </div>
  );
};

export default Card;

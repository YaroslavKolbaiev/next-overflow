import React, { ReactNode } from 'react';

const Card = ({ children }: { children: ReactNode }) => {
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
      {children}
    </div>
  );
};

export default Card;

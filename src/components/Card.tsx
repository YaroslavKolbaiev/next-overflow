import { CardProps } from '@/types';
import Link from 'next/link';
import React from 'react';

const Card = ({ children, linkPath }: CardProps) => {
  return (
    <Link
      href={linkPath}
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
    </Link>
  );
};

export default Card;

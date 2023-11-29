'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  title: string;
  path: string;
  icon: React.ReactNode;
}

const MenuLink = ({ item }: { item: Props }) => {
  const currentPath = usePathname();
  return (
    <Link
      href={item.path}
      className={`text-dark200_light800
        flex
        items-center
        gap-2
        rounded-md
        p-5
        ${currentPath === item.path && 'background-light800_dark400'}
        hover:background-light800_dark400
      `}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;

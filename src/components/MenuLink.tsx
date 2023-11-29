import React from 'react';
import Link from 'next/link';

interface Props {
  title: string;
  path: string;
  icon: React.ReactNode;
}

const MenuLink = ({ item }: { item: Props }) => {
  return (
    <Link href={item.path}>
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;

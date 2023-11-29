import { menuItems } from '@/constants/constants';
import React from 'react';
import MenuLink from './MenuLink';

const SideBar = () => {
  return (
    <div
      className="background-light900_dark200
        max-w-xs
        grow
        pt-2
        text-black
      "
    >
      <ul>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;

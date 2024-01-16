import { menuItems } from '@/constants/constants';
import React from 'react';
import MenuLink from './MenuLink';

const SideBar = () => {
  return (
    <div
      className="background-light900_dark200
        hidden
        max-w-[230px]
        grow
        p-4
        text-black
        md:block
        2xl:rounded-md
      "
    >
      <ul>
        {menuItems.map((cat) => (
          <li className="flex flex-col gap-1" key={cat.title}>
            <span className="text-dark500_light500 font-semibold">
              {cat.title}
            </span>
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

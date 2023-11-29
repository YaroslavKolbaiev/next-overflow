'use client';
import React from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
// import SideBar from './SideBar';
import { menuItems } from '@/constants/constants';
// import MenuLink from './MenuLink';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobileNav = () => {
  const currentPath = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="text-primary-500 md:hidden">Open</button>
      </SheetTrigger>
      <SheetContent side="left">
        <ul>
          {menuItems.map((cat) => (
            <li className="flex flex-col gap-1" key={cat.title}>
              <span className="text-dark500_light500 font-semibold">
                {cat.title}
              </span>
              {cat.list.map((item) => (
                <SheetClose key={item.title} asChild>
                  <Link
                    href={item.path}
                    className={`text-dark200_light800
                      flex
                      items-center
                      gap-2
                      rounded-md
                      p-5
                      ${
                        currentPath === item.path &&
                        'background-light800_dark400'
                      }
                      hover:background-light800_dark400
                    `}
                  >
                    {item.icon}
                    {item.title}
                  </Link>
                </SheetClose>
              ))}
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

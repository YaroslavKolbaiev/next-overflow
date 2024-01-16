'use client';
import React from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { menuItems } from '@/constants/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu } from 'react-icons/fi';

const MobileNav = () => {
  const currentPath = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <FiMenu
          className="text-dark200_light800
            h-5
            w-5
            transition
            hover:cursor-pointer
            hover:opacity-50
            md:hidden
          "
        />
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
                        'bg-light-700 dark:bg-dark-400'
                      }
                      hover:background-light700_dark400
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

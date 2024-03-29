'use client';

import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { usePathname } from 'next/navigation';
import { UseClickOutside } from '@/hooks/useClickOutside';
import { UseSearchHandler } from '@/hooks/useSearchHandler';

const SearchBar = () => {
  const [showSearchBar, setShowSearchBar] = React.useState(false);
  const path = usePathname().split('/')[1];

  const { handleSearch } = UseSearchHandler('search');

  const searchRef = UseClickOutside(() => {
    setShowSearchBar(false);
  });
  return (
    <>
      <div className="relative hidden md:block">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3">
          <button>
            <BiSearch className="h-5 w-5 dark:text-light-500" />
          </button>
        </div>
        <input
          onChange={handleSearch}
          type="search"
          id="default-search"
          className="border-gray300_dark600
            background-light800_dark400
            text-dark100_light900
            placeholder
            w-full
            rounded-lg
            border
            p-2
            ps-10
            text-sm
            focus:outline-none
            focus:ring-2
            focus:ring-primary-500
          "
          placeholder={path === '' ? 'Search' : `Search in ${path}`}
        />
      </div>
      <div ref={searchRef} className="relative flex">
        <button type="button" onClick={() => setShowSearchBar((prev) => !prev)}>
          <BiSearch className="h-5 w-5 dark:text-light-500 md:hidden" />
        </button>
        {showSearchBar && (
          <input
            onChange={handleSearch}
            type="search"
            id="default-search"
            className="border-gray300_dark600
            background-light800_dark400
            text-dark100_light900
            placeholder
            absolute
            left-1/2
            top-8
            max-w-[180px]
            translate-x-[-50%]
            rounded-lg
            border
            p-2
            ps-10
            text-sm
            focus:outline-none
            focus:ring-2
            focus:ring-primary-500
            md:hidden
          "
            placeholder={path === '' ? 'Search' : `Search in ${path}`}
          />
        )}
      </div>
    </>
  );
};

export default SearchBar;

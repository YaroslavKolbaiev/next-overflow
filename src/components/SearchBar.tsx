import React from 'react';
import { BiSearch } from 'react-icons/bi';

const SearchBar = () => {
  return (
    <>
      <div className="relative hidden md:block">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3">
          <button>
            <BiSearch className="h-5 w-5 dark:text-light-500" />
          </button>
        </div>
        <input
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
          placeholder="Search"
        />
      </div>
      <button>
        <BiSearch className="h-5 w-5 dark:text-light-500 md:hidden" />
      </button>
    </>
  );
};

export default SearchBar;

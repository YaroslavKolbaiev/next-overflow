'use client';

import { ThemeContext } from '@/context/ThemeProvider';
import { UseClickOutside } from '@/hooks/useClickOutside';
import React, { useState } from 'react';
import Image from 'next/image';
import { themes } from '@/constants/constants';

const Theme = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState(false);

  const dropDownHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const menuRef = UseClickOutside(() => {
    setIsOpen(false);
  });

  return (
    <div className="relative z-20 flex" ref={menuRef}>
      <button
        onClick={dropDownHandler}
        type="button"
        className="focus:background-light800_dark400 
          rounded-md 
          p-2
          focus:ring-1
          focus:ring-primary-500
        "
      >
        {theme === 'light' ? (
          <Image
            className="active-theme transition
              duration-300
              hover:rotate-180
            "
            width={20}
            height={20}
            src="/assets/icons/sun.svg"
            alt="sun"
          />
        ) : (
          <Image
            className="active-theme transition
              duration-300
              hover:rotate-180
            "
            width={20}
            height={20}
            src="/assets/icons/moon.svg"
            alt="moon"
          />
        )}
      </button>
      {isOpen && (
        <div
          className="absolute right-[1rem] top-[2.5rem] min-w-[120px]"
          id="navbar-dropdown"
        >
          <ul
            className="background-light900_dark200
              flex
              flex-col
              gap-5
              rounded-lg
              border
              border-gray-200
              py-4
              dark:border-gray-700
            "
          >
            {themes.map((themeOption) => {
              const isActiveTheme = themeOption.value === theme;
              return (
                <li key={themeOption.value}>
                  <button
                    className="flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                    "
                    disabled={isActiveTheme}
                    onClick={() => {
                      dropDownHandler();
                      setTheme(themeOption.value);

                      if (themeOption.value !== 'system') {
                        localStorage.theme = themeOption.value;
                      } else {
                        localStorage.removeItem('theme');
                      }
                    }}
                    type="button"
                  >
                    <Image
                      className={`${isActiveTheme && 'active-theme'}`}
                      width={16}
                      height={16}
                      src={themeOption.icon}
                      alt={themeOption.label}
                    />
                    <p
                      className={`body-semibold text-light-500 ${
                        isActiveTheme
                          ? 'text-primary-500'
                          : 'text-dark100_light900'
                      }`}
                    >
                      {themeOption.label}
                    </p>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Theme;

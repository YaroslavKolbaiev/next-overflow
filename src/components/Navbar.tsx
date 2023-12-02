import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { UserButton, SignedIn, ClerkLoading } from '@clerk/nextjs';
import Theme from './Theme';
import MobileNav from './MobileNav';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <nav
      className="
        background-light900_dark200
        w-full
        shadow-light-300
        dark:shadow-none
      "
    >
      <div className="flex-between container gap-5 p-6 sm:px-12">
        <MobileNav />
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/images/site-logo.svg"
            alt="logo image"
            width={23}
            height={23}
          />
          <p
            className="h2-bold
            font-spaceGrotesk
            text-base
            text-dark-100
            dark:text-light-900
            max-xs:hidden
            sm:text-3xl
          "
          >
            Next <span className="text-primary-500">Overflow</span>
          </p>
        </Link>
        <SearchBar />
        <div className="flex-between gap-5">
          <Theme />
          <ClerkLoading>
            <div className="h-10 w-10 rounded-full bg-slate-400">S_I</div>
          </ClerkLoading>
          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: { avatarBox: 'h-10 w-10' },
                variables: { colorPrimary: '#ff7000' },
              }}
            />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

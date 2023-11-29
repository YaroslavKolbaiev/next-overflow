import Navbar from '@/components/Navbar';
import SideBar from '@/components/SideBar';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative">
      <Navbar />
      <div className="background-light800_dark300 flex pt-2">
        <SideBar />
        <section
          className="flex
            min-h-screen
            flex-1
            flex-col
            px-2
          "
        >
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
      </div>
    </main>
  );
}

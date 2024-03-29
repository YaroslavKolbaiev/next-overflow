import Navbar from '@/components/Navbar';
import SideBar from '@/components/SideBar';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex pt-2 2xl:container">
        <SideBar />
        <section
          className="flex
            flex-1
            flex-col
            px-2
          "
        >
          {children}
        </section>
      </div>
    </main>
  );
}

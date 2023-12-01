import Navbar from '@/components/Navbar';
import RightBar from '@/components/RightBar';
import SideBar from '@/components/SideBar';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // min-h-screen
    <main className="relative">
      <Navbar />
      <div className="background-light800_dark300 flex pt-2">
        <SideBar />
        <section
          className="flex
            flex-1
            flex-col
            px-2
          "
        >
          <div className="mx-auto w-full max-w-7xl">{children}</div>
        </section>
        <RightBar />
      </div>
    </main>
  );
}

import { insertData } from '@/lib/data';
import React from 'react';

const Help = () => {
  return (
    <div className="flex h-full justify-center">
      <form action={insertData}>
        <button type="submit" className="grow-0 bg-slate-500 p-2 text-white">
          INSERT DATA
        </button>
      </form>
    </div>
  );
};

export default Help;

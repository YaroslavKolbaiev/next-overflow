import React from 'react';
import Link from 'next/link';

const AddNewBtn = ({ href }: { href: string }) => {
  return (
    <Link
      href={href}
      className="primary-gradient
        btn-hover_active
        float-left
        rounded-md
        p-2
        text-sm
        text-light-800
        sm:float-right
      "
    >
      Add New
    </Link>
  );
};

export default AddNewBtn;

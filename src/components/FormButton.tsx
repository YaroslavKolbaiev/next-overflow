'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';

const FormButton = ({ title }: { title: string }) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="primary-gradient
        btn-hover_active
        rounded-md
        px-3
        py-2
        text-sm
        text-light-800
        max-md:w-full
      "
    >
      {pending ? 'Loading...' : title}
    </button>
  );
};

export default FormButton;

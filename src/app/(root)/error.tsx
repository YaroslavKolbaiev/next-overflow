'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div
      id="alert-additional-content-5"
      className="background-light900_dark200 rounded-md p-4"
      role="alert"
    >
      <div className="flex items-center">
        <span className="sr-only">Info</span>
        <h3 className="text-dark500_light500 text-lg font-medium">
          Something went wrong
        </h3>
      </div>
      <div className="text-dark300_light700 mb-4 mt-2 text-sm">
        {error.message}
      </div>
      <div className="flex">
        <button
          onClick={() => reset()}
          type="button"
          className="
            border-gray300_dark600
            me-2
            inline-flex
            items-center
            rounded-lg
            bg-slate-800
            px-3
            py-1.5
            text-center
            text-xs
            font-medium
            text-white
            transition
            hover:bg-slate-600
            active:scale-95
            dark:bg-slate-700
            dark:text-light-700
            dark:hover:bg-slate-600
          "
        >
          Reset
        </button>
      </div>
    </div>
  );
}

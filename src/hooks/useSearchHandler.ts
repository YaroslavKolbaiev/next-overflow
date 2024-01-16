import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React from 'react';
import { useDebouncedCallback } from 'use-debounce';

export const UseSearchHandler = (target: string) => {
  const { replace } = useRouter();
  const path = usePathname().split('/')[1];
  const searchParams = useSearchParams();

  const handleSearch = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams);

      if (e.target.value) {
        params.set('page', '1');
        params.set(target, e.target.value);
      } else {
        params.delete(target);
      }

      replace(`${path}?${params}`);
    },
    500
  );

  const handleYearChange = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(target, value);
    } else {
      params.delete(target);
    }

    replace(`${path}?${params}`);
  };

  return { handleSearch, handleYearChange };
};

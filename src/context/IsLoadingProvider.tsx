'use client';

import React, { Dispatch, SetStateAction, useMemo, useState } from 'react';

type PropsIsLoading = {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

export const IsLoadingContext = React.createContext<PropsIsLoading>({
  isLoading: false,
  setIsLoading: () => {},
});

type Props = {
  children: React.ReactNode;
};

export function IsLoadingProvider({ children }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <IsLoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </IsLoadingContext.Provider>
  );
}

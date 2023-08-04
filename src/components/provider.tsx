'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { TopContainer } from './features/top/container/TopContainer';
import { ReactNode } from 'react';

export const Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <QueryClientProvider client={new QueryClient()}>
        {children}
      </QueryClientProvider>
    </>
  );
};

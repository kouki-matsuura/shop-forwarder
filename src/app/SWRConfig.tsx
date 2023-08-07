'use client';

import * as React from 'react';
import { SWRConfig } from 'swr';

export function SWRConfigProvider({ children, ...props }: any) {
  return (
    <SWRConfig
      {...props}
      value={{
        revalidateOnFocus: false,
      }}
    >
      {children}
    </SWRConfig>
  );
}

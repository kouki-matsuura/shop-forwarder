'use client';

import React from 'react';
import { Button } from '@mui/material';

const MuiButton = ({ children }: { children: React.ReactNode }) => (
  <Button color="inherit">{children}</Button>
);

export default MuiButton;

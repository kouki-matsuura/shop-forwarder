'use client';

import React from 'react';
import { Toolbar } from '@mui/material';

const MuiToolbar = ({ children }: { children: React.ReactNode }) => (
  <Toolbar>{children}</Toolbar>
);

export default MuiToolbar;

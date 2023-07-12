'use client';

import React from 'react';
import { AppBar } from '@mui/material';

const MuiAppBar = ({ children }: { children: React.ReactNode }) => (
  <AppBar position="static">{children}</AppBar>
);

export default MuiAppBar;

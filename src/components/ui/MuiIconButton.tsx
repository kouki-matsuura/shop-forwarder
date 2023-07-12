'use client';

import React from 'react';
import { IconButton } from '@mui/material';

const MuiIconButton = ({ children }: { children: React.ReactNode }) => (
  <IconButton
    size="large"
    edge="start"
    color="inherit"
    aria-label="menu"
    sx={{ mr: 2 }}
  >
    {children}
  </IconButton>
);

export default MuiIconButton;

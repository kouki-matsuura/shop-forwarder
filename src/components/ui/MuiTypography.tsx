'use client';

import React from 'react';
import { Typography } from '@mui/material';

const MuiTypography = ({ children }: { children: React.ReactNode }) => (
  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    {children}
  </Typography>
);

export default MuiTypography;

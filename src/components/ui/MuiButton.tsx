'use client';

import React, { FC } from 'react';
import { Button } from '@mui/material';

type MuiButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};
const MuiButton: FC<MuiButtonProps> = ({ onClick, children }) => (
  <Button color="inherit" onClick={onClick}>
    {children}
  </Button>
);

export default MuiButton;

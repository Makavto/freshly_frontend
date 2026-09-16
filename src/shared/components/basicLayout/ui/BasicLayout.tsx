import { Box } from '@mui/material';
import React, { memo } from 'react';

const BasicLayout = memo(({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        px: 2,
        py: 4,
        boxSizing: 'border-box',
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'safe center',
      }}
    >
      <Box sx={{ width: '100%' }}>{children}</Box>
    </Box>
  );
});

export default BasicLayout;

import { Box } from '@mui/material';
import React, { memo } from 'react';

const BasicLayout = memo(({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        my: 4,
        mx: 2,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '100%' }}>{children}</Box>
    </Box>
  );
});

export default BasicLayout;

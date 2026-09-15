import { Box } from '@mui/material';
import React, { memo } from 'react';

const BasicLayout = memo(({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        py: 4,
        px: 2,
      }}
    >
      {children}
    </Box>
  );
});

export default BasicLayout;

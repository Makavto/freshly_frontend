import { Box } from '@mui/material';
import React, { memo } from 'react';

const AppLayout = memo(({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        px: 2,
        py: 4,
      }}
    >
      {children}
    </Box>
  );
});

export default AppLayout;

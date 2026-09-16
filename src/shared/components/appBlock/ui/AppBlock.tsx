import { Box, useTheme } from '@mui/material';
import React, { memo } from 'react';

const AppBlock = memo(({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderRadius: 2,
        padding: 2,
        boxShadow: theme.shadows[2],
      }}
    >
      {children}
    </Box>
  );
});

export default AppBlock;

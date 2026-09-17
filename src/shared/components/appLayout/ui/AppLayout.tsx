import { Box } from '@mui/material';
import { BOTTOM_MENU_HEIGHT } from '@shared/utils';
import React, { memo } from 'react';

const AppLayout = memo(({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        px: 2,
        pt: 4,
        mb: `${BOTTOM_MENU_HEIGHT+32}px`,
      }}
    >
      {children}
    </Box>
  );
});

export default AppLayout;

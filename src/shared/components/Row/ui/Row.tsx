import { memo } from 'react';
import { Box, type SxProps } from '@mui/material';

const Row = memo(function Row({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: SxProps;
}) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', ...sx }}>{children}</Box>
  );
});

export default Row;

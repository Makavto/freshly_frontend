import Box from '@mui/material/Box';
import { observer } from 'mobx-react-lite';
import type { SxProps } from '@mui/material/styles';

const Col = observer(function Col({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: SxProps;
}) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', ...sx }}>
      {children}
    </Box>
  );
});

export default Col;

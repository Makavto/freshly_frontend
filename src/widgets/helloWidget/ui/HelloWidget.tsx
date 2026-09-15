import { memo } from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Col } from '@shared/components/Col';

export const HelloWidget = memo(
  ({ slots }: { slots: { description: string } }) => {
    const theme = useTheme();
    return (
      <Col
        sx={{
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Col sx={{ alignItems: 'center' }}>
          <img
            src="/logo.png"
            alt="logo"
            style={{ width: theme.spacing(25), aspectRatio: 1 }}
          />
          <Typography variant="h1">Freshly</Typography>
        </Col>
        <Typography color="secondary" sx={{ textAlign: 'center' }}>
          {slots.description}
        </Typography>
      </Col>
    );
  },
);

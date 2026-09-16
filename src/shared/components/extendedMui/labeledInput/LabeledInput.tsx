import { Typography } from '@mui/material';
import { Col } from '@shared/components/Col';
import React, { memo } from 'react';

const LabeledInput = memo(
  ({
    label,
    control,
  }: {
    label: React.ReactNode;
    control: React.ReactNode;
  }) => {
    return (
      <Col sx={{ gap: 1 }}>
        <Typography sx={{ pl: 1 }} color='secondary'>
          {label}
        </Typography>
        {control}
      </Col>
    );
  },
);

export default LabeledInput;

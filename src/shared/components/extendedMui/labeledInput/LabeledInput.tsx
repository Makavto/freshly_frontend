import { type SxProps, Typography, type TypographyVariant } from '@mui/material';
import { Col } from '@shared/components/Col';
import React, { memo } from 'react';

const LabeledInput = memo(
  ({
    label,
    control,
    rootSx,
    labelVariant = 'body1',
  }: {
    label: React.ReactNode;
    labelVariant?: TypographyVariant;
    control: React.ReactNode;
    rootSx?: SxProps;
  }) => {
    return (
      <Col sx={{ gap: 1, ...rootSx }}>
        <Typography sx={{ pl: 1 }} color='secondary' variant={labelVariant}>
          {label}
        </Typography>
        {control}
      </Col>
    );
  },
);

export default LabeledInput;

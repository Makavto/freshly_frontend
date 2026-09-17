import { CreateProduct } from '@features/createProduct';
import { IconButton, Typography } from '@mui/material';
import { Col } from '@shared/components/Col';
import { Row } from '@shared/components/Row';
import { observer } from 'mobx-react-lite';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router';
import { useCallback } from 'react';

const CreateProductPage = observer(function CreateProductPage() {
  const navigate = useNavigate();

  const handleGoBack = useCallback(() => {
    navigate('/products');
  }, [navigate]);

  return (
    <Col sx={{ gap: 2 }}>
      <Row sx={{ gap: 2, alignItems: 'baseline', ml: -1 }}>
        <IconButton color='inherit' onClick={handleGoBack}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography variant="h1">Новый продукт</Typography>
      </Row>
      <CreateProduct />
    </Col>
  );
});

export default CreateProductPage;

import type { IProductForm } from '@entities/product';
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import { CreateProductVM } from '../model/createProductVM';
import { useState } from 'react';
import ProductForm from '@entities/product/ui/form/ProductForm';
import { Col } from '@shared/components/Col';
import { Typography } from '@mui/material';

const CreateProduct = observer(function CreateProduct() {
  const [vm] = useState(new CreateProductVM());

  const form = useForm<IProductForm>({
    defaultValues: vm.initialFormValues,
  });
  return (
    <Col sx={{ gap: 2 }}>
      <Typography variant="h1">Новый продукт</Typography>
      <ProductForm form={form} onSubmit={vm.createProduct} />
    </Col>
  );
});

export default CreateProduct;

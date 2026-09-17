import type { IProductForm } from '@entities/product';
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import { CreateProductVM } from '../model/createProductVM';
import { useCallback, useEffect, useState } from 'react';
import ProductForm from '@entities/product/ui/form/ProductForm';
import { Col } from '@shared/components/Col';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
import AddTaskIcon from '@mui/icons-material/AddTask';

const CreateProduct = observer(function CreateProduct() {
  const [vm] = useState(new CreateProductVM());

  const form = useForm<IProductForm>({
    defaultValues: vm.initialFormValues,
  });

  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      form.reset();
    };
  }, [form]);

  const handleCreateProduct = useCallback(() => {
    form.handleSubmit((data) => {
      vm.createProduct(data);
    })();
  }, [vm, form]);

  const handleCancel = useCallback(() => {
    navigate('/products');
  }, [navigate]);

  return (
    <Col sx={{ gap: 2 }}>
      <ProductForm form={form} />

      <Col sx={{ gap: 2, justifyContent: 'space-between' }}>
        <Button
          type="submit"
          size="large"
          variant="contained"
          sx={{ width: '100%' }}
          onClick={handleCreateProduct}
          startIcon={<AddTaskIcon />}
        >
          Добавить продукт
        </Button>
        <Button
          type="button"
          size="large"
          variant="outlined"
          color="error"
          sx={{ width: '100%' }}
          onClick={handleCancel}
        >
          Отменить
        </Button>
      </Col>
    </Col>
  );
});

export default CreateProduct;

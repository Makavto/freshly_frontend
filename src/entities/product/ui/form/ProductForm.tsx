import { TextField } from '@mui/material';
import { observer } from 'mobx-react-lite';
import type { UseFormReturn } from 'react-hook-form';
import type { IProductForm } from './types';
import LabeledInput from '@shared/components/extendedMui/labeledInput/LabeledInput';
import { Col } from '@shared/components/Col';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const ProductForm = observer(function ProductForm({
  form,
  onSubmit,
}: {
  form: UseFormReturn<IProductForm>;
  onSubmit: (data: IProductForm) => void;
}) {
  const { register, handleSubmit } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Col sx={{ gap: 2 }}>
        <LabeledInput
          label="Название продукта"
          control={<TextField {...register('name')} placeholder="Молоко" />}
        />

        <LabeledInput
          label="Срок годности"
          control={
            <DatePicker
              // {...register('expiresAt')}
            />
          }
        />
      </Col>
    </form>
  );
});

export default ProductForm;

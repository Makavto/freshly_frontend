import { CreateProduct } from '@features/createProduct';
import { Box } from '@mui/material';
import { observer } from 'mobx-react-lite';

const CreateProductPage = observer(function CreateProductPage() {
  return (
    <Box>
      <CreateProduct />
    </Box>
  );
});

export default CreateProductPage;

import { Button } from '@mui/material';
import { observer } from 'mobx-react-lite';
import AddIcon from '@mui/icons-material/Add';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { BOTTOM_MENU_HEIGHT, RoutesEnum } from '@shared/utils';

const CreateWidget = observer(function CreateWidget() {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(RoutesEnum.CREATE);
  }, []);

  return (
    <Button
      variant="contained"
      size="large"
      sx={{
        p: 2,
        position: 'fixed',
        bottom: BOTTOM_MENU_HEIGHT + 20,
        right: 20,
        borderRadius: 100,
        fontSize: 24,
        boxShadow: 4,
      }}
      onClick={handleClick}
    >
      <AddIcon sx={{ fontSize: 32 }} />
    </Button>
  );
});

export default CreateWidget;

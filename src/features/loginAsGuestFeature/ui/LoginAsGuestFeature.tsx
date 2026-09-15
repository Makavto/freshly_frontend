import { useNavigate } from 'react-router';
import { loginAsGuestVM } from '../model/loginAsGuestVM.ts';
import { observer } from 'mobx-react-lite';
import { Col } from '@shared/components/Col/index.ts';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  DialogActions,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const LoginAsGuestFeature = observer(function LoginAsGuestFeature() {
  const navigate = useNavigate();

  const handleLoginAsGuest = async () => {
    loginAsGuestVM.submitLoginAsGuest().then(() => {
      loginAsGuestVM.isOpenDialog = false;
      navigate('/');
    });
  };

  const handleOpenDialog = () => {
    loginAsGuestVM.isOpenDialog = true;
  };

  const handleCloseDialog = () => {
    loginAsGuestVM.isOpenDialog = false;
  };

  return (
    <Col>
      <Button
        type="button"
        variant="outlined"
        onClick={handleOpenDialog}
        disabled={loginAsGuestVM.isPending}
      >
        Войти как гость
      </Button>
      <Dialog open={loginAsGuestVM.isOpenDialog} onClose={handleCloseDialog}>
        <DialogTitle
          sx={{
            justifyContent: 'space-between',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Войти как гость
          <IconButton onClick={handleCloseDialog}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography color="secondary">
            Нет желания регистрироваться? Войдите как гость и отслеживайте до
            пяти продуктов. Вы сможете зарегистрироваться позже, сохранив
            добавленные продукты.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleLoginAsGuest}
            disabled={loginAsGuestVM.isPending}
          >
            Войти как гость
          </Button>
        </DialogActions>
      </Dialog>
    </Col>
  );
});

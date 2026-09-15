import { HelloWidget } from '@widgets/helloWidget';
import { Col } from '@shared/components/Col';
import { RegisterForm } from '@features/registerFeature';
import { Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

export function RegisterPage() {
  const navigate = useNavigate();
  return (
    <Col sx={{ gap: 2, maxWidth: 600, margin: '0 auto' }}>
      <HelloWidget
        slots={{
          description: 'Создайте аккаунт за пару секунд',
        }}
      />
      <RegisterForm />
      <Typography sx={{ textAlign: 'center' }}>
        Уже есть аккаунт? <Link onClick={() => navigate('/login')}>Войти</Link>
      </Typography>
    </Col>
  );
}

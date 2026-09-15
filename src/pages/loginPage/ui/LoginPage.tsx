import { LoginForm } from '@features/loginFeature';
import { LoginAsGuestFeature } from '@features/loginAsGuestFeature';
import { Col } from '@shared/components/Col';
import { HelloWidget } from '@widgets/helloWidget';
import { Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

export function LoginPage() {
  const navigate = useNavigate();
  return (
    <Col sx={{ gap: 2, maxWidth: 600, margin: '0 auto' }}>
      <HelloWidget
        slots={{
          description: 'Войдите в ваш аккаунт и отслеживайте свежесть продуктов',
        }}
      />
      <LoginForm />
      <LoginAsGuestFeature />
      <Typography sx={{ textAlign: 'center' }}>
        Нет аккаунта?{' '}
        <Link onClick={() => navigate('/register')}>Зарегистрироваться</Link>
      </Typography>
    </Col>
  );
}

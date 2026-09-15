import { HelloWidget } from '@widgets/helloWidget/index.ts';
import { Col } from '@shared/components/Col';
import { RegisterFeature } from '@features/registerFeature/index.ts';

export function RegisterPage() {
  return (
    <Col sx={{ gap: 2, py: 4 }}>
      <HelloWidget
        slots={{
          description: 'Создайте аккаунт за пару секунд',
        }}
      />
      <RegisterFeature />
    </Col>
  );
}

import { RoutesNamesRuEnum } from '@shared/utils';
import { CreateWidget } from '@widgets/createWidget';

export function ProductsPage() {
  return (
    <main>
      <h1>{RoutesNamesRuEnum.PRODUCTS}</h1>
      <CreateWidget />
    </main>
  );
}

import dayjs from 'dayjs';
import type { ShelfLifeState, ShelfLifeChange, IProductForm } from '../ui/form/types';
import type { ICreateProductDto } from '../model/dtos';

const startOfDay = (date: Date) => dayjs(date).startOf('day');

export function isValidShelfLifeDays(days: number | null): days is number {
  return days != null && Number.isInteger(days) && days >= 1;
}

// Срок в сутках включает дату производства.
function getExpiresAt(producedAt: Date, days: number): Date {
  return startOfDay(producedAt)
    .add(days - 1, 'day')
    .toDate();
}

function getProducedAt(expiresAt: Date, days: number): Date {
  return startOfDay(expiresAt)
    .subtract(days - 1, 'day')
    .toDate();
}

function getShelfLifeDays(producedAt: Date, expiresAt: Date): number | null {
  const days = startOfDay(expiresAt).diff(startOfDay(producedAt), 'day') + 1;
  return days >= 1 ? days : null;
}

export function applyShelfLifeChange(
  change: ShelfLifeChange,
  state: ShelfLifeState,
): ShelfLifeState {
  const next: ShelfLifeState = {
    ...state,
    [change.field]: change.value,
  };

  const producedAt = next.producedAt;
  const expiresAt = next.expiresAt;
  const shelfLifeDays = next.shelfLifeDays;
  const hasDays = isValidShelfLifeDays(shelfLifeDays);

  switch (change.field) {
    case 'producedAt': {
      if (producedAt && hasDays) {
        next.expiresAt = getExpiresAt(producedAt, shelfLifeDays);
      } else if (producedAt && expiresAt) {
        const days = getShelfLifeDays(producedAt, expiresAt);
        if (days != null) next.shelfLifeDays = days;
      }
      return next;
    }
    case 'shelfLifeDays': {
      if (hasDays && producedAt) {
        next.expiresAt = getExpiresAt(producedAt, shelfLifeDays);
      } else if (hasDays && expiresAt) {
        next.producedAt = getProducedAt(expiresAt, shelfLifeDays);
      }
      return next;
    }
    case 'expiresAt': {
      if (expiresAt && producedAt) {
        const days = getShelfLifeDays(producedAt, expiresAt);
        if (days != null) next.shelfLifeDays = days;
      } else if (expiresAt && hasDays) {
        next.producedAt = getProducedAt(expiresAt, shelfLifeDays);
      }
      return next;
    }
  }
}

export function formToDto(form: IProductForm): ICreateProductDto {
  return {
    name: form.name,
    // Поля в форме валидируются required, поэтому ! здесь безопасно
    producedAt: form.producedAt!,
    expiresAt: form.expiresAt!,
    unit: form.unit,
  };
}

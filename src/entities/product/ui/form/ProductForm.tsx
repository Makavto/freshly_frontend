import { Button, MenuItem, Select, TextField } from '@mui/material';
import { Controller, useWatch, type UseFormReturn } from 'react-hook-form';
import type { IProductForm, ShelfLifeChange } from './types';
import LabeledInput from '@shared/components/extendedMui/labeledInput/LabeledInput';
import { Col } from '@shared/components/Col';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { Row } from '@shared/components/Row';
import { memo, useCallback } from 'react';
import {
  applyShelfLifeChange,
  isValidShelfLifeDays,
} from '../../lib/shelfLife';
import {
  ProductUnitsEnum,
  ProductUnitsRusEnum,
} from '../../model/types';

const PRODUCED_AT_PRESETS = [
  { label: 'Сегодня', daysAgo: 0 },
  { label: 'Вчера', daysAgo: 1 },
  { label: '2 дня назад', daysAgo: 2 },
] as const;

const SHELF_LIFE_PRESETS = [
  { label: '3 дня', days: 3 },
  { label: '5 дней', days: 5 },
  { label: '7 дней', days: 7 },
  { label: '14 дней', days: 14 },
] as const;

const toDateValue = (value: dayjs.Dayjs | null) =>
  value?.isValid() ? value.startOf('day').toDate() : null;

// Не оборачивать в memo, иначе не будет ререндера при ошибках формы и helperText не будет отображаться
const ProductForm = memo(function ProductForm({
  form,
}: {
  form: UseFormReturn<IProductForm>;
}) {
  const {
    register,
    control,
    formState: { errors },
  } = form;

  const producedAt = useWatch({ control, name: 'producedAt' });

  const syncShelfLife = useCallback(
    (change: ShelfLifeChange) => {
      const next = applyShelfLifeChange(change, {
        producedAt: form.getValues('producedAt'),
        expiresAt: form.getValues('expiresAt'),
        shelfLifeDays: form.getValues('shelfLifeDays'),
      });

      form.setValue('producedAt', next.producedAt, {
        shouldDirty: true,
        shouldValidate: next.producedAt != null,
      });
      form.setValue('expiresAt', next.expiresAt, {
        shouldDirty: true,
        shouldValidate: next.expiresAt != null,
      });
      form.setValue('shelfLifeDays', next.shelfLifeDays, {
        shouldDirty: true,
        shouldValidate: next.shelfLifeDays != null,
      });
    },
    [form],
  );

  return (
    <form>
      <Col sx={{ gap: 2 }}>
        <LabeledInput
          label="Название продукта*"
          control={
            <TextField
              {...register('name', {
                required: 'Название продукта обязательно',
              })}
              placeholder="Молоко"
              error={!!errors.name?.message}
              helperText={errors.name?.message}
            />
          }
        />

        <Col sx={{ gap: 1 }}>
          <LabeledInput
            label="Дата производства*"
            control={
              <Controller
                name="producedAt"
                control={control}
                rules={{ required: 'Дата производства обязательна' }}
                render={({ field, fieldState }) => (
                  <DatePicker
                    value={field.value ? dayjs(field.value) : null}
                    onChange={(value) =>
                      syncShelfLife({
                        field: 'producedAt',
                        value: toDateValue(value),
                      })
                    }
                    maxDate={dayjs()}
                    slotProps={{
                      textField: {
                        error: !!fieldState.error,
                        helperText: fieldState.error?.message,
                      },
                    }}
                  />
                )}
              />
            }
          />
          <Row sx={{ gap: 1, justifyContent: 'space-between' }}>
            {PRODUCED_AT_PRESETS.map(({ label, daysAgo }) => (
              <Button
                key={label}
                type="button"
                variant="soft"
                size="small"
                sx={{ flex: 1 }}
                onClick={() =>
                  syncShelfLife({
                    field: 'producedAt',
                    value: dayjs()
                      .startOf('day')
                      .subtract(daysAgo, 'day')
                      .toDate(),
                  })
                }
              >
                {label}
              </Button>
            ))}
          </Row>
        </Col>

        <Col sx={{ gap: 1 }}>
          <LabeledInput
            label="Срок годности*"
            control={
              <Row sx={{ gap: 1, alignItems: 'flex-start' }}>
                <Controller
                  name="shelfLifeDays"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      sx={{ flex: 0.3 }}
                      type="number"
                      slotProps={{ htmlInput: { min: 1, step: 1 } }}
                      placeholder="сут."
                      value={field.value ?? ''}
                      onChange={(event) => {
                        const raw = event.target.value;
                        if (raw === '') {
                          syncShelfLife({
                            field: 'shelfLifeDays',
                            value: null,
                          });
                          return;
                        }

                        const days = Number(raw);
                        if (!isValidShelfLifeDays(days)) return;

                        syncShelfLife({
                          field: 'shelfLifeDays',
                          value: days,
                        });
                      }}
                    />
                  )}
                />
                <Controller
                  name="expiresAt"
                  control={control}
                  rules={{ required: 'Срок годности обязателен' }}
                  render={({ field, fieldState }) => (
                    <DatePicker
                      sx={{ flex: 0.7 }}
                      value={field.value ? dayjs(field.value) : null}
                      onChange={(value) =>
                        syncShelfLife({
                          field: 'expiresAt',
                          value: toDateValue(value),
                        })
                      }
                      minDate={producedAt ? dayjs(producedAt) : undefined}
                      slotProps={{
                        textField: {
                          error: !!fieldState.error,
                          helperText: fieldState.error?.message,
                        },
                      }}
                    />
                  )}
                />
              </Row>
            }
          />
          <Row sx={{ gap: 1, justifyContent: 'space-between' }}>
            {SHELF_LIFE_PRESETS.map(({ label, days }) => (
              <Button
                key={days}
                type="button"
                variant="soft"
                size="small"
                sx={{ flex: 1 }}
                onClick={() =>
                  syncShelfLife({ field: 'shelfLifeDays', value: days })
                }
              >
                {label}
              </Button>
            ))}
          </Row>
        </Col>

        <LabeledInput
          label="Количество"
          control={
            <Row sx={{ gap: 1 }}>
              <TextField
                {...register('quantity')}
                type="number"
                slotProps={{ htmlInput: { min: 1, step: 1 } }}
                placeholder="1"
                sx={{ flex: 0.7 }}
              />
              <Select
                defaultValue={form.getValues('unit')}
                {...register('unit')}
                sx={{ flex: 0.3 }}
              >
                {Object.values(ProductUnitsEnum).map((unit) => (
                  <MenuItem key={unit} value={unit}>
                    {ProductUnitsRusEnum[unit]}
                  </MenuItem>
                ))}
              </Select>
            </Row>
          }
        />
      </Col>
    </form>
  );
});

export default ProductForm;

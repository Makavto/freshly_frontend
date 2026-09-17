import type { ProductUnitsEnum } from "@entities/product";

export interface IProductForm {
  name: string;
  producedAt: Date | null;
  expiresAt: Date | null;
  shelfLifeDays: number | null;
  quantity?: number;
  unit?: ProductUnitsEnum;
  categoryId?: number;
  storageLocationId?: number;
}

export type ShelfLifeState = {
  producedAt: Date | null;
  expiresAt: Date | null;
  shelfLifeDays: number | null;
};

export type ShelfLifeChange =
  | { field: 'producedAt'; value: Date | null }
  | { field: 'expiresAt'; value: Date | null }
  | { field: 'shelfLifeDays'; value: number | null };
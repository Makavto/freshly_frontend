import type { ProductUnitsEnum } from "@entities/product";

export interface IProductForm {
  name: string;
  expiresAt: Date;
  quantity?: number;
  unit?: ProductUnitsEnum;
  categoryId?: number;
  storageLocationId?: number;
}
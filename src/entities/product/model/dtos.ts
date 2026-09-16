import type { ProductUnitsEnum } from './types';

export interface ICreateProductDto {
  name: string;
  expiresAt: Date;
  quantity?: number;
  unit?: ProductUnitsEnum;
  categoryId?: number;
  storageLocationId?: number;
}

export interface IProductDto {
  id: 0;
  name: string;
  expiresAt: Date;
  quantity: number;
  unit: ProductUnitsEnum;
  categoryId: number;
  storageLocationId: number;
  category: {
    id: number;
    name: string;
    isPreset: true;
  };
  storageLocation: {
    id: number;
    name: string;
    isPreset: true;
  };
  status: string;
  photoUrl: string;
  createdAt: string;
  updatedAt: string;
}

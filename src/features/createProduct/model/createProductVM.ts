import {
  formToDto,
  productApi,
  ProductUnitsEnum,
  type IProductForm,
} from '@entities/product';
import { getApiError } from '@shared/api';
import { makeAutoObservable } from 'mobx';

export class CreateProductVM {
  private _isPending = false;
  private _error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get isPending() {
    return this._isPending;
  }

  get error() {
    return this._error;
  }

  async createProduct(data: IProductForm) {
    this._isPending = true;
    try {
      console.log(data);
      const product = await productApi.createProduct(formToDto(data));
      return product;
    } catch (error) {
      this._error = getApiError(error).message;
      throw error;
    } finally {
      this._isPending = false;
    }
  }

  get initialFormValues(): IProductForm {
    return {
      name: '',
      expiresAt: null,
      producedAt: null,
      shelfLifeDays: null,
      unit: ProductUnitsEnum.PIECE,
    };
  }
}

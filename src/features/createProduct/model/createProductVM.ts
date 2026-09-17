import { productApi, ProductUnitsEnum, type IProductForm } from '@entities/product';
import { makeAutoObservable } from 'mobx';

export class CreateProductVM {
  private _isPending = false;

  constructor() {
    makeAutoObservable(this);
  }

  get isPending() {
    return this._isPending;
  }

  async createProduct(data: IProductForm) {
    this._isPending = true;
    try {
      console.log(data);
      // const product = await productApi.createProduct(data);
      // return product;
    } catch (error) {
      console.error(error);
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

import { http } from '@shared/api';
import type { ICreateProductDto, IProductDto } from '../model/dtos';

export const productApi = {
  createProduct: async (data: ICreateProductDto) => {
    const response = await http.post<IProductDto>('/products', data);
    return response.data;
  },
};

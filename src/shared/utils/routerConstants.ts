export enum RoutesEnum {
  PRODUCTS = 'products',
  STATISTICS = 'statistics',
  PROFILE = 'profile',
  CREATE = 'create',
}

export enum RoutesNamesRuEnum {
  PRODUCTS = 'Продукты',
  STATISTICS = 'Статистика',
  PROFILE = 'Профиль',
  CREATE = 'Создать',
}

export const RouteToNameRuMap = {
  [RoutesEnum.PRODUCTS]: RoutesNamesRuEnum.PRODUCTS,
  [RoutesEnum.STATISTICS]: RoutesNamesRuEnum.STATISTICS,
  [RoutesEnum.PROFILE]: RoutesNamesRuEnum.PROFILE,
  [RoutesEnum.CREATE]: RoutesNamesRuEnum.CREATE,
};


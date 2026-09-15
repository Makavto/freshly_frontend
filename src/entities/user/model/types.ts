export type User = {
  id: number;
  email: string | null;
  nickname: string | null;
  isGuest: boolean;
  productLimit: number | null;
  productCount: number;
};

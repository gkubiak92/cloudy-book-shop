export interface OrderDetailsState {
  cart: any[] | undefined;
  total: number | undefined;
  address: string | null;
  token: string | null | undefined;
}

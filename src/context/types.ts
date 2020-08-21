export interface BookContextType {
  books: any[];
  featured: any[];
  loading: boolean;
  checkout: any;
}

export interface CartContextType {
  cart: any[];
  total: number;
  addToCart: any;
  increaseAmount: any;
  decreaseAmount: any;
  clearCart: any;
}

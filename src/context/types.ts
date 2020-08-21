export interface BookContext {
  books: any[];
  featured: any[];
  loading: boolean;
  checkout: any;
}

export interface CartContext {
  cart: any[];
  total: number;
  addToCart: any;
  increaseAmount: any;
  decreaseAmount: any;
  clearCart: any;
}

import React, { useState, useEffect } from 'react';
import { CartContextType } from './types';

const CartContext = React.createContext<Partial<CartContextType>>({
  cart: [],
  total: 0,
});

const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<any>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = [...cart].reduce((total, { amount, price }) => {
      return (total += amount * price);
    }, 0);
    setTotal(parseFloat(total.toFixed(2)));
  }, [cart]);

  const increaseAmount = (id: string) => {
    const updatedCart = [...cart].map((item: any) => {
      return item.id === id ? { ...item, amount: item.amount + 1 } : item;
    });
    setCart(updatedCart);
  };

  const decreaseAmount = (id: string, amount: number) => {
    let updatedCart = [];
    if (amount === 1) {
      updatedCart = [...cart].filter((item) => item.id !== id);
    } else {
      updatedCart = [...cart].map((item) => {
        return item.id === id ? { ...item, amount: item.amount - 1 } : item;
      });
    }
    setCart(updatedCart);
  };

  const addToCart = (book: any) => {
    const { id, title, price, image } = book;
    const cartItem = [...cart].find((item) => item.id === id);
    if (cartItem) {
      increaseAmount(id);
    } else {
      const cartItems = [...cart, { id, title, image, price, amount: 1 }];
      setCart(cartItems);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, total, addToCart, increaseAmount, decreaseAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };

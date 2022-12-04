import {createContext, useContext} from 'react';

export interface ICartItem {
  id: string;
  quantity: number;
};

export interface ICartContext {
  cartItems: ICartItem[];
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  removeAllFromCart: (id: string) => void;
  getQuantity: (id: string) => number;
};

export const CartContext = createContext({} as ICartContext);

export const useCart = () => useContext(CartContext);

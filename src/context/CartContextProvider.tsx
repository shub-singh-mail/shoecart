import React, {useReducer} from 'react';

import {CartContext} from './CartContext';
import cartReducer, {CartActionKind} from './cartReducer';

const CartContextProvider = ({children}: {children: React.ReactNode}) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  const addToCart = (id: string) => {
    dispatch({type: CartActionKind.INCREASE, payload: id});
  };

  const removeFromCart = (id: string) => {
    dispatch({type: CartActionKind.REMOVE, payload: id});
  };

  const removeAllFromCart = (id: string) => {
    dispatch({type: CartActionKind.REMOVE_ALL, payload: id});
  };

  const getQuantity = (id: string) => {
    return cartItems.find(item => item.id === id)?.quantity || 0;
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    removeAllFromCart,
    getQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;

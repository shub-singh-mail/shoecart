import {renderHook} from '@testing-library/react-hooks';
import React from 'react';
import {CartContext, ICartContext, ICartItem} from '../CartContext';
import useCartQuantity from '../useCartQuantity';

const cartItems = [
  {
    id: 'id324324',
    quantity: 3,
  },
  {
    id: 'id324325',
    quantity: 1,
  },
];

test('should return total number of items in cart', () => {
  const wrapper = ({
    children,
    cartItems = [],
  }: {
    children: React.ReactNode;
    cartItems: ICartItem[];
  }) => (
    <CartContext.Provider value={{cartItems}}>{children}</CartContext.Provider>
  );
  const {result, rerender} = renderHook(() => useCartQuantity(), {wrapper});
  expect(result.current).toBe(0);

  rerender({cartItems});
  expect(result.current).toBe(4);
});

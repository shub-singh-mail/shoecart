import {ICartItem} from './CartContext';

export enum CartActionKind {
  INCREASE = 'INCREASE',
  REMOVE = 'REMOVE',
  REMOVE_ALL = 'REMOVE_ALL',
}

export interface CartAction {
  type: CartActionKind;
  payload: string;
}

export default function cartReducer(
  cartItems: ICartItem[],
  action: CartAction,
) {
  const {type, payload: id} = action;
  const itemIndex = cartItems.findIndex(cartItem => cartItem.id === id);
  switch (type) {
    case CartActionKind.INCREASE: {
      if (itemIndex === -1) {
        return [...cartItems, {id, quantity: 1}];
      } else {
        return cartItems.map(cartItem => {
          if (cartItem.id === id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            };
          }
          return cartItem;
        });
      }
    }
    case CartActionKind.REMOVE: {
      if (itemIndex === -1) {
        return cartItems;
      }
      if (cartItems[itemIndex].quantity > 1) {
        return cartItems.map(cartItem => {
          if (cartItem.id === id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity - 1,
            };
          }
          return cartItem;
        });
      }
      return cartItems.filter(cartItem => cartItem.id !== id);
    }
    case CartActionKind.REMOVE_ALL: {
      return cartItems.filter(cartItem => cartItem.id !== id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

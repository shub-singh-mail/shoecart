import {useCart} from './CartContext';

export default function useCartQuantity() {
  const {cartItems} = useCart();
  return cartItems.reduce((total, item) => total + item.quantity, 0);
}

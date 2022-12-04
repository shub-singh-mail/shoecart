import {useCart} from './CartContext';
import {useProducts} from './ProductContext';

export default function useCartTotalPrice() {
  const {cartItems} = useCart();
  const shoes = useProducts();
  return cartItems.reduce((total, item) => {
    const price = shoes.find(shoe => shoe.id === item.id)?.price || 0;
    return price * item.quantity + total;
  }, 0);
}

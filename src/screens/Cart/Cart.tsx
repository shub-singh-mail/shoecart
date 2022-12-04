import React from 'react';
import {
  FlatList,
  ListRenderItem,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import CartItem from '../../components/CartItem/CartItem';
import ItemSeparator from '../../components/ItemSeparator';
import ScreenContainer from '../../components/ScreenContainer/ScreenContainer';

import {useCart} from '../../context/CartContext';
import {useProducts} from '../../context/ProductContext';
import useCartTotalPrice from '../../context/useCartTotalPrice';

import IShoe from '../../model/Shoe';

import styles from './styles';

const keyExtractor = (item: IShoe) => item.id;

const ListEmptyComponent = () => (
  <View style={styles.listEmptyContainer}>
    <Text style={styles.listEmptyLabel}>Nothing here!</Text>
  </View>
);

function Cart() {
  const shoes = useProducts();
  const {cartItems, getQuantity, removeAllFromCart} = useCart();

  const totalPrice = useCartTotalPrice();

  const renderShoes: ListRenderItem<IShoe> = ({item}) => {
    const shoe = shoes.find(shoe => shoe.id === item.id);
    if (!shoe) return null;
    const quantity = getQuantity(item.id);
    return (
      <CartItem
        {...shoe}
        quantity={quantity}
        onPressDelete={removeAllFromCart}
      />
    );
  };

  return (
    <ScreenContainer>
      <FlatList
        keyExtractor={keyExtractor}
        data={cartItems}
        renderItem={renderShoes}
        ListEmptyComponent={ListEmptyComponent}
        ItemSeparatorComponent={ItemSeparator}
      />
      {!!cartItems.length && (
        <View style={styles.footerContainer}>
          <Text style={styles.totalPriceLabel}>Total: ${totalPrice}</Text>
          <TouchableOpacity style={styles.checkoutButtonContainer}>
            <Text style={styles.checkoutButtonLabel}>CHECKOUT</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScreenContainer>
  );
}

export default Cart;

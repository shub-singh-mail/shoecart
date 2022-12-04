import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import IShoe from '../../model/Shoe';

import styles from './styles';

export interface IProductCard extends IShoe {
  onPressDelete: (id: string) => void;
  quantity: number;
}

const CartItem = (props: IProductCard) => {
  const {id, brand, price, size, image, quantity, onPressDelete} = props;
  const handleDeleteFromCart = () => onPressDelete(id);
  const source = {uri: image};
  const quantityLabel = quantity > 1 ? `(x${quantity})` : ``;
  return (
    <View style={styles.cartItemContainer}>
      <Image source={source} resizeMode="stretch" style={styles.productImage} />
      <View style={styles.productInfoContainer}>
        <Text style={styles.productName}>
          {brand} {quantityLabel}
        </Text>
        <Text style={styles.productInfo}>Size: UK {size}</Text>
        <Text style={styles.productInfo}>${price}</Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButtonContainer}
        onPress={handleDeleteFromCart}>
        <Text style={styles.productName}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;

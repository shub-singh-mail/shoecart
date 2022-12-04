import React from 'react';
import {Image, Text, View, ViewStyle} from 'react-native';

import IShoe from '../../model/Shoe';

import AddRemoveButton, {
  IAddRemoveButton,
} from '../AddRemoveButton/AddRemoveButton';
import styles from './styles';

export interface IProductCard extends IShoe, IAddRemoveButton {
  containerStyle?: ViewStyle | ViewStyle[];
}

const ProductCard = (props: IProductCard) => {
  const {
    id,
    brand,
    price,
    size,
    image,
    quantity,
    onPressAdd,
    onPressRemove,
    containerStyle,
  } = props;
  const handleAddToCart = () => onPressAdd(id);
  const handleRemoveFromCart = () => onPressRemove(id);
  const source = {uri: image};
  return (
    <View style={[styles.shoeItemContainer, containerStyle]}>
      <Image source={source} resizeMode="stretch" style={styles.productImage} />
      <View style={styles.productInfoContainer}>
        <Text style={styles.productName}>{brand}</Text>
        <Text style={styles.productInfo}>Size: UK {size}</Text>
        <Text style={styles.productInfo}>${price}</Text>
      </View>
      <AddRemoveButton
        quantity={quantity}
        onPressAdd={handleAddToCart}
        onPressRemove={handleRemoveFromCart}
      />
    </View>
  );
};

export default ProductCard;

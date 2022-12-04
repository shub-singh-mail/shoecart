import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import useCartQuantity from '../../context/useCartQuantity';
import styles from './styles';

const HeaderCartButton = () => {
  const quantity = useCartQuantity();
  const navigation = useNavigation();
  const handleOnPress = () => navigation.navigate('Cart');
  return (
    <TouchableOpacity onPress={handleOnPress}>
      <Image
        source={require('../../assets/cart.png')}
        style={{height: 30, width: 30}}
      />
      {quantity ? (
        <View style={styles.quantityContainer}>
          <Text style={styles.quantity}>{quantity}</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default HeaderCartButton;

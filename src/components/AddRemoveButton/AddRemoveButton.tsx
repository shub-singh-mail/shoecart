import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';

export interface IAddRemoveButton {
  quantity: number;
  onPressAdd: (id: string) => void;
  onPressRemove: (id: string) => void;
}

const AddRemoveButton = ({
  quantity,
  onPressAdd,
  onPressRemove,
}: IAddRemoveButton) => {
  return quantity > 0 ? (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={onPressRemove}>
        <Text style={styles.buttonLabel}>{'-'}</Text>
      </TouchableOpacity>
      <Text style={styles.quantityLabel}>{quantity}</Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={onPressAdd}>
        <Text style={styles.buttonLabel}>{'+'}</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <TouchableOpacity onPress={onPressAdd} style={styles.buttonContainer}>
      <Text style={styles.buttonLabel}>{'+'}</Text>
    </TouchableOpacity>
  );
};

export default AddRemoveButton;

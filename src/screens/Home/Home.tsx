import React from 'react';
import {ActivityIndicator, FlatList, ListRenderItem, Text} from 'react-native';

import ItemSeparator from '../../components/ItemSeparator';
import ProductCard from '../../components/ProductCard/ProductCard';
import ScreenContainer from '../../components/ScreenContainer/ScreenContainer';

import {useCart} from '../../context/CartContext';
import {useProducts} from '../../context/ProductContext';

import IShoe from '../../model/Shoe';

import styles from './styles';

const keyExtractor = (item: IShoe) => item.id;

const ListHeaderComponent = () => (
  <Text style={styles.listHeaderLabel}>Most popular</Text>
);

const ListEmptyComponent = () => <ActivityIndicator size={'small'} />;

function Home() {
  const shoes = useProducts();
  const {addToCart, removeFromCart, getQuantity} = useCart();

  const renderShoes: ListRenderItem<IShoe> = ({item, index}) => {
    const quantity = getQuantity(item.id);
    return (
      <ProductCard
        {...item}
        quantity={quantity}
        onPressAdd={addToCart}
        onPressRemove={removeFromCart}
        containerStyle={[
          styles.listItem,
          {...(index % 2 === 0 ? {marginRight: 0} : {marginLeft: 0})},
        ]}
      />
    );
  };

  return (
    <ScreenContainer>
      <FlatList
        testID='products-list'
        keyExtractor={keyExtractor}
        data={shoes}
        numColumns={2}
        horizontal={false}
        renderItem={renderShoes}
        ListEmptyComponent={ListEmptyComponent}
        ListHeaderComponent={ListHeaderComponent}
        ItemSeparatorComponent={ItemSeparator}
        columnWrapperStyle={styles.listColumnWrapper}
      />
    </ScreenContainer>
  );
}

export default Home;

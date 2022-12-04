import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/screens/Home/Home';
import Cart from './src/screens/Cart/Cart';

import {colors} from './src/constants/theme';

import HeaderCartButton from './src/components/HeaderCartButton/HeaderCartButton';

import ShoeContextProvider from './src/context/ShoeContextProvider';
import CartContextProvider from './src/context/CartContextProvider';

const Stack = createNativeStackNavigator();

const commonHeader = {
  headerTitleStyle: {fontSize: 22},
  headerTintColor: colors.SECONDARY,
};

const homeHeaderOptions = {
  ...commonHeader,
  title: 'Shoe Cart',
  headerRight: HeaderCartButton,
};

const cartHeaderOptions = {
  ...commonHeader,
  title: 'Your Cart',
  headerBackTitleVisible: false,
};

function App() {
  return (
    <ShoeContextProvider>
      <CartContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={homeHeaderOptions}
            />
            <Stack.Screen
              name="Cart"
              component={Cart}
              options={cartHeaderOptions}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </CartContextProvider>
    </ShoeContextProvider>
  );
}

export default App;

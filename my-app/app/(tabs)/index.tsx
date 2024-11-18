import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '@/components/loginComponent';
import ProductListScreen from '../pages/productList/productsList';
import ProductDetailScreen from '../pages/productDetail/productDetail'
import { Provider } from 'react-redux';
import store from '../settings/config/store';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Provider store={store}>
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: 'Product List' }} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </Stack.Navigator>
    </Provider>
  );
};

export default AppNavigator;

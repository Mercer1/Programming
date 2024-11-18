// navigation/StackNavigator.tsx o el archivo de navegación donde defines las pantallas
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../../components/loginComponent';
import ProductList from '../../pages/productList/productsList';  // Asegúrate de importar ProductList
import ProductDetailScreen from '@/app/pages/productDetail/productDetail';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="LoginScreen">
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="ProductList" component={ProductList} /> {/* Asegúrate de que esta pantalla esté registrada */}
    <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
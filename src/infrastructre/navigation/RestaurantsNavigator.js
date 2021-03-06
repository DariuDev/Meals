import React from 'react';
import {RestaurantsScreen} from '../../features/restaurants/screens/RestaurantsScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {RestaurantDetailScreen} from '../../features/restaurants/screens/RestaurantDetailScreen.js';

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{presentation: 'modal', gestureEnabled: true}}>
      <RestaurantStack.Screen name="Restaurant" component={RestaurantsScreen} />
      <RestaurantStack.Screen
        name="RestaurantDetailScreen"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};

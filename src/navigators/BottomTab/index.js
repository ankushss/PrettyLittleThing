import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home} from '../../screens/Home';
import {Cart} from '../../screens/Cart';
import {Image, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import {icons} from '../../assets/icons';
import {getCartItemsCount} from '../../store/cart';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  const cartCount = useSelector(getCartItemsCount);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#00aa5b',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={icons.home}
              style={styles.icon(focused, color, size)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={icons.cart}
              style={styles.icon(focused, color, size)}
            />
          ),
          tabBarBadge: cartCount > 0 ? cartCount : null,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: (focused, color, size) => ({
    width: size,
    height: size,
    tintColor: color,
  }),
});

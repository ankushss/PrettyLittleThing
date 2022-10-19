import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {getCartTotal} from '../../../store/cart';

export const CartTotal = () => {
  const cartTotalAmount = useSelector(getCartTotal);
  return (
    <View>
      <Text style={styles.total}>
        Total Payable: <Text style={styles.totalText}>${cartTotalAmount}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  total: {
    fontSize: 30,
  },
  totalText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
});

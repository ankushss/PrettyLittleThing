import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {addToCart, removeFromCart} from '../../../store/cart';
import {Counter} from '../../atoms';

export const CartItem = ({item}) => {
  const dispatch = useDispatch();

  const onPressAdd = () => {
    dispatch(addToCart(item));
  };

  const onPressRemove = () => {
    dispatch(removeFromCart(item));
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: item.img}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text numberOfLines={2}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <Text>
          Color: <Text style={styles.colorText}>{item.colour}</Text>
        </Text>
        <View style={styles.counterContainer}>
          <Counter
            value={item.quantity}
            onPressAdd={onPressAdd}
            onPressRemove={onPressRemove}
          />
          <Text>
            Total:{' '}
            <Text style={styles.totalText}>${item.quantity * item.price}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 80,
    height: (1180 / 740) * 80,
    resizeMode: 'contain',
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 4,
  },
  colorText: {
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
  },
  counterContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalText: {
    fontWeight: 'bold',
  },
});

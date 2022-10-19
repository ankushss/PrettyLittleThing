import React from 'react';
import {Image, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, getItemQuantityInCart} from '../../../store/cart';

import {Button} from '../../atoms';

export const DressItem = ({item, index}) => {
  const dimensions = useWindowDimensions();
  const dispatch = useDispatch();
  const itemQuantityInCart = useSelector(getItemQuantityInCart(item.id));
  const isItemAddedToCard = itemQuantityInCart > 0;

  const onPressAddToCard = () => {
    dispatch(addToCart(item));
  };

  return (
    <View style={styles.container(dimensions, index)}>
      <Image source={{uri: item.img}} style={styles.image(dimensions)} />
      <Text numberOfLines={2}>{item.name}</Text>
      <Text style={styles.price}>${item.price}</Text>
      <Text>
        Color: <Text style={styles.colorText}>{item.colour}</Text>
      </Text>
      <Button
        testID="addToCartButton"
        variant={isItemAddedToCard ? 'outlined' : 'contained'}
        style={styles.button}
        onPress={onPressAddToCard}
        disabled={isItemAddedToCard}>
        {isItemAddedToCard ? 'ADDED TO CART' : 'ADD TO CART'}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: (dimensions, index) => ({
    width: (dimensions.width - 60) / 2,
    marginRight: index % 2 === 0 ? 20 : 0,
    marginBottom: 20,
  }),
  image: dimensions => ({
    width: (dimensions.width - 60) / 2,
    height: ((1180 / 740) * (dimensions.width - 60)) / 2,
    resizeMode: 'contain',
    marginBottom: 10,
  }),
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
});

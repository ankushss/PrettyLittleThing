import React from 'react';
import {FlatList} from 'react-native';
import {CartItem} from '../../../components/molecules';

export const CartList = ({data}) => {
  const renderItem = ({item, index}) => <CartItem item={item} />;
  const keyExtractor = item => item.id;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
    />
  );
};

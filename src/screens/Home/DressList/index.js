import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {DressItem} from '../../../components/molecules';

export const DressList = ({data}) => {
  const renderItem = ({item, index}) => <DressItem item={item} index={index} />;
  const keyExtractor = item => item.id;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.flatlist}
    />
  );
};

const styles = StyleSheet.create({
  flatlist: {
    paddingVertical: 20,
  },
});

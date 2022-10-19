import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const NoItems = () => {
  return (
    <View style={styles.container}>
      <Text>No items in cart</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

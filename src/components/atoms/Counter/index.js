import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const Counter = ({value = 0, onPressAdd, onPressRemove}) => {
  const [count, setCount] = useState(value);

  useEffect(() => {
    setCount(value);
  }, [value]);

  return (
    <View style={styles.container}>
      <TouchableOpacity testID="addButton" onPress={onPressAdd}>
        <View style={styles.button}>
          <Text>+</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.text}>{count}</Text>
      <TouchableOpacity testID="removeButton" onPress={onPressRemove}>
        <View style={styles.button}>
          <Text>-</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'lightgray',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  text: {
    marginHorizontal: 10,
    fontSize: 16,
  },
});

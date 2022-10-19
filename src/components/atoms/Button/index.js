import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const Button = ({
  children,
  onPress,
  variant = 'contained',
  ...props
}) => {
  const containedStyles = {
    backgroundColor: '#00aa5b',
    borderColor: '#00aa5b',
    borderWidth: 1,
  };

  const outlinedStyles = {
    borderColor: '#00aa5b',
    borderWidth: 1,
  };

  const containedTextStyles = {
    color: 'white',
  };

  const outlinedTextStyles = {
    color: '#00aa5b',
  };

  return (
    <TouchableOpacity onPress={onPress} {...props}>
      <View
        style={[
          styles.container,
          variant === 'contained' ? containedStyles : outlinedStyles,
        ]}>
        <Text
          style={[
            styles.text,
            variant === 'contained' ? containedTextStyles : outlinedTextStyles,
          ]}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    fontWeight: 'bold',
  },
});

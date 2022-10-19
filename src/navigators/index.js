import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {BottomTab} from './BottomTab';

export const Navigator = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
};

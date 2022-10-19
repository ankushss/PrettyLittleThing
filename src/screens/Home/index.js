import React from 'react';
import {StyleSheet} from 'react-native';

import {Loader, Screen} from '../../components/atoms';
import {useGetDressesQuery} from '../../store/dress';
import {DressList} from './DressList';

export const Home = () => {
  const {data, isLoading} = useGetDressesQuery();

  return (
    <Screen style={styles.container}>
      {isLoading && <Loader />}
      {data && <DressList data={data} />}
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 0,
  },
});

import React from 'react';
import {useSelector} from 'react-redux';
import {Screen} from '../../components/atoms';
import {getCartItems} from '../../store/cart';
import {CartList} from './CartList';
import {CartTotal} from './CartTotal';
import {NoItems} from './NoItems';

export const Cart = () => {
  const data = useSelector(getCartItems);

  return (
    <Screen>
      {data.length > 0 ? (
        <>
          <CartList data={data} />
          <CartTotal />
        </>
      ) : (
        <NoItems />
      )}
    </Screen>
  );
};

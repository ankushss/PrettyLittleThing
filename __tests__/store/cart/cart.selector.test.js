import {
  getCartItems,
  getCartItemsCount,
  getCartTotal,
  getItemQuantityInCart,
} from '../../../src/store/cart';

const mockState = {
  cart: {
    items: [
      {
        id: 1,
        colour: 'mockColor',
        name: 'mockName',
        price: 1,
        img: 'mockImgUrl',
        quantity: 1,
      },
    ],
  },
};

describe('Cart Selector', () => {
  it('getCartItems', () => {
    expect(getCartItems(mockState)).toEqual(mockState.cart.items);
  });

  it('getCartItemsCount', () => {
    expect(getCartItemsCount(mockState)).toEqual(1);
  });

  it('getCartItemsCount no items', () => {
    expect(getCartItemsCount({cart: {item: []}})).toEqual(0);
  });

  it('getCartTotal', () => {
    expect(getCartTotal(mockState)).toEqual(Number(1).toFixed(2));
  });

  it('getCartTotal with no items', () => {
    expect(getCartTotal({cart: {item: []}})).toEqual(Number(0).toFixed(2));
  });

  it('getItemQuantityInCart', () => {
    expect(getItemQuantityInCart(1)(mockState)).toEqual(1);
  });

  it('getItemQuantityInCart with non existing id', () => {
    expect(getItemQuantityInCart(2)(mockState)).toEqual(0);
  });
});

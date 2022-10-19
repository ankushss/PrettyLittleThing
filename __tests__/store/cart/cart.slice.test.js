import {cartReducer, addToCart, removeFromCart} from '../../../src/store/cart';

const mockItem = {
  id: 1,
  colour: 'mockColor',
  name: 'mockName',
  price: 1,
  img: 'mockImgUrl',
};

describe('Cart Slice', () => {
  it('return the initial state', () => {
    expect(cartReducer(undefined, {type: undefined})).toEqual({items: []});
  });

  it('add new item to cart', () => {
    const previousState = {items: []};
    expect(cartReducer(previousState, addToCart(mockItem))).toEqual({
      items: [
        {
          ...mockItem,
          quantity: 1,
        },
      ],
    });
  });

  it('add existing item to cart', () => {
    const previousState = {items: [{...mockItem, quantity: 1}]};
    expect(cartReducer(previousState, addToCart(mockItem))).toEqual({
      items: [
        {
          ...mockItem,
          quantity: 2,
        },
      ],
    });
  });

  it('remove item from cart when quantity greater than 1', () => {
    const previousState = {items: [{...mockItem, quantity: 2}]};
    expect(cartReducer(previousState, removeFromCart(mockItem))).toEqual({
      items: [
        {
          ...mockItem,
          quantity: 1,
        },
      ],
    });
  });

  it('remove item from cart when quantity equal than 1', () => {
    const previousState = {items: [{...mockItem, quantity: 1}]};
    expect(cartReducer(previousState, removeFromCart(mockItem))).toEqual({
      items: [],
    });
  });
});

export const getCartItems = state => state.cart.items;

//Memoize this selector
export const getItemQuantityInCart = id => state => {
  return state.cart.items?.find(item => item.id === id)?.quantity || 0;
};

export const getCartTotal = state =>
  (
    state.cart.items?.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0,
    ) || 0
  ).toFixed(2);

export const getCartItemsCount = state =>
  state.cart.items?.reduce((acc, item) => acc + item.quantity, 0) || 0;

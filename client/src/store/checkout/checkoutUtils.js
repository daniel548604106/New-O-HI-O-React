export const addItemToCheckoutList = (checkoutList, cartItemToAdd) => {
  if (checkoutList && checkoutList.length > 0) {
    const existingItem = cartItems.find((checkoutList) => cartItem._id === cartItemToAdd._id);
    if (!existingItem) {
      cartItems.push({ ...cartItemToAdd, quantity: 1 });
      return cartItems;
    }
    return cartItems.map((item) => {
      return item._id === cartItemToAdd._id ? { ...item, quantity: item.quantity + 1 } : item;
    });
  }
  return [{ ...cartItemToAdd, quantity: 1 }];
};

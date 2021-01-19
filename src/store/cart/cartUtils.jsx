export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);
  if (existingItem) {
    return cartItems.map((item) => {
      return item.id === cartItemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item;
    });
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, idx) => {
  console.log('remove');
  return cartItems.splice(idx, 1);
};

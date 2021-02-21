export const addItemToCart = (cartItems, cartItemToAdd) => {
  if (cartItems && cartItems.length > 0) {
    const existingItem = cartItems.find((cartItem) => cartItem._id === cartItemToAdd._id);
    if (!existingItem) {
      // cartItems.push({ ...cartItemToAdd, quantity: 1 });
      return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
    }
    return cartItems.map((item) => {
      return item._id === cartItemToAdd._id
        ? { ...item, quantity: Number(item.quantity) + 1 }
        : item;
    });
  }
  return [{ ...cartItemToAdd, quantity: 1 }];
};

export const updateCartItemQuantity = (cartItems, { id, qty }) => {
  console.log(cartItems);
  return cartItems.map((item) => {
    return item._id === id ? { ...item, quantity: qty } : item;
  });
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  return cartItems.filter((item) => {
    return item._id !== cartItemToRemove;
  });
};

export const clearItemFromCart = (cartItems, itemToRemove) => {
  return cartItems.filter((item) => item.id !== itemToRemove.id);
};

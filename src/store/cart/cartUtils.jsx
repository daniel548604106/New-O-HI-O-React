export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);
  if (existingItem) {
    return cartItems.map((item) => {
      return item.id === cartItemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item;
    });
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);
  if (existingItem.quantity === 1) {
    return cartItems.filter((item) => {
      item.id !== cartItemToRemove.id;
    });
  }
  return cartItems.map((item) =>
    item.id === cartItemToRemove.id ? { ...item, quantity: item.quantity - 1 } : cartItem,
  );
};

export const getCartItemsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('cartItems')).cartItems;
};

export const saveCartItemsToLocalStorage = (payload) => {
  localStorage.setItem('cartItems', JSON.stringify(payload));
};

export const clearItemFromCart = (cartItems, itemToRemove) => {
  return cartItems.filter((item) => item.id !== itemToRemove.id);
};

export const addItemToCart = (cartItems, cartItemToAdd) => {
  if (cartItems && cartItems.length > 0) {
    const existingItem = cartItems.find((cartItem) => cartItem._id === cartItemToAdd._id);
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

export const updateCartItemQuantity = (cartItems, { id, qty }) => {
  return cartItems.map((item) => {
    return item._id === id ? { ...item, quantity: qty } : item;
  });
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingItemIdx = cartItems.indexOf(cartItemToRemove);
  return cartItems.splice(existingItemIdx, 1);
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

// Function to add items to the cart
export function doAddToCart(itemId) {
  return (dispatch, getState) => {
    const itemToAdd = getState().search.results.find(result => result.itemId === itemId);
    const addQtyToItem = {
      ...itemToAdd,
      qty: 1,
    };
    dispatch({
      type: "ADD_TO_CART",
      payload: addQtyToItem
    });
  };
}

// Function to add quantity to the cart item
export function doAddQuantity(itemId) {
  return (dispatch, getState) => {
    const cartItems = getState().cart;
    const itemToUpdate = cartItems.find(item => item.itemId === itemId);
    const updateQuantityItem = {
      ...itemToUpdate,
      qty: itemToUpdate.qty + 1,
    };
    const updatedCart = cartItems.map(item => {
      if (item.itemId === itemId) {
        return updateQuantityItem;
      }
      return item;
    });
    dispatch({
      type: "ADD_QUANTITY",
      payload: updatedCart,
    });
  };
}

// Function to remove quantity from the cart item
export function doRemoveQuantity(itemId) {
  return (dispatch, getState) => {
    const cartItems = getState().cart;
    const itemToUpdate = cartItems.find(item => item.itemId === itemId);
    let updatedCart = [];
    let updateQuantityItem = {};
    if (itemToUpdate.qty === 1) {
      updatedCart = cartItems.filter(item => item.itemId !== itemId);
    } else {
      updateQuantityItem = {
        ...itemToUpdate,
        qty: itemToUpdate.qty - 1,
      };
      updatedCart = cartItems.map(item => {
        if (item.itemId === itemId) {
          return updateQuantityItem;
        }
        return item;
      });
    }
    dispatch({
      type: "REMOVE_QUANTITY",
      payload: updatedCart,
    });
  };
}

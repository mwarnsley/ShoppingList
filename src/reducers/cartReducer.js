import initialState from './initialState';

const cartState = initialState.cart;

// Creating the Cart Reducer
export function cartReducer(state = cartState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const item = action.payload;
      return [
        ...state,
        item,
      ];
    break;
    case "ADD_QUANTITY":
      const newAddQuantity = action.payload;
      return newAddQuantity;
    break;
    case "REMOVE_QUANTITY":
      const newRemovedQuantity = action.payload;
      return newRemovedQuantity;
    break;
  }
  return state;
};

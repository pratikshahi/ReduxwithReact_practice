const initialData = {
  /////data
  cartCount: 0,
};

////function(reducer)
function cartReducer(state = initialData, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        cartCount: ++state.cartCount,
      };

    case "REMOVE_ITEM":
      return {
        cartCount: --state.cartCount,
      };
    default:
      return state;
  }
}

export default cartReducer;

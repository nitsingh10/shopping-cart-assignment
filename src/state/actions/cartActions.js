export const addItem = ({ id, imageUrl, name, price, stock }) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_ITEM",
      product: {
        [id]: {
          id,
          imageUrl,
          name,
          price,
          stock,
          quantity: 1,
        },
      },
    });
  };
};

export const editItem = (id) => {
  return (dispatch) => {
    dispatch({
      type: "EDIT_ITEM",
      id: id,
    });
  };
};

export const removeItem = (id) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_ITEM",
      id: id,
    });
  };
};

export const handleCart = (cartOpen) => {
  return (dispatch) => {
    dispatch({
      type: "HANDLE_CART",
      cartOpen: !cartOpen,
    });
  };
};

import React, { useReducer } from 'react';
import { DummyData } from './DummyData';

export const shoeContext = React.createContext();

const initialCart = [];
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CART':
      return [...state, action.value];
    case 'REMOVE_CART':
      return action.value;
    case 'INCREMENT':
      state.find((shoeData) => shoeData.id === action.value).count += 1;
      return [...state];
    case 'DECREMENT':
      state.find((shoeData) => shoeData.id === action.value).count > 1 &&
        (state.find((shoeData) => shoeData.id === action.value).count -= 1);
      return [...state];
    default:
      return state;
  }
};

const ShoeContextProvider = (props) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  const addCart = (addShoeId) => {
    if (!cart.length) {
      dispatch({
        type: 'ADD_CART',
        value: DummyData.find((shoeData) => shoeData.id === addShoeId),
      });
    } else {
      if (!cart.find((shoeData) => shoeData.id === addShoeId))
        dispatch({
          type: 'ADD_CART',
          value: DummyData.find((shoeData) => shoeData.id === addShoeId),
        });
    }
  };

  const removeCart = (removeCartId) => {
    dispatch({
      type: 'REMOVE_CART',
      value: cart.filter((shoe) => shoe.id !== removeCartId),
    });
  };

  const increment = (shoeId) => {
    dispatch({
      type: 'INCREMENT',
      value: shoeId,
    });
  };

  const decrement = (shoeId) => {
    dispatch({
      type: 'DECREMENT',
      value: shoeId,
    });
  };

  return (
    <shoeContext.Provider
      value={{ DummyData, cart, addCart, removeCart, increment, decrement }}
    >
      {props.children}
    </shoeContext.Provider>
  );
};

export default ShoeContextProvider;

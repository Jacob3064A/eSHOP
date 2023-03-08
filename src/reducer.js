// here we define all the application level states and define actions to make the changes to the state

export const initialState = {
  basket: [],
};

// Selector
//! This is an alert
//? This is a query
//* This is highlights
//TODO: Create some test cases
//// this is disabled
//! alert comment
//? query comment
//* highlights
//TODO: test cases
//// disable comment

export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

//* Selector
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};

export default reducer;

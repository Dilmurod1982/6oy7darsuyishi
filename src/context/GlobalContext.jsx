import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOG_IN":
      return { ...state, user: payload };
    case "LOG_OUT":
      return { ...state, user: null };
    case "IS_AUTH_READY":
      return { ...state, isAuthReady: true };
    case "ADD_PRODUCT":
      return { ...state, products: payload };
    default:
      return state;
  }
};

function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    user: null,
    isAuthReady: false,
    products: [],
    totalProducts: 0,
    totalPrice: 0,
  });
  const addToCart = (product) => {
    if (!state.products.length) {
      dispatch({ type: "ADD_PRODUCT", payload: [product] });
    } else {
      state.products.map((prod) => {
        if (prod.id === product.id) {
        } else {
          dispatch({
            type: "ADD_PRODUCT",
            payload: [...state.products, product],
          });
        }
      });
    }
  };

  console.log(state.products);
  return (
    <GlobalContext.Provider value={{ ...state, dispatch, addToCart }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;

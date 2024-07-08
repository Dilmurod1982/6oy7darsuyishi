import { produce } from "immer";
import { createContext, useEffect, useReducer } from "react";

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
    case "TOTAL_PRODUCTS_COUNT":
      return { ...state, totalProducts: payload };
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

  const calculateTotal = () => {
    let totalCount = 0;
    state.products.forEach((product) => {
      totalCount = totalCount + product.amount;
    });
    dispatch({ type: "TOTAL_PRODUCTS_COUNT", payload: totalCount });
  };

  const addToCart = (product) => {
    if (!state.products.length) {
      dispatch({ type: "ADD_PRODUCT", payload: [product] });
    } else {
      state.products.map((prod) => {
        if (prod.id === product.id) {
          const findProduct = state.products.find(
            (prod) => prod.id == product.id
          );
          const updatedAmount =
            (findProduct.amount =
            findProduct.amount +=
              product.amount);
          const updatedAmounts = state.products.map((prod) => {
            if (prod.id == updatedAmount.id) {
              return { ...prod, amount: updatedAmount.amount };
            } else {
              return prod;
            }
          });
          dispatch({
            type: "ADD_PRODUCT",
            payload: updatedAmounts,
          });
        } else {
          dispatch({
            type: "ADD_PRODUCT",
            payload: [...state.products, product],
          });
        }
      });
    }
  };

  //increment
  const incrementAmount = (id) => {
    function toggleTodo(state, id) {
      return produce(state, (draft) => {
        const product = draft.products.find((prod) => prod.id === id);
        product.amount = product.amount + 1;
      });
    }
    const { products } = toggleTodo(state, id);
    dispatch({
      type: "ADD_PRODUCT",
      payload: products,
    });
  };
  const decrementAmount = (id) => {
    function toggleTodo(state, id) {
      return produce(state, (draft) => {
        const product = draft.products.find((prod) => prod.id === id);
        product.amount = product.amount - 1;
      });
    }
    const { products } = toggleTodo(state, id);
    dispatch({
      type: "ADD_PRODUCT",
      payload: products,
    });
  };

  useEffect(() => {
    let totalCount = 0;
    state.products.forEach((product) => {
      totalCount = totalCount + product.amount;
    });
    dispatch({ type: "TOTAL_PRODUCTS_COUNT", payload: totalCount });
  }, [state.products]);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        dispatch,
        addToCart,
        incrementAmount,
        decrementAmount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;

import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// Intial state
const IntialState = {
  transactions: [],
};

// Create Context
export const GlobalContext = createContext(IntialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, IntialState, () => {
    // Creates Array in Local Storage (text & amount)
    const localData = localStorage.getItem("state");
    return localData ? JSON.parse(localData) : IntialState;
  });

  // Will detect a transaction and load its
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  //Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

import React from "react";

import reducer from "./reducers";

const AppContext = React.createContext();

const initialState = {
  menuOpen: false,
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };

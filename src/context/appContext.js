import React from "react";

export const actions = { TOGGLE_MENU: "TOGGLE_MENU" };

const AppContext = React.createContext();

const initialState = {
  menuOpen: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.TOGGLE_MENU:
      return { ...state, menuOpen: !state.menuOpen };
  }
};

const AppContextProvider = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };

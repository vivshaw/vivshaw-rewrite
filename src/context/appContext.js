import React from "react";

export const actions = { TOGGLE_MENU: "TOGGLE_MENU" };

const HeaderContext = React.createContext();

const initialState = {
  menuOpen: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.TOGGLE_MENU:
      return { ...state, menuOpen: !state.menuOpen };
  }
};

const HeaderContextProvider = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <HeaderContext.Provider value={{ state, dispatch }}>
      {props.children}
    </HeaderContext.Provider>
  );
};

const HeaderContextConsumer = HeaderContext.Consumer;

export { HeaderContext, HeaderContextProvider, HeaderContextConsumer };

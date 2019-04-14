import { TOGGLE_MENU } from "../actions";

export default (state, action) => {
  const { type } = action;

  const reducer = {
    [TOGGLE_MENU]: {
      ...state,
      menuOpen: !state.menuOpen,
    },
  };

  return reducer[type] || state;
};

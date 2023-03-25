import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

const themeReducer = createReducer(initialState, {
  CHANGE_THEME: (state, action) => {
    return {
      ...state,
      theme: action.payload,
    };
  },
});

export default themeReducer;

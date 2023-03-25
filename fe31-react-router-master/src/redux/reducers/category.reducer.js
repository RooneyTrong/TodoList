import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  category: [],
};

const categoryReducer = createReducer(initialState, {
  GET_CATEGORY_LIST: (state, action) => {
    return {
      ...state,
    };
  },
});

export default categoryReducer;

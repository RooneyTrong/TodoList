import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  productDetail: {},
};

const productReducer = createReducer(initialState, {
  GET_PRODUCT_LIST: (state, action) => {
    return {
      ...state,
    };
  },

  GET_DETAIL_LIST: (state, action) => {
    return {
      ...state,
    };
  },
});

export default productReducer;

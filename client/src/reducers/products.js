import {
  GET_ALLPRODUCTS,
  SEARCH_PRODUCTS,
  SEARCH_PRODUCT_CATEGORY,
  CATEGORY_PAGINATING,
  CLEAR_PRODUCTS,
  SEARCHING
} from '../actions/types';

const initialState = {
  products: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALLPRODUCTS:
      return {
        ...state,
        products: payload,
        loading: false
      };
    case SEARCH_PRODUCTS:
    case SEARCH_PRODUCT_CATEGORY:
    case CATEGORY_PAGINATING:
      return {
        ...state,
        products: payload,
        loading: false
      };
    case SEARCHING:
      return {
        ...state,
        products: null,
        loading: true
      };
    case CLEAR_PRODUCTS:
      return {
        ...state,
        products: null,
        loading: false,
        error: {}
      };
    default:
      return state;
  }
}

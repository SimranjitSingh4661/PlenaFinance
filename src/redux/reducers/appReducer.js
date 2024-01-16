import {
  ADD_TO_CART,
  ADD_TO_FAVOURITE,
  REMOVE_FROM_CART,
  REMOVE_FROM_FAVOURITE,
  SET_PRODUCTS,
  CLEAR_ALL,
  REMOVE_CART_ITEM,
  CALCULATE_TOTAL_COST,
  EMPTY_CART,
} from '../constants';
import {calculateTotalAmount} from '../../utils';

const initialState = {
  cart: [],
  favourite: [],
  products: [],
  totalCost: 0,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        totalCost: 0,
      };
    case ADD_TO_CART:
      const savedProducts = [...state.cart];
      const existingProduct = savedProducts.find(
        product => product.id === action.payload.id,
      );
      if (existingProduct) {
        existingProduct.count += 1;
      } else {
        savedProducts.push({...action.payload, count: 1});
      }
      return {
        ...state,
        cart: savedProducts,
        totalCost: calculateTotalAmount(savedProducts),
      };
    case REMOVE_FROM_CART:
      const newCartData = state.cart.filter(
        item => item.id !== action.payload.id,
      );
      return {
        ...state,
        cart: newCartData,
        totalCost: calculateTotalAmount(newCartData),
      };
    case REMOVE_CART_ITEM:
      let savedCart = [...state.cart];
      const matchedCart = savedCart.find(
        product => product.id === action.payload.id,
      );
      if (matchedCart && matchedCart.count > 1) {
        savedCart = savedCart.map(item =>
          item.id === action.payload.id
            ? {...item, count: item.count - 1}
            : item,
        );
      } else {
        savedCart = savedCart.filter(item => item.id !== action.payload.id);
      }
      return {
        ...state,
        cart: savedCart,
        totalCost: calculateTotalAmount(savedCart),
      };

    case ADD_TO_FAVOURITE:
      const savedFavourite = [...state.favourite];
      const existingFavourite = savedFavourite.find(
        product => product.id === action.payload.id,
      );
      if (!existingFavourite?.id) {
        savedFavourite.push({...action.payload, like: true});
      } else {
      }
      return {
        ...state,
        favourite: savedFavourite,
      };
    case REMOVE_FROM_FAVOURITE:
      const newFavouriteData = state.favourite.filter(
        item => item.id !== action.payload.id,
      );
      return {
        ...state,
        favourite: newFavouriteData,
      };
    case CALCULATE_TOTAL_COST:
      return {
        ...state,
        totalCost: calculateTotalAmount(state.cart),
      };
    case EMPTY_CART:
      return {
        ...state,
        cart: [],
        totalCost: 0,
      };
    case CLEAR_ALL:
      return {
        cart: [],
        favourite: [],
        totalCost: 0,
        products: state.products,
      };
    default:
      return state;
  }
};
export default AppReducer;

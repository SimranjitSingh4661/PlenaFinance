import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
  SET_PRODUCTS,
  CLEAR_ALL,
  REMOVE_CART_ITEM,
  CALCULATE_TOTAL_COST,
  EMPTY_CART,
} from '../constants';

export function setProductsInStore(data) {
  return {
    type: SET_PRODUCTS,
    payload: data,
  };
}

export function addToCart(data) {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
}

export function removeFromCart(data) {
  return {
    type: REMOVE_FROM_CART,
    payload: data,
  };
}

export function removeCartItem(data) {
  return {
    type: REMOVE_CART_ITEM,
    payload: data,
  };
}

export function addToFavourite(data) {
  return {
    type: ADD_TO_FAVOURITE,
    payload: data,
  };
}

export function removeFromFavourite(data) {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: data,
  };
}

export function cleanRedux() {
  return {
    type: CLEAR_ALL,
  };
}

export function calculateCostOfCart() {
  return {
    type: CALCULATE_TOTAL_COST,
  };
}

export function checkOutCart() {
  return {
    type: EMPTY_CART,
  };
}

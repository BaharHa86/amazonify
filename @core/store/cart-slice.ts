import { createSlice } from '@reduxjs/toolkit';
import { getCookie, setCookie } from 'typescript-cookie';
import { cartItem } from '../types/types';

interface initialCartState {
  totalQuantity: number;
  totalPrice: number;
  cartItems: cartItem[];
}

let cookie;
if (typeof document !== 'undefined') {
  cookie = getCookie('cart');
}

const initialState: initialCartState = cookie
  ? JSON.parse(cookie)
  : { totalQuantity: 0, totalPrice: 0, cartItems: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.slug === newItem.slug
      );
      state.totalQuantity = state.totalQuantity + 1;
      state.totalPrice = state.totalPrice + newItem.price;
      if (!existingItem) {
        state.cartItems.push({ ...newItem, quantity: 1 });
      } else {
        existingItem.quantity = existingItem.quantity + 1;
      }
      setCookie('cart', JSON.stringify(state));
    },

    deleteItemFromCart(state, action) {
      const currentSlug = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.slug === currentSlug
      );
      console.log(existingItem);
      if (existingItem) {
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
        state.totalPrice =
          state.totalPrice - +existingItem.price * existingItem.quantity;
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.slug !== currentSlug
        );
      }
      setCookie('cart', JSON.stringify(state));
    },

    updateCartItem(state, action) {
      const currentSlug = action.payload.slug;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.slug === currentSlug
      );
      let newQuantity = action.payload.currentQuantity;
      if (existingItem) {
        if (newQuantity === 0) {
          state.totalQuantity = state.totalQuantity - existingItem.quantity;
          state.totalPrice =
            state.totalPrice - +existingItem.price * (+existingItem.quantity);
          state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem.slug !== currentSlug
          );
        } else {
          state.totalQuantity =
            state.totalQuantity - existingItem.quantity + newQuantity;
          state.totalPrice =
            state.totalPrice -
            existingItem.quantity * +existingItem.price +
            newQuantity * +existingItem.price;
          existingItem.quantity = newQuantity;
        }
      }
      setCookie('cart', JSON.stringify(state));
    },
  },
});

const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;

export default cartReducer;

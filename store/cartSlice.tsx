import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface CartState {
  cartItems: any[];
}
const initialState: CartState = {
  cartItems: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const item = state.cartItems?.find((p: any) => {
        return p.cartItem._id === action.payload.cartItem._id;
      });
      const itemSỉze = state.cartItems?.find((p: any) => {
        return p?.selectSize === action.payload.selectSize;
      });
      if (item) {
        if (itemSỉze) {
          itemSỉze.quantity =
            itemSỉze.quantity + parseInt(action.payload.quantity);
          itemSỉze.oneQuantityPrice = +(
            itemSỉze.cartItem.price * itemSỉze.quantity
          );
        } else {
          state.cartItems.push(action.payload);
        }
      } else {
        state.cartItems.push(action.payload);
      }
    },
    updateCart: (state, action) => {
      state.cartItems.map((cartItem) => {
        if (cartItem.uuid === action.payload.uuid) {
          if (action.payload.key === "quantity") {
            cartItem.quantity = action.payload.value;
            cartItem.oneQuantityPrice = +(
              cartItem.quantity * cartItem.cartItem.price
            ).toFixed(3);
          }
          if (action.payload.key === "selectSize") {
            cartItem.selectSize = action.payload.value;
          }
        }
        return cartItem;
      });
    },
    deleteCart: (state, action: PayloadAction<{ uuid: string }>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.uuid !== action.payload.uuid
      );
    },
    removeAllCart: (state, action) => {
      const listCart = action.payload.uuid
      state.cartItems = current(state).cartItems?.filter((item) => {
        return item.uuid === listCart
      })
    }
  },
});

export const { addCart, updateCart, deleteCart, removeAllCart } = cartSlice.actions;

export const selectBookList = (state: RootState) => state.cart.cartItems;

export default cartSlice.reducer;

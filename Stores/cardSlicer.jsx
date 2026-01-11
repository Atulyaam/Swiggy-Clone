import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cartSlice",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      const existingItem = state.items.find(
        (item) => String(item.id) === String(action.payload.id)
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          id: String(action.payload.id),
        });
      }
    },
    IncrementItems: (state, action) => {
      const element = state.items.find((item) => {
        return String(item.id) === String(action.payload.id);
      });
      if (element) {
        element.quantity++;
      }
    },
    DecrementItmes: (state, action) => {
      const element = state.items.find((item) => {
        return String(item.id) === String(action.payload.id);
      });

      if (element) {
        if (element.quantity > 1) {
          element.quantity--;
        } else {
          state.items = state.items.filter((item) => {
            return String(item.id) !== String(action.payload.id);
          });
        }
      }
    },
  },
});

export const { addItems, IncrementItems, DecrementItmes } = cart.actions;
export default cart.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  checkout: {},
  user: {
    status: false,
  },
};

export const rucheSlice = createSlice({
  name: "ruche",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find(
        (item) => item.Id === action.payload.Id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    addCheckOut: (state, action) => {
      if (
        ((action.payload.lastName !== "" && action.payload.firstName !== "") ||
          action.payload.companyName) &&
        (action.payload.email || action.payload.companyEmail)
      ) {
        state.checkout = action.payload;
        state.user.status = true;
      }
    },
    addMethodsToCheckout: (state, action) => {
      if (state.user.status === true) {
        state.checkout = action.payload;
      }
    },
    deleteItem: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item.Id !== action.payload
      );
    },
    increamentQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item.Id === action.payload.Id
      );
      if (item) {
        item.quantity++;
      }
    },
    decreamentQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item.Id === action.payload.Id
      );
      if (item) {
        item.quantity--;
      }
    },
  },
});

export const {
  addToCart,
  deleteItem,
  decreamentQuantity,
  increamentQuantity,
  addCheckOut,
  addMethodsToCheckout,
} = rucheSlice.actions;
export default rucheSlice.reducer;

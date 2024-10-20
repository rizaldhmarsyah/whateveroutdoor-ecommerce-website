import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: localStorage.getItem("carts")
      ? JSON.parse(localStorage.getItem("carts"))
      : [],

    totalPrice: 0,

    statusTab: false,
  },
  reducers: {
    addToCart(state, action) {
      const { productId, quantity, price } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );

      //jika product sudah ada dikeranjang yg ditambah adalah  quantitynya
      if (indexProductId >= 0) {
        state.items[indexProductId].quantity += quantity;
        state.items[indexProductId].price += price;
      } else {
        state.items.push({ productId, quantity, price });
      } //jika belum ada maka product dan quantity akan ditambahkan

      localStorage.setItem("carts", JSON.stringify(state.items));
    },
    changeQuantity(state, action) {
      const { productId, quantity, price } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );

      if (quantity > 0) {
        state.items[indexProductId].quantity = quantity;
        state.items[indexProductId].price = price;
      } else {
        // delete state.items[indexProductId];
        state.items = state.items.filter(
          (item) => item.productId !== productId
        );
      }

      localStorage.setItem("carts", JSON.stringify(state.items));
    },
    toogleStatusTab(state) {
      if (state.statusTab === false) {
        state.statusTab = true;
      } else {
        state.statusTab = false;
      }
    },
  },
});

export const { addToCart, changeQuantity, toogleStatusTab } = cartSlice.actions;
export default cartSlice.reducer;

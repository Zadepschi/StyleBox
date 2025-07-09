import { configureStore } from "@reduxjs/toolkit";
import clothes from "./clothesSlice";
import cart from "./cartSlice";

export default configureStore({
  reducer: {
    clothes,
    cart,
  },
});

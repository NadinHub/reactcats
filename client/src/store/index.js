import { configureStore } from "@reduxjs/toolkit";
import catsReducer from "./catsSlice";

export default configureStore({
  reducer: {
    cats: catsReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import numbersReducer from "./numbers/numbersSlice";

export default configureStore({
  reducer: {
    numbers: numbersReducer,
  },
});

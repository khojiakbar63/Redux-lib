import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter-slice";
import themeReducer from "./features/theme-slice";
import todoReducer from "./features/todo-slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    todo: todoReducer,
  },
});

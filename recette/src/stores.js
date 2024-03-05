import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./components/auth/authSlice";
import recipesSlice from "./components/slices/recipesSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    recipes: recipesSlice,
  },
});
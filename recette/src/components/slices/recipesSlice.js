import { createSlice } from '@reduxjs/toolkit';

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    formMode: '',
    recipes: [],
    selectedRecipe: null,
    ingredients: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setFormMode: (state, action) => {
      state.formMode = action.payload;
    },
    setRecipes: (state, action) => {
      state.recipes = action.payload;
    },
    setSelectedRecipe: (state, action) => {
      state.selectedRecipe = action.payload;
    },
    setIngredients: (state, action) => {
      state.ingredients = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setFormMode, setRecipes, setSelectedRecipe, setIngredients, setIsLoading, setError } = recipesSlice.actions;

export default recipesSlice.reducer;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFormMode, setSelectedRecipe, setIsLoading, setError } from '../../slices/recipesSlice';
import { database } from '../../services/firebaseConfig';

const RecipeForm = () => {
  const dispatch = useDispatch();
  const formMode = useSelector((state) => state.recipes.formMode);
  const selectedRecipe = useSelector((state) => state.recipes.selectedRecipe);
  const [recipe, setRecipe] = useState(selectedRecipe || { id: '', title: '', instructions: '', cookTime: 0, prepTime: 0, ingredients: [] });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setIsLoading(true));
    try {
      if (formMode === 'add') {
        await database.ref('recipes').push(recipe);
      } else if (formMode === 'edit') {
        await database.ref(`recipes/${recipe.id}`).set(recipe);
      }
      dispatch(setFormMode(''));
      dispatch(setSelectedRecipe(null));
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setIsLoading(false));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={recipe.title} onChange={handleInputChange} placeholder="Title" required />
      {/* Other input fields for instructions, cookTime, prepTime, and ingredients */}
      <button type="submit">{formMode === 'add' ? 'Add Recipe' : 'Update Recipe'}</button>
    </form>
  );
};

export default RecipeForm;

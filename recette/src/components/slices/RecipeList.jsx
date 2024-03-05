import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRecipes, setIsLoading, setError } from '../../slices/recipesSlice';
import { firebaseConfig } from '../../services/firebaseConfig';
import RecipeModal from './RecipeDisplay'; // Chemin vers ton composant RecipeModal


const RecipeList = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [mode, setMode] = useState('add'); // 'add', 'edit', or 'delete'
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.recipes);

  const openModal = (recipe, mode) => {
    setSelectedRecipe(recipe);
    setMode(mode);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
    setModalIsOpen(false);
  };

  useEffect(() => {
    dispatch(setIsLoading(true));
    const fetchRecipes = async () => {
      try {
        const snapshot = await database.ref('recipes').once('value');
        const recipesData = snapshot.val();
        const recipesArray = recipesData ? Object.values(recipesData) : [];
        dispatch(setRecipes(recipesArray));
      } catch (error) {
        dispatch(setError(error.message));
      }
      dispatch(setIsLoading(false));
    };
    fetchRecipes();
  }, [dispatch]);

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
         <h2>{recipe.title}</h2>
          {/* Display other recipe details */}
          
        </div>
        
      ))}
      <div>
      {/* ... Affiche la liste des recettes */}
      <button onClick={() => openModal(null, 'add')}>Ajouter une recette</button>
      {modalIsOpen && (
        <RecipeModal
          isOpen={modalIsOpen}
          closeModal={closeModal}
          recipe={selectedRecipe}
          mode={mode}
        />
      )}
    </div>
      
    </div>
    
  );
};

export default RecipeList;

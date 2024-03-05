const ProductDisplay = ({product, addToCart}) => {
  return ( 
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
      <p className="card-text">{product.description}</p>
      <p className="card-text">Prix : {product.price} €</p>
      <button className="btn btn-primary" onClick={() => addToCart(product)}>Ajouter au panier</button>
    </div>
  </div> 
  );
}
 
export default ProductDisplay;
// import React from 'react';
// import {Modal} from 'react-bootstrap'; // Ou importe le modal de React Bootstrap

// const RecipeModal = ({ isOpen, closeModal, recipe, mode }) => {
//     const [formValues, setFormValues] = useState({
//         title: recipe.title || '', // Utilise la valeur de la recette existante (ou une chaîne vide)
//         // ... Autres champs du formulaire (instructions, cookTime, prepTime, etc.)
//       });
    
//       const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormValues({ ...formValues, [name]: value });
//       };
    
//       const handleSubmit = (e) => {
//         e.preventDefault();
//         // Gère la soumission du formulaire (ajout, modification, etc.)
//         // Utilise les valeurs de formValues
//         // ...
//       };
    
//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={closeModal}
//       contentLabel="Formulaire de recette"
//     >
//       <h2>{mode === 'add' ? 'Ajouter une recette' : 'Modifier la recette'}</h2>
//       {/* Affiche le formulaire ici (ajout, modification ou suppression) */}
//       <form onSubmit={handleSubmit}>
//   <input
//     type="text"
//     name="title"
//     value={recipe.title}
//     onChange={handleInputChange}
//     placeholder="Title"
//     required
//   />
//   {/* Other input fields for instructions, cookTime, prepTime, and ingredients */}
//   <input
//     type="number"
//     name="cookTime"
//     value={recipe.cookTime}
//     onChange={handleInputChange}
//     placeholder="Cook Time (minutes)"
//     required
//   />
//   <input
//     type="number"
//     name="prepTime"
//     value={recipe.prepTime}
//     onChange={handleInputChange}
//     placeholder="Prep Time (minutes)"
//     required
//   />
//   {/* Ingredients input (assuming you have a list of ingredients) */}
//   {recipe.ingredients.map((ingredient) => (
//     <div key={ingredient.id}>
//       <input
//         type="text"
//         name={`ingredient-${ingredient.id}`}
//         value={ingredient.name}
//         onChange={(e) => handleIngredientChange(e, ingredient.id)}
//         placeholder="Ingredient"
//         required
//       />
//       {/* You can add more fields for quantity, measurement, etc. */}
//     </div>
//   ))}
//   {/* Instructions input */}
//   <textarea
//     name="instructions"
//     value={recipe.instructions}
//     onChange={handleInputChange}
//     placeholder="Instructions"
//     required
//   />
//   <button type="submit">
//     {formMode === 'add' ? 'Add Recipe' : 'Update Recipe'}
//   </button>
// </form>

//       {/* Utilise la propriété "recipe" pour pré-remplir les champs si nécessaire */}
//       {/* ... Autres éléments du formulaire */}
//       <button onClick={closeModal}>Fermer</button>
//     </Modal>
//   );
// };

// export default RecipeModal;

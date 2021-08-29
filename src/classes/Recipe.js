const ingredient = require('./Ingredient');

class Recipe {
  constructor(recipeData) {
    this.id = recipeData.id;
    this.image = recipeData.image;
    this.ingredients = recipeData.ingredients;
    this.instructions = recipeData.instructions;
    this.name = recipeData.name;
    this.tags = recipeData.tags;
  };

  getIngredientNames() {
    let ingredientIds = [];
    this.ingredients.forEach((ingredient) => {
      ingredientIds.push(ingredient.id);
    });
    let ingredientsForRecipe = ingredientData.filter((id) => ingredient.id === id)
    return ingredientsObjects;
// Needs to go in to the recipe.js file and find the
// ingredients that are used in the recipe and return them.


// Search the ingredientsData file for each of the ingredient
//   id's, then grab the name and put that in an array.

// Return the array


  };

  getIngredientCosts() {

  };

  getRecipeInstructions() {
    return this.instructions;
  };
};

export default Recipe;

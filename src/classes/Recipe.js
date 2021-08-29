const ingredient = require('./Ingredient');
import Ingredient from './Ingredient';
import ingredientsData from '../data/ingredients.js';


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
    let ingredientsNamesForRecipe;
    let ingredientId;
    // this.ingredients.forEach((ingredient) => {

    ingredientId = this.ingredients.map((ingredient) => {
      ingredientsNamesForRecipe = ingredientsData.filter((ing) => {
        return ing.id === ingredientId;
      });
    });
    console.log(ingredientsNamesForRecipe);
    return ingredientsNamesForRecipe;
// We want to grab the id from the recipes.js file.

// Create an array of the ids we grabbed from the recipe.js file

// We want to filter through the ingredients.js file and match the id from
// the new array to the id in the ingredients.js file.

// Once we have a match we want to pull the name from that object and store
// them in an array.
  };

  getIngredientCosts() {

  };

  getRecipeInstructions() {
    return this.instructions;
  };
};

export default Recipe;

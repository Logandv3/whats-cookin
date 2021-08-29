const ingredient = require('./Ingredient');
// const ingredientData = require('../data/ingredients.js');
import ingredientData from '../data/ingredients.js';
console.log(ingredientData);
console.log('ingredient', ingredient);


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
    console.log(ingredient);
    let ingredientsNamesForRecipe = ingredient.ingredientData.filter((element) => element.id === ingredientIds);
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

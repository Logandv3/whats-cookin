// const ingredient = require('./Ingredient');
// import Ingredient from './Ingredient';
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
    let ingredientsNamesForRecipe = [];

    this.ingredients.map((ingredient) => {
      let ingrID = ingredientsData.find((ing) => ing.id === ingredient.id);
      // why does filter return 11 'undefined' but
      //find returns all 11 correctly?
      // Find is looking at each map ingredient
      //(works because each only has 1 id)
      ingredientsNamesForRecipe.push(ingrID.name);
    });
    // console.log('will be ingredient names array', ingredientsNamesForRecipe);
    return ingredientsNamesForRecipe;
  }

  getIngredientCosts() {
    // let ingrCost;
    // let total = this.ingredients.reduce(() => {

    // })
  }

  getRecipeInstructions() {
    return this.instructions;
  }
};

export default Recipe;

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
    // console.log('this.ingredients', this.ingredients);
    // console.log('this.ingredients.quantity at zero', this.ingredients[0].quantity.amount);
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
    let ingredientAmounts = [];
    let costPerUnit = [];
    ingredientAmounts = this.ingredients.map(ingredient => {
      return ingredient.quantity.amount;
    })
    // costPerUnit = ingredientsData.map(ingredient => {
    //   return ingredient.estimatedCostInCents;
    // })
    costPerUnit = ingredientsData.map(ingredient => {
      return ingredient.estimatedCostInCents;
    })
    // console.log('ingred amounts:', ingredientAmounts);
    console.log('cost per unit:', costPerUnit);
    return ingredientAmounts;
  }

  // getIngredientCosts() {
  //   // let ingrCost;
  //   // let total = this.ingredients.reduce(() => {

  //   // })
  // }
  // Access recipe data file for ingredients.quantity.amount

  getRecipeInstructions() {
    return this.instructions;
  }
};

export default Recipe;

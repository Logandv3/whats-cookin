// import recipeData from '../data/recipes.js';
import ingredientsData from '../data/ingredients.js';

class Recipe {
  constructor(recipeData) {
    this.id = recipeData.id;
    this.image = recipeData.image;
    this.ingredients = recipeData.ingredients;
    this.instructions = recipeData.instructions;
    this.name = recipeData.name;
    this.tags = recipeData.tags;
    this.ingredientInfo = [];
    this.moreIngredientInfo = this.getIngredientInfo();
  }

  getIngredientInfo() {
    console.log(this.ingredientInfo);
    this.ingredients.forEach(ingredient => {
      ingredientsData.forEach(ingred => {
        if (ingredient.id === ingred.id) {
          this.ingredientInfo.push({
            id: ingredient.id,
            name: ingred.name,
            quantity: ingredient.quantity.amount,
            estimatedCostInCents: ingred.estimatedCostInCents
          });
        }
      })
    })
    return this.ingredientInfo;
  }

  getIngredientNames() {
    let ingredientsNamesForRecipe = [];

    this.ingredients.map((ingredient) => {
      let ingrID = ingredientsData.find(ing => ing.id === ingredient.id);
      ingredientsNamesForRecipe.push(ingrID.name);
    });

    return ingredientsNamesForRecipe;
  }

  getIngredientCosts() {
    let total = this.ingredientInfo.reduce((acc, currentIng) => {
      acc += Math.round(currentIng.quantity *
        currentIng.estimatedCostInCents) / 100;
      return acc;
    }, 0);
    return total;
    // console.log('total cost:', total)
  }

  getRecipeInstructions() {
    let instructionDetail = [];
    this.instructions.forEach(instruction => {
      let detail = instruction.instruction;
      let number = instruction.number;
      instructionDetail.push(number, detail);
    });
    // console.log('instruction array:', instructionArray);
    return instructionDetail;
  }
}

export default Recipe;

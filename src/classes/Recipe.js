class Recipe {
  constructor(recipeData, ingredientsData) {
    this.id = recipeData.id;
    this.image = recipeData.image;
    this.ingredients = recipeData.ingredients;
    this.instructions = recipeData.instructions;
    this.name = recipeData.name;
    this.tags = recipeData.tags;
    this.ingredientsData = ingredientsData;
    this.ingredientInfo = [];
    this.moreIngredientInfo = this.getIngredientInfo();
  }

  getIngredientInfo() {
    this.ingredients.forEach(ingredient => {
      this.ingredientsData.forEach(ingred => {
        if (ingredient.id === ingred.id) {
          this.ingredientInfo.push({
            id: ingredient.id,
            name: ingred.name,
            quantity: ingredient.quantity.amount,
            unit: ingredient.quantity.unit,
            estimatedCostInCents: ingred.estimatedCostInCents
          });
        };
      });
    });
    return this.ingredientInfo;
  };

  getIngredientNames() {
    let ingredientsNamesForRecipe = [];

    this.ingredients.map((ingredient) => {
      let ingrID = this.ingredientsData.find(ing => ing.id === ingredient.id);
      ingredientsNamesForRecipe.push(ingrID.name);
    });
    return ingredientsNamesForRecipe;
  };

  getIngredientCosts() {
    let total = this.ingredientInfo.reduce((acc, currentIng) => {
      acc += Math.round((currentIng.quantity *
        currentIng.estimatedCostInCents) / 100);
      return acc;
    }, 0);
    return total;
  };

  getRecipeInstructions() {
    let instructionDetail = [];
    this.instructions.forEach(instruction => {
      let detail = instruction.instruction;
      let number = instruction.number;
      instructionDetail.push(`<li>${detail}<br>`);
    });
    return instructionDetail.join(' ');
  };
};

export default Recipe;

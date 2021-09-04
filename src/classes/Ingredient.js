import ingredientsData from '../data/ingredients.js';

class Ingredient {
  constructor(ingredientData) {
    this.id = ingredientData.id;
    this.name = ingredientData.name;
    this.estimatedCostInCents = ingredientData.estimatedCostInCents;
  };
};

export default Ingredient;

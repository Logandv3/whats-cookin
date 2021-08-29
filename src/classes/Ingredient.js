class Ingredient {
  constructor(ingredientData) {
    this.id = ingredientData.id;
    this.name = ingredientData.name;
    this.estimatedCostInCents = ingredientData.estimatedCostInCents;
    this.ingredientData = ingredientData;
  };
};

export default Ingredient;

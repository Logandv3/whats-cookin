import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
import Ingredient from '../src/classes/Ingredient';

describe('Ingredient', () => {
  let ingredientData;
  let ingredient;

  beforeEach(() => {
    ingredientData = {
      "id": 11215,
      "name": "whole garlic clove",
      "estimatedCostInCents": 220
    };
    ingredient = new Ingredient(ingredientData);
  });
  it('Should be a function', () => {
    expect(Ingredient).to.be.a('function');
  });
  it('Should be an instance of Ingredient', () => {
    expect(ingredient).to.be.an.instanceof(Ingredient);
  });
});

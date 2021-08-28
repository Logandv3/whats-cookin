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
  it('Should have an ingredient id', () => {
    expect(ingredient.id).to.equal(ingredientData.id);
  });
  it('Should have a name', () => {
    expect(ingredient.name).to.equal(ingredientData.name);
  });
  it('Should have an estimated cost in cents', () => {
    expect(ingredient.estimatedCostInCents).to.equal(ingredientData.estimatedCostInCents);
  });
});

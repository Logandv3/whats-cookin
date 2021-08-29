import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
import Ingredient from '../src/classes/Ingredient';

describe('Ingredient', () => {
  let ingredientData;
  let ingredient;

  beforeEach(() => {
    ingredientData = [
      {
      "id": 20081,
      "name": "wheat flour",
      "estimatedCostInCents": 142
    },
    {
      "id": 18372,
      "name": "bicarbonate of soda",
      "estimatedCostInCents": 582
    },
    {
      "id": 1123,
      "name": "eggs",
      "estimatedCostInCents": 472
    },
    {
      "id": 19335,
      "name": "sucrose",
      "estimatedCostInCents": 902
    },
    {
      "id": 19206,
      "name": "instant vanilla pudding",
      "estimatedCostInCents": 660
    },
    {
      "id": 19334,
      "name": "brown sugar",
      "estimatedCostInCents": 559
    },
    {
      "id": 2047,
      "name": "salt",
      "estimatedCostInCents": 280
    },
    {
      "id": 1012047,
      "name": "fine sea salt",
      "estimatedCostInCents": 528
    },
    {
      "id": 10019903,
      "name": "semi sweet chips",
      "estimatedCostInCents": 253
    },
    {
      "id": 1145,
      "name": "unsalted butter",
      "estimatedCostInCents": 617
    },
    {
      "id": 2050,
      "name": "vanilla",
      "estimatedCostInCents": 926
    }
  ];
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

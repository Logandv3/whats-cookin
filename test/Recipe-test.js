import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
import Ingredient from '../src/classes/Ingredient';
import User from '../src/classes/User';
import Pantry from '../src/classes/Pantry';
import {ingredientsData} from '../src/data/ingredients.js';
import {usersData} from '../src/data/users.js';

describe('Recipe', () => {
  let recipeData;
  let ingredientsData;
  let recipe;
  let user;
  let newPantry;

  beforeEach(() => {
    recipeData = {
      "id": 595736,
      "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
      "ingredients": [
        {
          "id": 20081,
          "quantity": {
            "amount": 1.5,
            "unit": "c"
          }
        },
        {
          "id": 18372,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        },
        {
          "id": 1123,
          "quantity": {
            "amount": 1,
            "unit": "large"
          }
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 0.5,
            "unit": "c"
          }
        },
        {
          "id": 19206,
          "quantity": {
            "amount": 3,
            "unit": "Tbsp"
          }
        },
        {
          "id": 19334,
          "quantity": {
            "amount": 0.5,
            "unit": "c"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        },
        {
          "id": 1012047,
          "quantity": {
            "amount": 24,
            "unit": "servings"
          }
        },
        {
          "id": 10019903,
          "quantity": {
            "amount": 2,
            "unit": "c"
          }
        },
        {
          "id": 1145,
          "quantity": {
            "amount": 0.5,
            "unit": "c"
          }
        },
        {
          "id": 2050,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        }
      ],
      "instructions": [
        {
          // eslint-disable-next-line max-len
          "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
          "number": 1
        },
        {
          "instruction": "Add egg and vanilla and mix until combined.",
          "number": 2
        },
        {
          // eslint-disable-next-line max-len
          "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
          "number": 3
        },
        {
          // eslint-disable-next-line max-len
          "instruction": "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
          "number": 4
        },
        {
          // eslint-disable-next-line max-len
          "instruction": "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
          "number": 5
        },
        {
          // eslint-disable-next-line max-len
          "instruction": "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.",
          "number": 6
        }
      ],
      "name": "Loaded Chocolate Chip Pudding Cookie Cups",
      "tags": [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]
    };
    ingredientsData = [{
          "id": 20081,
          "name": "wheat flour",
          "estimatedCostInCents": 142}, {"id": 18372, "name": "bicarbonate of soda", "estimatedCostInCents": 582},{
          "id": 1123,
          "name": "eggs",
          "estimatedCostInCents": 472
        }];
    recipe = new Recipe(recipeData, ingredientsData);
    user = new User("Ephraim Goyette", 2, [
      { "ingredient": 20081, "amount": 3 },
      { "ingredient": 18372, "amount": 0.4 },
      { "ingredient": 1123, "amount": 8 },
      { "ingredient": 19335, "amount": 6 },
      { "ingredient": 19206, "amount": 10 }
    ],
    [{
          "id": 20081,
          "name": "wheat flour","estimatedCostInCents": 142}, {"id": 18372, "name": "bicarbonate of soda", "estimatedCostInCents": 582},{
          "id": 1123,
          "name": "eggs",
          "estimatedCostInCents": 472
        }]);
      newPantry = new Pantry(user);
  });

  it('Should be a function', () => {
    expect(Recipe).to.be.a('function');
  });

  it('Should be an instance of Recipe', () => {
    expect(recipe).to.be.an.instanceof(Recipe);
  });

  it('Should have an id', () => {
    expect(recipe.id).to.equal(recipeData.id);
  });

  it('Should have an image', () => {
    expect(recipe.image).to.equal(recipeData.image);
  });

  it('Should have an array of ingredients', () => {
    expect(recipe.ingredients).to.deep.equal(recipeData.ingredients);
  });

  it('Should have an array of instructions', () => {
    expect(recipe.instructions).to.deep.equal(recipeData.instructions);
  });

  it('Should have a name', () => {
    expect(recipe.name).to.equal(recipeData.name);
  });

  it('Should have an array of tags', () => {
    expect(recipe.tags).to.deep.equal(recipeData.tags);
  });

  it('Should return an array of ingredient names', () => {
    expect(recipe.getIngredientNames()).to.deep.equal([
      'wheat flour',
      'bicarbonate of soda',
      'eggs',
      'sucrose',
      'instant vanilla pudding',
      'brown sugar',
      'salt',
      'fine sea salt',
      'semi sweet chips',
      'unsalted butter',
      'vanilla'
    ])
  });

  it('Should be able to calculate ingredient cost', () => {
    expect(recipe.getIngredientCosts()).to.equal(177.77)
  });

  it('Should be able to construct ingredient info', () => {
    recipe.getIngredientInfo();
    expect(recipe.ingredientInfo[1]).to.deep.equal({
      id: 18372,
      name: 'bicarbonate of soda',
      quantity: 0.5,
      estimatedCostInCents: 582
    })
  });

  it('Should be able to return instructions', () => {
    expect(recipe.getRecipeInstructions()).to.deep.equal(
      [
        1,
        // eslint-disable-next-line max-len
        "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
        2,
        "Add egg and vanilla and mix until combined.",
        3,
        // eslint-disable-next-line max-len
        "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
        4,
        // eslint-disable-next-line max-len
        "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
        5,
        // eslint-disable-next-line max-len
        "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
        6,
        // eslint-disable-next-line max-len
        "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.",
      ])
  });

  it('Should be able to compare ingredients on hand in pantry to what\'s necessary for recipe', () => {
    expect(recipe.checkPantryForIngredientAmounts(user)[0]).to.deep.equal({recipeAmount: 1.5, pantryAmount: 3, difference: 1.5});
  });

  it.only('Should be told how much of an ingredient is still needed for a recipe', () => {
    expect(recipe.checkPantryForIngredientAmounts(user)[0].difference).to.equal(1.5);
    expect(recipe.checkPantryForIngredientAmounts(user)[1].difference).to.equal(-0.1);
  });
});

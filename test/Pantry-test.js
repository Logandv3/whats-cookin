import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
import User from '../src/classes/User';
import Pantry from '../src/classes/Pantry';
import {ingredientsData} from '../src/data/ingredients.js';
import {usersData} from '../src/data/users.js';

describe('Pantry', () => {
  let recipeData, ingredientsData, user, recipe, pantry;
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
    }];
    recipe = new Recipe(recipeData, ingredientsData);
    user = new User("Ephraim Goyette", 2,
    [
      { "ingredient": 20081, "amount": 5 },
      { "ingredient": 18372, "amount": 0.4 },
      { "ingredient": 1123, "amount": 8 },
      { "ingredient": 19335, "amount": 6 },
      { "ingredient": 19206, "amount": 10 }
    ],
    [
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
      }
    ]);
    pantry = new Pantry(user);
  });

  it('Should be a function', () => {
    expect(Pantry).to.be.a('function');
  });

  it('Should be able to view ingredients inside pantry', () => {
    expect(pantry.pantry).to.deep.equal([
      { "ingredient": 6150, "amount": 3 },
      { "ingredient": 1032009, "amount": 7 },
      { "ingredient": 1082047, "amount": 8 },
      { "ingredient": 1034053, "amount": 6 },
      { "ingredient": 2050, "amount": 10 }
    ]);
  });

  it('Should be able to check pantry for ingredient amounts', () => {
    expect(pantry.pantry[0].amount).to.equal(3);
  });

  it('Should not allow the user to cook a recipe unless they have enough ingredients', () => {
    expect(pantry.checkCookability(recipe, user)).to.equal(false);
  });

  it('Should remove ingredients from pantry', () => {
    pantry.removeFromPantry(recipe, user);
    expect(pantry.pantry).to.deep.equal([
      { ingredient: 20081, amount: 3.5 },
      { ingredient: 18372, amount: -0.09999999999999998 },
      { ingredient: 1123, amount: 7 },
      { ingredient: 19335, amount: 6 },
      { ingredient: 19206, amount: 10 }
    ]);
  });

  it('Should add more ingredients to the pantry stock', () => {
    pantry.addToPantry(10, 20081, user);
    expect(pantry.pantry[0].amount).to.equal(15);
  });

  it.only('Should add an ingredient to the pantry', () => {
    pantry.addToPantry(3, 11215, user);
    expect(pantry.pantry[5].amount).to.equal(3);
  });
});


// Pantry holds a predetermined (by the API) amount of each ingredient needed to cook a recipe.
// If the pantry doesn't have enough of a particular ingredient, then the user:
// SHOULD NOT: be able to cook the recipe
// SHOULD: be able to add more ingredient to the pantry

// View user pantry details, populate entire pantry, add items to pantry that aren't in recipes,
// update amounts


// Populate individual recipe with pantry amounts, personalized warning string if there is not
// enough of a particular ingredient (or two)

// Button that removes ingredients from pantry is disabled if the user can't cook the recipe
// because of the lack of ingredients

// Link from individual recipe page brings us to pantry to update

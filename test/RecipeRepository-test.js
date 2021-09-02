import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';

describe('Recipe Repository', () => {
  let recipeRepo; //'the cookbook'
  let recipeData;
  let ingredientsData;
  beforeEach(() => {
    recipeData = [
    {
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
    },
    {
      "id": 678353,
      "image": "https://spoonacular.com/recipeImages/678353-556x370.jpg",
      "ingredients": [
        {
          "id": 1009016,
          "quantity": {
            "amount": 1.5,
            "unit": "cups"
          }
        },
        {
          "id": 9003,
          "quantity": {
            "amount": 2,
            "unit": ""
          }
        },
        {
          "id": 20027,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 1002046,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 1,
            "unit": "clove"
          }
        },
        {
          "id": 1012046,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 19911,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 16112,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 10010062,
          "quantity": {
            "amount": 24,
            "unit": "ounce"
          }
        },
        {
          "id": 1102047,
          "quantity": {
            "amount": 4,
            "unit": "servings"
          }
        },
        {
          "id": 16124,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 1016168,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!",
          "number": 1
        }
      ],
      "name": "Maple Dijon Apple Cider Grilled Pork Chops",
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ]
    }];
    ingredientsData = [
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
          "id": 20011,
          "name": "buck wheat flour",
          "estimatedCostInCents": 865
      }];
    recipeRepo = new RecipeRepository(recipeData, ingredientsData);
  });
  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });
  it('Should be an instance of Recipe Repository', () => {
    expect(recipeRepo).to.be.an.instanceof(RecipeRepository);
  });
  it('Should be able to instantiate with recipe data', () => {
    expect(recipeRepo.recipes).to.deep.equal([
    {
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
    },
    {
    "id": 678353,
    "image": "https://spoonacular.com/recipeImages/678353-556x370.jpg",
    "ingredients": [
      {
        "id": 1009016,
        "quantity": {
          "amount": 1.5,
          "unit": "cups"
        }
      },
      {
        "id": 9003,
        "quantity": {
          "amount": 2,
          "unit": ""
        }
      },
      {
        "id": 20027,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      },
      {
        "id": 1002046,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      },
      {
        "id": 11215,
        "quantity": {
          "amount": 1,
          "unit": "clove"
        }
      },
      {
        "id": 1012046,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      },
      {
        "id": 19911,
        "quantity": {
          "amount": 0.25,
          "unit": "cup"
        }
      },
      {
        "id": 16112,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      },
      {
        "id": 10010062,
        "quantity": {
          "amount": 24,
          "unit": "ounce"
        }
      },
      {
        "id": 1102047,
        "quantity": {
          "amount": 4,
          "unit": "servings"
        }
      },
      {
        "id": 16124,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      },
      {
        "id": 1016168,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!",
        "number": 1
      }
    ],
    "name": "Maple Dijon Apple Cider Grilled Pork Chops",
    "tags": [
      "lunch",
      "main course",
      "main dish",
      "dinner"
    ]
  }]);
  });
  it.skip('Should instatiate with ingredient data', () => {
    expect(recipeRepo.ingredients).to.deep.equal([
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
        }]);
  });
  it('Should be a string', () => {
    expect(recipeRepo.recipes[0].name).to.be.a('string');
  });
  it('Should filter recipes by their tags', () => {
    expect(recipeRepo.filterByTag('snack')).to.deep.equal([{
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
              "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
              "number": 1
            },
            {
              "instruction": "Add egg and vanilla and mix until combined.",
              "number": 2
            },
            {
              "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
              "number": 3
            },
            {
              "instruction": "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
              "number": 4
            },
            {
              "instruction": "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
              "number": 5
            },
            {
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
        }]);
  });
  it('Should filter recipes by their name or ingredients', () => {
    //need to pass searchInput
    //should return all of the recipes that include flour
    expect(recipeRepo.searchRecipes('flour')).to.deep.equal([{
            "id": 20081,
            "name": "wheat flour",
            "estimatedCostInCents": 142
          },
          {
            "id": 20011,
            "name": "buck wheat flour",
            "estimatedCostInCents": 865
          }]);
  });
})

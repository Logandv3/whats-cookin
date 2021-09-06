import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
import User from '../src/classes/User';

describe('User', () => {
  let user, recipeA, recipeB;
  beforeEach(() => {
    user = new User("Ephraim Goyette", 2, [
      { "ingredient": 6150, "amount": 3 },
      { "ingredient": 1032009, "amount": 7 },
      { "ingredient": 1082047, "amount": 8 },
      { "ingredient": 1034053, "amount": 6 },
      { "ingredient": 2050, "amount": 10 }
    ])
    recipeA = new Recipe(
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
      }
    );
    recipeB = new Recipe(
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
      }
    );
  })
  it('Should be a function', () => {
    expect(User).to.be.a('function');
  });
  it('Should be an instance of User', () => {
    expect(user).to.be.an.instanceof(User);
  });
  it('Should store the name of the user', () => {
    expect(user.name).to.equal("Ephraim Goyette");
  });
  it('Should store the ID of the user', () => {
    expect(user.id).to.equal(2);
  });
  it('Should be able to store pantry items', () => {
    expect(user.pantry).to.deep.equal([
      { "ingredient": 6150, "amount": 3 },
      { "ingredient": 1032009, "amount": 7 },
      { "ingredient": 1082047, "amount": 8 },
      { "ingredient": 1034053, "amount": 6 },
      { "ingredient": 2050, "amount": 10 }
    ])
  });
  it('Should be able to add favorite recipes', () => {
    user.addToFavoriteRecipes(recipeA);
    expect(user.favoriteRecipes).to.deep.equal([recipeA]);
    user.addToFavoriteRecipes(recipeB);
    expect(user.favoriteRecipes).to.deep.equal([recipeA, recipeB]);
  });
  it('Should be able to remove favorite recipes', () => {
    user.addToFavoriteRecipes(recipeA);
    user.addToFavoriteRecipes(recipeB);
    user.removeFromFavoriteRecipes(recipeA);
    expect(user.favoriteRecipes).to.deep.equal([recipeB]);
  });
  it('Should be able to add recipe to weekly list', () => {
    expect(user.recipesToCook).to.deep.equal([]);
    user.addToRecipesToCook(recipeB);
    expect(user.recipesToCook).to.deep.equal([recipeB]);
  });
  it('Should be able to remove recipes from weekly list', () => {
    user.addToRecipesToCook(recipeB);
    expect(user.recipesToCook).to.deep.equal([recipeB]);
    user.removeFromRecipesToCook(recipeB);
    expect(user.recipesToCook).to.deep.equal([]);
  });

  it('Should be able to filter favorites by tags', () => {
    user.addToFavoriteRecipes(recipeA);
    user.addToFavoriteRecipes(recipeB);
    user.filterFavoriteRecipeTags(["lunch"])
    expect(user.filterFavoriteRecipeTags(["dinner"])).to.deep.equal([recipeB]);
  });

  it('Should be able to filter favorites by name', () => {
    user.addToFavoriteRecipes(recipeA);
    user.addToFavoriteRecipes(recipeB);
    expect(user.filterFavoriteRecipeByName(["Apple"])).to.deep.equal([recipeB]);
  });

  it('Should be able to filter favorites by ingredient', () => {
    user.addToFavoriteRecipes(recipeA);
    user.addToFavoriteRecipes(recipeB);
    expect(user.filterFavoriteRecipeByIngred(["Maple"])).
      to.deep.equal([recipeB]);
  })
})
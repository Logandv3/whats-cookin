import { userPantry } from '../apiCalls'

class Pantry {
  constructor(currentUser, ingredientsData) {
    this.pantry = currentUser.pantry;
    this.ingredientsData = ingredientsData;
    this.pantryItemInfo = [];
    this.createItemInfo = this.getPantryItemInfo();
  };

  getPantryItemInfo () {
    this.pantry.forEach((item) => {
      this.ingredientsData.forEach((ingredient) => {
        if (item.ingredient === ingredient.id) {
          this.pantryItemInfo.push({
            name: ingredient.name,
            amount: item.amount
          });
        };
      });
    });
    return this.pantryItemInfo;
  };

  checkCookability(recipe, currentUser) {
    let ingredientStatus = recipe.checkPantryForIngredientAmounts(currentUser);

    //notEnoughInPantry is an array being filled with ingredients of which we don't have enough

    let notEnoughInPantry = ingredientStatus.filter(ingredient => ingredient.difference < 0);

    //if there is ANYTHING in notEnoughInPantry, then the recipe can't be cooked, and false is returned

    return !notEnoughInPantry.length ? true : false;
  };

  removeFromPantry(recipe, currentUser) {
    let thisPantry = recipe.ingredientInfo.filter(ingred => {
      this.pantry.forEach(ingredient => {
        if (ingredient.ingredient === ingred.id) {
          // ingredient.amount -= ingred.quantity;
          let pantryUpdate = {
            userID: currentUser.id,
            ingredientID: ingred.id,
            ingredientModification: -Math.abs(ingred.quantity)
          }
          userPantry(pantryUpdate)
        };
      });
      return this.pantry;
    });
    console.log('this pantry:', this.pantry);
  };

  addToPantry(inputValue, ingredientId, currentUser) {
    this.pantry.forEach(ingredient => {
      if (ingredient.ingredient === ingredientId) {
        ingredient.amount += inputValue;
      }
    });

    let pantryIngredientIds = this.pantry.reduce((acc, ingredient) => {
      acc.push(ingredient.ingredient);
      return acc;
    }, []);

    if (!pantryIngredientIds.includes(ingredientId)) {
      this.pantry.push({ ingredient: ingredientId, amount: inputValue });
    }
    return this.pantry;
  };
};

export default Pantry;

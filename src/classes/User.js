import ingredientsData from '../data/ingredients.js';
// NEEDED for converting ingredients?

class User {
  constructor(name, id, pantry) {
    this.name = name;
    this.id = id;
    this.pantry = pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  addToFavoriteRecipes(recipeAdd) {
    if (!this.favoriteRecipes.includes(recipeAdd)) {
      this.favoriteRecipes.push(recipeAdd)
      console.log(this.favoriteRecipes);
    }
  }

  removeFromFavoriteRecipes(recipeOut) {
    this.favoriteRecipes.forEach(recipe => {
      if (recipeOut.name === recipe.name) {
        this.favoriteRecipes.splice(this.favoriteRecipes.indexOf(recipeOut), 1)
        console.log(this.favoriteRecipes);
      }
    })
  }

  addToRecipesToCook(recipeAdd) {
    if (!this.recipesToCook.includes(recipeAdd)) {
      this.recipesToCook.push(recipeAdd)
    }
  }

  removeFromRecipesToCook(recipeOut) {
    this.recipesToCook.forEach(recipe => {
      if (recipeOut.name === recipe.name) {
        this.recipesToCook.splice(recipeOut, 1)
      }
    })
  }

  filterFavoriteRecipeTags(tags) {
    let matchTags = [];
    this.favoriteRecipes.forEach(recipe => {
      tags.forEach(tag => {
        if (recipe.tags.includes(tag)) {
          matchTags.push(recipe);
        }
      })
    })
    if (!matchTags.length) {
      return "No recipes match criteria."
    } else {
      return matchTags
    }
  }

  filterFavoriteRecipeByName(name) {
    let matchName = [];
    this.favoriteRecipes.forEach(recipe => {
      if (recipe.name.includes(name)) {
        matchName.push(recipe);
      }
    })
    if (!matchName.length) {
      return "No recipes match criteria."
    } else {
      return matchName
    }
  }

  filterFavoriteRecipeByIngred(ingredient) {
    let matchIngred = [];
    // console.log('ingred.name', ingredientsData
    //   .find(ingred => ingred.name.includes('flour')));

    let matchedName = ingredientsData.find(ingred =>
      ingred.name.includes(ingredient))

    this.favoriteRecipes.forEach(recipe => {
      recipe.ingredients.filter(ingredient => {
        if (ingredient.id === matchedName.id) {
          return matchIngred.push(recipe)
        }
      })
    })
    if (!matchIngred.length) {
      return "No recipes match criteria."
    } else {
      return matchIngred
    }
  }

}

export default User;

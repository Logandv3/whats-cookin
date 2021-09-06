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
    }
  }

  removeFromFavoriteRecipes(recipeOut) {
    this.favoriteRecipes.forEach(recipe => {
      if (recipeOut.name === recipe.name) {
        this.favoriteRecipes.splice(recipeOut, 1)
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
      return "No recipes match criteria"
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
      return "No recipes match criteria"
    } else {
      return matchName
    }
  }

  filterFavoriteRecipeByIngred(ingredient) {
    let matchIngred = [];
    this.favoriteRecipes.forEach(recipe => {

      if (recipe.ingredients.includes(ingredient)) {
        matchIngred.push(recipe);
      }
    })
    if (!matchIngred.length) {
      return "No recipes match criteria"
    } else {
      return matchIngred
    }

  }

}

export default User;
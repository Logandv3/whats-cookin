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
    }
  }

  removeFromFavoriteRecipes(recipeOut) {
    this.favoriteRecipes.forEach(recipe => {
      if (recipeOut.name === recipe.name) {
        this.favoriteRecipes.splice(this.favoriteRecipes.indexOf(recipeOut), 1)
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
        this.recipesToCook.splice(this.recipesToCook.indexOf(recipeOut), 1)
      }
    })
  }

  filterFavoriteRecipeTags(inputTag) {
    let tagged = this.favoriteRecipes.filter(recipe => recipe.tags.includes(inputTag));
    return tagged;
  }

  filterFavoriteRecipeByName(searchInput) {
    let matchName = [];
    this.favoriteRecipes.forEach(recipe => {
      if (recipe.name.toLowerCase().includes(searchInput.toLowerCase())) {
        matchName.push(recipe);
        console.log('recipe', recipe);
      }
    })
    // if (!matchName.length) {
    //   return "No recipes match criteria."
    // } else {
      return matchName;
    // }
  }

  searchFavorites(searchInput) {
    let nameSearched = this.filterFavoriteRecipeByName(searchInput);
    let ingredientSearched = this.filterFavoriteRecipeByIngred(searchInput);
    let recipesWithSearched = nameSearched.concat(ingredientSearched);
    let favsWithoutDup = [...new Set(recipesWithSearched)];

    console.log('nameSearched', nameSearched);
    console.log('ingredientSearched', ingredientSearched);
    console.log('recipesWithSearched', recipesWithSearched);
    console.log('favsWithoutDup', favsWithoutDup);
    return favsWithoutDup;
  };

  filterFavoriteRecipeByIngred(searchInput) {
    let matchIngred = [];
    // console.log('ingred.name', ingredientsData
    //   .find(ingred => ingred.name.includes('flour')));

    let matchedName = ingredientsData.filter(ingred => {
      if (!ingred.name) {
        ingred.name = 'Not Found'
      }
      return ingred.name.includes(searchInput.toLowerCase())
    });

    this.favoriteRecipes.forEach(recipe => {
      recipe.ingredients.filter(ingredient => {
        matchedName.forEach(id => {
          if (ingredient.id === id.id) {
            return matchIngred.push(recipe)
          }})
        })
      })

    // if (!matchIngred.length) {
    //   return "No recipes match criteria."
    // } else {
      return matchIngred;
    // }
  }

}

export default User;

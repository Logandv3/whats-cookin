import recipeData from '../data/recipes.js';
import ingredientsData from '../data/ingredients.js';

class RecipeRepository {
  constructor(recipeData, ingredientsData) {
    this.recipes = recipeData;
    this.ingredients = ingredientsData;
  }

  filterByTag(inputTag) {
    let tagged = this.recipes.filter(recipe => recipe.tags.includes(inputTag));
    return tagged;
  }

  searchRecipes(searchInput) {
    let nameSearched = this.searchByName(searchInput);
    let ingredientSearched = this.searchByIngredient(searchInput);
    let recipesWithSearched = nameSearched.concat(ingredientSearched);

    return recipesWithSearched;
  }

  searchByName(searchInput) {
    return this.recipes.filter(recipe => recipe.name.toLowerCase().includes(searchInput.toLowerCase()));
  }

  searchByIngredient(searchInput) {
    let lowerCaseSearch = searchInput.toLowerCase();
    let ingredientSearched = this.ingredients.filter(ingredient => {
      return ingredient.name.includes(searchInput);
    });

    let searchedIngredientIds = ingredientSearched.map(ingredient => {
      return ingredient.id;
    });

    let matchedRecipes = [];
    this.recipes.forEach(recipe => {
      recipe.ingredients.forEach(ingredient => {
        if (searchedIngredientIds.includes(ingredient.id) && !matchedRecipes.includes(recipe)) {
          matchedRecipes.push(recipe);
        }
      });
    });

    return matchedRecipes;
  }
}

export default RecipeRepository;

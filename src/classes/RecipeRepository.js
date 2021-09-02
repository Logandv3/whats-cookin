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
    let lowerCaseSearch = searchInput.toLowerCase();
    let nameSearched = this.recipes.filter(recipe => {
      return recipe.name.toLowerCase().includes(lowerCaseSearch);
    });

    let ingredientSearched = this.ingredients.filter(ingredient => {
      return ingredient.name.includes(searchInput);
    });

    let searchedIngredientIds = ingredientSearched.map(ingredient => {
      return ingredient.id;
    });

    let recipesWithIngredient = this.recipes.forEach(recipe => { //iterating through each recipe in CB
      // console.log('recipe', recipe);
      recipe.ingredients.forEach(ingredient => { //iterating through each ingredient in recipe
        // console.log('ingredient', ingredient);
        searchedIngredientIds.find(id => {
          console.log('searchedIngredientIds[]', id);
          console.log('recipe > ingredient > id', ingredient.id);
          return id === ingredient.id;
        });
      });
    });

    let recipesWithSearched = nameSearched.concat(recipesWithIngredient);

    return recipesWithSearched;
  }
}

export default RecipeRepository;

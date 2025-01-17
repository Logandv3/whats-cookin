class RecipeRepository {
  constructor(recipeData, ingredientsData) {
    this.recipes = recipeData;
    this.ingredients = ingredientsData;
    this.tags = this.getTags();
  };

  getTags() {
    let allTags = [];
    this.recipes.forEach(recipe => {
      recipe.tags.forEach(tag => {
        if (!allTags.includes(tag)) {
          allTags.push(tag);
        };
      });
    });

    return allTags;
  };

  filterByTag(inputTag) {
    let tagged = this.recipes.filter(recipe => recipe.tags.includes(inputTag));
    return tagged;
  };

  searchRecipes(searchInput) {
    let nameSearched = this.searchByName(searchInput);
    let ingredientSearched = this.searchByIngredient(searchInput);
    let recipesWithSearched = nameSearched;

    if (!nameSearched.length) {
      return ingredientSearched;
    } else {
      nameSearched.forEach(nameResult => {
        ingredientSearched.forEach(ingredientResult => {
          if (!nameSearched.includes(ingredientResult)) {
            recipesWithSearched.push(ingredientResult);
          };
        });
      });
      return recipesWithSearched;
    };
  };

  searchByName(searchInput) {
    return this.recipes.filter(recipe => recipe.name.toLowerCase().includes(searchInput.toLowerCase()));
  };

  searchByIngredient(searchInput) {
    let lowerCaseSearch = searchInput.toLowerCase();

    let ingredientSearched = this.ingredients.filter(ingredient => {
      if (!ingredient.name) {
        ingredient.name = 'Not Found';
      }
      return ingredient.name.includes(lowerCaseSearch);
    });

    let searchedIngredientIds = ingredientSearched.map(ingredient => {
      return ingredient.id;
    });

    let matchedRecipes = [];
    this.recipes.forEach(recipe => {
      recipe.ingredients.forEach(ingredient => {
        if (searchedIngredientIds.includes(ingredient.id) && !matchedRecipes.includes(recipe)) {
          matchedRecipes.push(recipe);
        };
      });
    });
    return matchedRecipes;
  };
};

export default RecipeRepository;

import './styles.css';
import RecipeRepository from './classes/RecipeRepository';
import Recipe from './classes/Recipe';
import Ingredient from './classes/Ingredient';
import User from './classes/User';
import Pantry from './classes/Pantry';
import { ingredientPromise, recipePromise, userPromise, userPantry } from './apiCalls';
import domUpdates from './domUpdates';

let allRecipes = [];
let selectedTags = [];
let currentUser, ingredientsData, recipeData, usersData, pantry, currentRecipe;

const pageTitle = document.getElementById('pageTitle');
const userName = document.getElementById('userName');
const allRecipesBtn = document.getElementById('allRecipesBtn');
const favoriteRecipes = document.getElementById('favoriteRecipes');
const whatToCook = document.getElementById('whatToCook');
const pantryBtn = document.getElementById('pantry');
const addToPantryBtn = document.getElementById('addToPantryBtn');

const form = document.getElementById('form');
const searchBar = document.getElementById('searchBar');
const tagCheckbox = document.getElementById('tagCheckbox');
const submitBtn = document.getElementById('submitBtn');
const submitFavoriteBtn = document.getElementById('submitFavoriteBtn');
const errorMessages = document.getElementById('errorMessages');
const errorMessage = document.getElementById('errorMessage');
const errorMessage2 = document.getElementById('errorMessage2');
const errorMessage3 = document.getElementById('errorMessage3');
const errorMessage4 = document.getElementById('errorMessage4');
const recipeBox = document.getElementById('recipeBox');
const gridContainer = document.getElementById('gridContainer');
const pantryView = document.getElementById('pantryView');
const pantryBox = document.getElementById('pantryBox');

const individualRecipe = document.getElementById('individualRecipe');
const cookThisNowBtn = document.getElementById('cookThisNowBtn');
const backToMainBtn = document.getElementById('backToMainBtn');
const pantryInputNumber = document.getElementById('pantryInputNumber');
const addToPantry = document.getElementById('addToPantry');
const addToFavoriteList = document.getElementById('addToFavoriteList');
const onFavoriteList = document.getElementById('onFavoriteList');
const addToCookingList = document.getElementById('addToCookingList');
const onCookingList = document.getElementById('onCookingList');
const recipeTitle = document.getElementById('recipeTitle');
const indRecipeImage = document.getElementById('indRecipeImage');
const ingredientListItems = document.getElementById('ingredientListItems');
const instructionListItems = document.getElementById('instructionListItems');
const recipeCost = document.getElementById('recipeCost');

window.addEventListener('load', getData);
allRecipesBtn.addEventListener('click', function () {
  domUpdates.displayMessages(5);
  domUpdates.populateAllRecipes(allRecipes);
});
favoriteRecipes.addEventListener('click', function () {
  domUpdates.displayMessages(5);
  domUpdates.filterByFavorites(currentUser);
});
whatToCook.addEventListener('click', function () {
  domUpdates.displayMessages(5);
  domUpdates.filterByCookingList(currentUser);
});
pantryBtn.addEventListener('click', function () {
  domUpdates.displayMessages(5);
  domUpdates.populatePantryItems(pantry, ingredientsData);
});
addToPantryBtn.addEventListener('click', function () {
  pantry.addToPantry(parseInt(pantryInputNumber.value), parseInt(addToPantry.value), currentUser)
});
cookThisNowBtn.addEventListener('click', function () {
  pantry.removeFromPantry(currentRecipe, currentUser)
});
tagCheckbox.addEventListener('click', checkCheckboxes);
submitBtn.addEventListener('click', checkSearchConditions);
submitFavoriteBtn.addEventListener('click', checkFavSearchCondtitions);
backToMainBtn.addEventListener('click', domUpdates.hideIndividualRecipe);
addToFavoriteList.addEventListener('click', addRecipeToFavorite);
onFavoriteList.addEventListener('click', removeRecipeFromFavorite);
addToCookingList.addEventListener('click', addRecipeToCookingList);
onCookingList.addEventListener('click', removeRecipeFromCookingList);
recipeBox.addEventListener('click', showIndividualRecipe);

function getData() {
  gatherData();
};

function gatherData() {
  let apiIngredientData = ingredientPromise()
    .then(data => data)
    .catch(error => console.log(`API ingredient error: ${error.message}`))
  let apiRecipeData = recipePromise()
    .then(data => data)
    .catch(error => console.log(`API recipe error: ${error.message}`))
  let apiUserData = userPromise()
    .then(data => data)
    .catch(error => console.log(`API user error: ${error.message}`))
  Promise.all([apiIngredientData, apiRecipeData, apiUserData])
    .then(data => initData(data))
};

function initData(data) {
  ingredientsData = data[0];
  recipeData = data[1];
  usersData = data[2];
  const recipeInstances = instantiateRecipe();
  const ingredientInstances = instantiateIngredient();

  instantiateRandomUser();
  populateRepository(recipeInstances, ingredientInstances);
  instantiatePantry();
};

function instantiateRandomUser() {
  let randomUser = usersData[Math.round(Math.random() * usersData.length)];
  currentUser = new User(randomUser.name,
    randomUser.id,
    randomUser.pantry,
    ingredientsData);
  domUpdates.displayUserName(currentUser);
};

function instantiatePantry() {
  pantry = new Pantry(currentUser, ingredientsData);
}

function instantiateRecipe() {
  let recipes = [];

  recipeData.forEach(recipe => {
    let newRecipe = new Recipe(recipe, ingredientsData);
    recipes.push(newRecipe);
  });
  return recipes;
};

function instantiateIngredient() {
  let ingredients = [];
  ingredientsData.forEach(ingredient => {
    let newIngredient = new Ingredient(ingredient);
    ingredients.push(newIngredient);
  });
  return ingredients;
};

function populateRepository(recipeInstances, ingredientInstances) {
  allRecipes = new RecipeRepository(recipeInstances, ingredientInstances);

  domUpdates.populateTags(allRecipes);
  domUpdates.populateAllRecipes(allRecipes);
};

export const getUpdatedPantry = () => {
  domUpdates.populatePantryItems(pantry, ingredientsData);
};

function findRecipeById(indRecipeId) {
  return allRecipes.recipes.find(recipe => parseInt(indRecipeId) === recipe.id);
};

function showIndividualRecipe(event) {
  event.preventDefault();

  let indRecipeId = event.target.closest('section').id;
  currentRecipe = findRecipeById(indRecipeId);

  pantry.checkCookability(currentRecipe, currentUser) ? cookThisNowBtn.removeAttribute('disabled') : cookThisNowBtn.setAttribute('disabled', true);

  domUpdates.show(individualRecipe);
  domUpdates.hide(recipeBox);

  currentUser.favoriteRecipes.forEach(recipe => {
    if (recipe.id === parseInt(indRecipeId.id)) {
      domUpdates.show(onFavoriteList);
      domUpdates.hide(addToFavoriteList);
    };
  });

  currentUser.recipesToCook.forEach(recipe => {
    if (recipe.id === parseInt(indRecipeId.id)) {
      domUpdates.show(onCookingList);
      domUpdates.hide(addToCookingList);
    };
  });

  domUpdates.addRecipeInfo(currentUser, currentRecipe);
};

function checkCheckboxes(event) {
  let selected = event.target.value;
  if (!selected) {
    return;
  } else {
    if (event.target.checked) {
      selectedTags.push(selected);
    };
    if (!event.target.checked) {
      selectedTags.splice(selectedTags.indexOf(selected), 1);
    };
  };
};

function checkSearchConditions(event) {
  event.preventDefault();

  if (!searchBar.value && !selectedTags.length) {
    domUpdates.displayMessages(1);
    domUpdates.populateAllRecipes(allRecipes);
  };
  if (searchBar.value) {
    domUpdates.displayMessages(4);
    domUpdates.populateRecipes(allRecipes.searchRecipes(searchBar.value));
    domUpdates.showSearchTerms(searchBar.value, 0, errorMessage4);
  };
  if (selectedTags.length) {
    domUpdates.displayMessages(4);
    domUpdates.showSearchTerms(0, selectedTags, errorMessage4);

    let taggedRecipes = [];
    selectedTags.forEach(tag => {
      taggedRecipes.push(allRecipes.filterByTag(tag));
    });
    let flattened = taggedRecipes.flat();
    let withoutDuplicates = [...new Set(flattened)];
    selectedTags.length ? domUpdates.populateRecipes(withoutDuplicates) : domUpdates.populateAllRecipes();
  };
  if (searchBar.value && selectedTags.length) {
    domUpdates.displayMessages(2);
    domUpdates.populateAllRecipes(allRecipes);
  };

  form.reset();
  selectedTags = [];
};

function checkFavSearchCondtitions(event) {
  event.preventDefault();

  if (searchBar.value && selectedTags.length) {
    domUpdates.populateRecipes(currentUser.favoriteRecipes);
    domUpdates.show(errorMessage2);
    domUpdates.hide(errorMessage);
  }
  if (!searchBar.value && !selectedTags.length) {
    domUpdates.populateRecipes(currentUser.favoriteRecipes);
    domUpdates.show(errorMessage);
    domUpdates.hide(errorMessage2);
  }
  if (searchBar.value) {
    domUpdates.populateRecipes(currentUser.searchFavorites(searchBar.value));
  }
  if (selectedTags.length) {
    let taggedRecipes = [];
    selectedTags.forEach(tag => {
      taggedRecipes.push(currentUser.filterFavoriteRecipeTags(tag));
    });
    let flattened = taggedRecipes.flat();
    let withoutDuplicates = [...new Set(flattened)];
    selectedTags.length ? domUpdates.populateRecipes(withoutDuplicates) : domUpdates.populateRecipes(currentUser.favoriteRecipes);
  };
  form.reset();
  selectedTags = [];
};

function addRecipeToFavorite() {
  domUpdates.hide(addToFavoriteList);
  domUpdates.show(onFavoriteList);

  allRecipes.recipes.forEach(recipe => {
    if (recipe.name === currentRecipe.name) {
      currentUser.addToFavoriteRecipes(recipe);
    };
  });
};

function removeRecipeFromFavorite() {
  domUpdates.hide(onFavoriteList);
  domUpdates.show(addToFavoriteList);

  allRecipes.recipes.forEach(recipe => {
    if (recipe.name === currentRecipe.name) {
      currentUser.removeFromFavoriteRecipes(recipe);
    };
  });
};

function addRecipeToCookingList() {
  domUpdates.hide(addToCookingList);
  domUpdates.show(onCookingList);

  allRecipes.recipes.forEach(recipe => {
    if (recipe.name === currentRecipe.name) {
      currentUser.addToRecipesToCook(recipe);
    };
  });
};

function removeRecipeFromCookingList() {
  domUpdates.hide(onCookingList);
  domUpdates.show(addToCookingList);

  allRecipes.recipes.forEach(recipe => {
    if (recipe.name === currentRecipe.name) {
      currentUser.removeFromRecipesToCook(recipe);
    };
  });
};

function hideView(event) {
  if (event.target.parentNode.id === "pantryView") {
    domUpdates.hidePantryView();
  }
}

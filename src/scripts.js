import './styles.css';
import recipeData from './data/recipes.js';
import ingredientsData from './data/ingredients.js';
import RecipeRepository from './classes/RecipeRepository';
import Recipe from './classes/Recipe';
import Ingredient from './classes/Ingredient';
// import Users from './data/Users';
import apiCalls from './apiCalls';
// let recipeData = './data/recipes.js';
// let ingredientData = './data/ingredients.js';
// let userData = './data/users.js';

let allRecipes = [];

//nav
const userName = document.getElementById('userName');
const favoriteRecipes = document.getElementById('favoriteRecipes');
const whatToCook = document.getElementById('whatToCook');

//main
const searchBar = document.getElementById('searchBar');
const tagCheckbox = document.getElementById('tagCheckbox');
const submitBtn = document.getElementById('submitBtn');
const errorMessage = document.getElementById('errorMessage');
const errorMessage2 = document.getElementById('errorMessage2');
const recipeBox = document.getElementById('recipeBox');
const gridContainer = document.getElementById('gridContainer');

//article/ individual-recipe
const individualRecipe = document.getElementById('individualRecipe');
const backToMainBtn = document.getElementById('backToMainBtn');
const addToFavoriteList = document.getElementById('addToFavoriteList');
const onFavoriteList = document.getElementById('onFavoriteList');
const addToCookingList = document.getElementById('addToCookingList');
const onCookingList = document.getElementById('onCookingList');
const recipeTitle = document.getElementById('recipeTitle');
const indRecipeImage = document.getElementById('indRecipeImage');
const ingredientListItems = document.getElementById('ingredientListItems'); // Will populate when individual recipe is created
const instructionListItems = document.getElementById('instructionListItems'); // Will populate when individual recipe is created
const recipeCost = document.getElementById('recipeCost'); // Will populate when individual recipe is created

// Event Listener
window.addEventListener('load', getData);
// favoriteRecipes.addEventListener('click', filterByFavorites); // from User class
// whatToCook.addEventListener('click', filterByCookingList); // from User class
submitBtn.addEventListener('click', checkSearchConditions);
backToMainBtn.addEventListener('click', hideIndividualRecipe);
addToFavoriteList.addEventListener('click', addRecipeToFavorite);
onFavoriteList.addEventListener('click', removeRecipeFromFavorite);
addToCookingList.addEventListener('click', addRecipeToCookingList);
onCookingList.addEventListener('click', removeRecipeFromCookingList);
recipeBox.addEventListener('click', showIndividualRecipe); // Will need to be passed an id of the recipe

// Event Handler
function getData() {
  // Populate all the data/ recipes etc. from api or data file.  Instantiate classes.
  //maybe we need to create variables and assign them to instantiateRecipe() & instatiateIngredient()

  populateRepository(instantiateRecipe(), instantiateIngredient());
  getRandomUser();
};

function getRandomUser() {
  // Instatiate the user class with a rando
};

function instantiateRecipe() {
  let recipes = [];

  recipeData.forEach(recipe => {
    let newRecipe = new Recipe(recipe);
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

  populateTags();
  populateAllRecipes(allRecipes);
};

function populateTags() {
  tagCheckbox.innerHTML = ``;
  allRecipes.tags.forEach(tag => {
    tagCheckbox.innerHTML += `<input type="checkbox" class="tag-checkbox" name="checkbox" value=${tag}> <label for="checkbox">${tag.toUpperCase()}</label>`;
  });
};

function populateAllRecipes(allRecipes) {
  gridContainer.innerHTML = '';

  allRecipes.recipes.forEach(recipe => {
    gridContainer.innerHTML += `<section class="grid-item" id="${recipe.id}">
      <div class="card-head">
        <p>${recipe.name}</p>
      </div>
      <div class="card-body">
        <img src="${recipe.image}" alt="${recipe.name}">
      </div>
    </section>`;
  });
};

function showIndividualRecipe(event) {
  event.preventDefault();
  show(individualRecipe);
  hide(recipeBox);
  let indRecipeId = event.target.closest('section').id;

  let indRecipe = allRecipes.recipes.find(recipe => {
    return recipe.id === parseInt(indRecipeId);
  });
  recipeTitle.innerText = indRecipe.name;
  indRecipeImage.src = indRecipe.image;

  ingredientListItems.innerHTML = `<ul>`;
  indRecipe.ingredientInfo.forEach(ingredient => {
    ingredientListItems.innerHTML += `<li>${ingredient.name}: ${ingredient.quantity}${ingredient.unit}`;
  });

  instructionListItems.innerText = ``;
  instructionListItems.innerHTML += `${indRecipe.getRecipeInstructions()}`;
  recipeCost.innerText = `Cost:  $${indRecipe.getIngredientCosts()}`;
};

function hideIndividualRecipe() {
  event.preventDefault();
  hide(individualRecipe);
  show(recipeBox);
};

function checkSearchConditions(event) {
  event.preventDefault();

  if (searchBar.value) {
    populateRecipes(allRecipes.searchRecipes(searchBar.value));
  } else if (tagCheckbox.value) {
    populateRecipes(allRecipes.filterByTag(tagCheckbox.value));
  } else if (!searchBar.value && tagCheckbox.value === null) {
    show(errorMessage);
  } else {
    show(errorMessage2);
  }

  // Issue:  Need multiple tags.

  // Check if user has entered a name or ingredient.  If so prioritize that and
  // run searchRecipes fcn.

  // If there is no value entered in search bar check for tags selected and search
  // by tags.

  // If neither is selected do nothing.
};

function populateRecipes(recipes) {
  gridContainer.innerHTML = '';

  recipes.forEach(recipe => {
    gridContainer.innerHTML += `<section class="grid-item" id="${recipe.id}">
      <div class="card-head">
        <p>${recipe.name}</p>
      </div>
      <div class="card-body">
        <img src="${recipe.image}" alt="${recipe.name}">
      </div>
    </section>`;
  });
};

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};

function addRecipeToFavorite() {

};

function removeRecipeFromFavorite() {

};

function addRecipeToCookingList() {

};

function removeRecipeFromCookingList() {

};



console.log('Hello world');

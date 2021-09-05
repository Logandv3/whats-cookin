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

//nav
const userName = document.getElementById('userName');
const favoriteRecipes = document.getElementById('favoriteRecipes');
const whatToCook = document.getElementById('whatToCook');

//main
const searchBar = document.getElementById('searchBar');
const tagDropdown = document.getElementById('tagDropdown');
const submitBtn = document.getElementById('submitBtn');
const recipeBox = document.getElementById('recipeBox');

//article/ individual-recipe
const individualRecipe = document.getElementById('individualRecipe');
const backToMainBtn = document.getElementById('backToMainBtn');
const addToFavoriteList = document.getElementById('addToFavoriteList');
const onFavoriteList = document.getElementById('onFavoriteList');
const addToCookingList = document.getElementById('addToCookingList');
const onCookingList = document.getElementById('onCookingList');
const ingredientListItems = document.getElementById('ingredientListItems'); // Will populate when individual recipe is created
const instructionListItems = document.getElementById('instructionListItems'); // Will populate when individual recipe is created
const recipeCost = document.getElementById('recipeCost'); // Will populate when individual recipe is created

// Event Listener
window.addEventListener('load', getData);
// favoriteRecipes.addEventListener('click', filterByFavorites); // from User class
// whatToCook.addEventListener('click', filterByCookingList); // from User class
submitBtn.addEventListener('click', checkSearchConditions);
backToMainBtn.addEventListener('click', hide); // may need anonymous fcn
addToFavoriteList.addEventListener('click', addRecipeToFavorite);
onFavoriteList.addEventListener('click', removeRecipeFromFavorite);
addToCookingList.addEventListener('click', addRecipeToCookingList);
onCookingList.addEventListener('click', removeRecipeFromCookingList);
recipeBox.addEventListener('click', show); // Will need to be passed an id of the recipe
backToMainBtn.addEventListener('click', hide); // Hide individualRecipe

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
  const allRecipes = new RecipeRepository(recipeInstances, ingredientInstances);

  console.log(allRecipes.searchRecipes('chip'));
  // populateRecipes(allRecipes);
};

function populateRecipes(allRecipes) {
  // recipeBox.innerHTML = '';
  // recipeBox.innerHTML += `<section class="grid-item">
  //   <div class="card-head">
  //     <p>${allRecipes.recipes.name}</p>
  //   </div>
  //   <div class="card-body">
  //     <img src="${allRecipes.recipes.image}" alt="${allRecipes.recipes.name}">
  //   </div>
  // </section>`;
};

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};

function checkSearchConditions() {
  // Goal: We want to decide whether to filter by name & ingredient or by tag.

  // Issue:  Need multiple tags.

  // Check if user has entered a name or ingredient.  If so prioritize that and
  // run searchRecipes fcn.

  // If there is no value entered in search bar check for tags selected and search
  // by tags.

  // If neither is selected do nothing.
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

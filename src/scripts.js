import './styles.css';
import apiCalls from './apiCalls';

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
favoriteRecipes.addEventListener('click', filterByFavorites); // from User class
whatToCook.addEventListener('click', filterByCookingList); // from User class
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

import './styles.css';
// import recipeData from './data/recipes.js';
// import ingredientsData from './data/ingredients.js';
// import usersData from './data/users.js';
import RecipeRepository from './classes/RecipeRepository';
import Recipe from './classes/Recipe';
import Ingredient from './classes/Ingredient';
import User from './classes/User';
import {ingredientPromise, recipePromise, userPromise} from './apiCalls';

let allRecipes = [];
let selectedTags = [];
let currentUser, ingredientsData, recipeData, usersData;

//nav
const userName = document.getElementById('userName');
const allRecipesBtn = document.getElementById('allRecipesBtn');
const favoriteRecipes = document.getElementById('favoriteRecipes');
const whatToCook = document.getElementById('whatToCook');

//main
const searchBar = document.getElementById('searchBar');
const tagCheckbox = document.getElementById('tagCheckbox');
const submitBtn = document.getElementById('submitBtn');
const submitFavoriteBtn = document.getElementById('submitFavoriteBtn');
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
const ingredientListItems = document.getElementById('ingredientListItems');
const instructionListItems = document.getElementById('instructionListItems');
const recipeCost = document.getElementById('recipeCost');

// Event Listener
window.addEventListener('load', getData);
allRecipesBtn.addEventListener('click', populateAllRecipes);
favoriteRecipes.addEventListener('click', filterByFavorites);
whatToCook.addEventListener('click', filterByCookingList);
tagCheckbox.addEventListener('click', checkCheckboxes);
submitBtn.addEventListener('click', checkSearchConditions);
submitFavoriteBtn.addEventListener('click', checkFavSearchCondtitions);
backToMainBtn.addEventListener('click', hideIndividualRecipe);
addToFavoriteList.addEventListener('click', addRecipeToFavorite);
onFavoriteList.addEventListener('click', removeRecipeFromFavorite);
addToCookingList.addEventListener('click', addRecipeToCookingList);
onCookingList.addEventListener('click', removeRecipeFromCookingList);
recipeBox.addEventListener('click', showIndividualRecipe);

// Event Handler
function getData() {
  // Populate all the data/ recipes etc. from api or data file.  Instantiate classes.
  //maybe we need to create variables and assign them to instantiateRecipe() & instatiateIngredient()
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
  recipeData = data[1].recipeData;
  ingredientsData = data[0].ingredientsData;
  usersData = data[2].usersData;

  instantiateRandomUser();
  populateRepository(instantiateRecipe(), instantiateIngredient());
};

function instantiateRandomUser() {
  let randomUser = usersData[Math.round(Math.random() * usersData.length)];
  currentUser = new User(randomUser.name, randomUser.id, randomUser.pantry);

  displayUserName(currentUser);
};

function displayUserName(currentUser) {
  userName.innerText = `Welcome ${currentUser.name}, what's cookin!?`
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
  populateAllRecipes();
};

function populateTags() {
  tagCheckbox.innerHTML = ``;
  allRecipes.tags.forEach(tag => {
    tagCheckbox.innerHTML += `<input type="checkbox" class="tag-checkbox" name="checkbox" value="${tag}"> <label for="checkbox">${tag.toUpperCase()}</label>`;
  });
};

function populateAllRecipes() {
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
  let indRecipeId = event.target.closest('section').id;

  show(individualRecipe);
  hide(recipeBox);

  currentUser.favoriteRecipes.forEach(recipe => {
    if (recipe.id === parseInt(indRecipeId)) {
      show(onFavoriteList);
      hide(addToFavoriteList);
    };
  });

  currentUser.recipesToCook.forEach(recipe => {
    if (recipe.id === parseInt(indRecipeId)) {
      show(onCookingList);
      hide(addToCookingList);
    };
  });

  let indRecipe = allRecipes.recipes.find(recipe => {
    return recipe.id === parseInt(indRecipeId);
  });

individualRecipe.setAttribute('title', `${indRecipe.name}`);

  // if (!individualRecipe.title) {
  //   individualRecipe.setAttribute('title', `${indRecipe.name}`); // May not need else statement
  // } else {
  //   individualRecipe.title = indRecipe.name;
  // }

  recipeTitle.innerText = indRecipe.name;
  indRecipeImage.src = indRecipe.image;

  ingredientListItems.innerHTML = `<ul>`;
  indRecipe.ingredientInfo.forEach(ingredient => {
    ingredientListItems.innerHTML += `<li>${ingredient.name}: ${ingredient.quantity} ${ingredient.unit}`;
  });

  instructionListItems.innerText = ``;
  instructionListItems.innerHTML += `${indRecipe.getRecipeInstructions()}`;
  recipeCost.innerText = `Cost:  $${indRecipe.getIngredientCosts()}`;
};

function hideIndividualRecipe() {
  event.preventDefault();
  hide(onFavoriteList);
  show(addToFavoriteList);
  hide(onCookingList);
  show(addToCookingList);
  hide(individualRecipe);
  show(recipeBox);
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

function checkFavSearchCondtitions(event) {
  event.preventDefault();

  if (searchBar.value) {
    populateRecipes(currentUser.searchFavorites(searchBar.value));

  } else if (selectedTags) {
    let taggedRecipes = [];

    selectedTags.forEach(tag => {
      taggedRecipes.push(currentUser.filterFavoriteRecipeTags(tag));
    });

    let flattened = taggedRecipes.flat();
    let withoutDuplicates = [...new Set(flattened)];

    selectedTags.length ? populateRecipes(withoutDuplicates) : populateRecipes(currentUser.favoriteRecipes);
  }
};

function checkSearchConditions(event) {
  event.preventDefault();

  if (searchBar.value) {
    populateRecipes(allRecipes.searchRecipes(searchBar.value));

  } else if (selectedTags) {
    let taggedRecipes = [];

    selectedTags.forEach(tag => {
      taggedRecipes.push(allRecipes.filterByTag(tag));
    });

    let flattened = taggedRecipes.flat();
    let withoutDuplicates = [...new Set(flattened)];

    selectedTags.length ? populateRecipes(withoutDuplicates) : populateAllRecipes();

  } else if (!searchBar.value && !selectedTags.length) {
    populateAllRecipes();
    show(errorMessage);

  } else {
    show(errorMessage2);
  };
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

function addRecipeToFavorite(event) {
  let titleOfRecipe = event.target.closest('article').title;
  hide(addToFavoriteList);
  show(onFavoriteList);

  allRecipes.recipes.forEach(recipe => {
    if (recipe.name === titleOfRecipe) {
      currentUser.addToFavoriteRecipes(recipe);
    };
  });
};

function removeRecipeFromFavorite() {
  let titleOfRecipe = event.target.closest('article').title;
  hide(onFavoriteList);
  show(addToFavoriteList);

  allRecipes.recipes.forEach(recipe => {
    if (recipe.name === titleOfRecipe) {
      currentUser.removeFromFavoriteRecipes(recipe);
    };
  });
};

function addRecipeToCookingList() {
  let titleOfRecipe = event.target.closest('article').title;
  hide(addToCookingList);
  show(onCookingList);

  allRecipes.recipes.forEach(recipe => {
    if (recipe.name === titleOfRecipe) {
      currentUser.addToRecipesToCook(recipe);
    };
  });
};

function removeRecipeFromCookingList() {
  let titleOfRecipe = event.target.closest('article').title;
  hide(onCookingList);
  show(addToCookingList);

  allRecipes.recipes.forEach(recipe => {
    if (recipe.name === titleOfRecipe) {
      currentUser.removeFromRecipesToCook(recipe);
    };
  });
};

function filterByFavorites() {
  hide(submitBtn);
  show(submitFavoriteBtn);

  gridContainer.innerHTML = '';

  currentUser.favoriteRecipes.forEach(recipe => {
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

function filterByCookingList() {
  gridContainer.innerHTML = '';

  currentUser.recipesToCook.forEach(recipe => {
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

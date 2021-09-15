let domUpdates = {

  displayUserName(currentUser) {
    userName.innerText = `Welcome ${currentUser.name}, What's Cookin!?`
  },

  populateTags(allRecipes) {
    tagCheckbox.innerHTML = ``;
    allRecipes.tags.forEach(tag => {
      tagCheckbox.innerHTML += `<div><input type="checkbox" class="tag-checkbox" name="checkbox" value="${tag}"> <label for="checkbox">${tag.toUpperCase()}</label></div>`;
    });
  },

  populateAllRecipes(allRecipes) {
    domUpdates.show(submitBtn);
    domUpdates.hide(submitFavoriteBtn);
    domUpdates.hideIndividualRecipe();

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
  },

  addRecipeInfo (indRecipe) {
    individualRecipe.setAttribute('title', `${indRecipe.name}`);
    recipeTitle.innerText = indRecipe.name;
    indRecipeImage.src = indRecipe.image;

    ingredientListItems.innerHTML = '';
    indRecipe.ingredientInfo.forEach(ingredient => {
      ingredientListItems.innerHTML += `<li>${ingredient.name}: ${ingredient.quantity} ${ingredient.unit}`;
    });
    instructionListItems.innerText = '';
    instructionListItems.innerHTML += `${indRecipe.getRecipeInstructions()}`;
    recipeCost.innerText = `Cost:  $${indRecipe.getIngredientCosts()}`;
},

  hideIndividualRecipe() {
    domUpdates.hide(onFavoriteList);
    domUpdates.show(addToFavoriteList);
    domUpdates.hide(onCookingList);
    domUpdates.show(addToCookingList);
    domUpdates.hide(individualRecipe);
    domUpdates.show(recipeBox);
},

  populateRecipes(recipes) {
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
},

  show(element) {
    element.classList.remove('hidden');
  },

  hide(element) {
    element.classList.add('hidden');
  },
}

export default domUpdates;

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
      gridContainer.innerHTML += `<section class="grid-item" role="region" id="${recipe.id}">
        <div class="card-head">
          <p>${recipe.name}</p>
        </div>
        <div class="card-body">
          <img src="${recipe.image}" alt="${recipe.name}">
        </div>
      </section>`;
    });
  },

  addRecipeInfo(indRecipe) {
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
    domUpdates.hide(pantryView);
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

  filterByFavorites(currentUser) {
    domUpdates.hide(submitBtn);
    domUpdates.show(submitFavoriteBtn);
    domUpdates.hideIndividualRecipe();

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
  },

  filterByCookingList(currentUser) {
    domUpdates.hide(submitFavoriteBtn);
    domUpdates.show(submitBtn);
    domUpdates.hideIndividualRecipe();

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
  },

  showPantry() {
    domUpdates.hide(onFavoriteList);
    domUpdates.show(addToFavoriteList);
    domUpdates.hide(onCookingList);
    domUpdates.show(addToCookingList);
    domUpdates.hide(individualRecipe);
    domUpdates.hide(recipeBox);
    domUpdates.show(pantryView);
  },

  populatePantryItems(pantry, ingredientsData) {
    domUpdates.showPantry();

    pantry.pantryItemInfo.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    pantryBox.innerHTML = '';

    pantry.pantryItemInfo.forEach((item) => {
      pantryBox.innerHTML += `
    <tr>
      <td>${item.name}</td>
      <td>${item.amount}</td>
    </tr>
      `;
    });
    domUpdates.populateDropdownMenu(ingredientsData);
  },

  populateDropdownMenu(ingredientsData) {
    ingredientsData.sort((a, b) => {
      if (!a.name) {
        a.name = 'undefined';
      }
      if (!b.name) {
        b.name = 'undefined';
      }
      return a.name.localeCompare(b.name);
    });

    let undefinedIngredients = ingredientsData.reduce((acc, ingredient) => {
      if (ingredient.name === 'undefined') {
        acc.push(ingredientsData.indexOf(ingredient));
      }
      return acc;
    }, []);

    undefinedIngredients.forEach(index => ingredientsData.splice(index, 1));

    ingredientsData.forEach((ingredient) => {
      addToPantry.innerHTML += `
        <option value="${ingredient.id}">${ingredient.name}</option>
      `;
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

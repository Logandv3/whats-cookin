let domUpdates = {

  displayUserName(currentUser) {
    pageTitle.innerText = `What's Cookin' ${currentUser.name}!?`
  },

  populateTags(allRecipes) {
    tagCheckbox.innerHTML = ``;
    allRecipes.tags.forEach(tag => {
      tagCheckbox.innerHTML += `<div><input type="checkbox" id="checkbox-${tag}" class="tag-checkbox" name="checkbox" value="${tag}"> <label for="checkbox-${tag}">${tag.toUpperCase()}</label></div>`;
    });
  },

  displayMessages(error) {
    switch (error) {
      case 1:
        domUpdates.show(errorMessages);
        domUpdates.show(errorMessage);
        domUpdates.hide(errorMessage2);
        domUpdates.hide(errorMessage3);
        domUpdates.hide(errorMessage4);
        break;
      case 2:
        domUpdates.show(errorMessages);
        domUpdates.show(errorMessage2);
        domUpdates.hide(errorMessage);
        domUpdates.hide(errorMessage3);
        domUpdates.hide(errorMessage4);
        break;
      case 3:
        domUpdates.show(errorMessages);
        domUpdates.show(errorMessage3);
        domUpdates.hide(errorMessage);
        domUpdates.hide(errorMessage2);
        domUpdates.hide(errorMessage4);
        break;
      case 4:
        domUpdates.show(errorMessages);
        domUpdates.show(errorMessage4);
        domUpdates.hide(errorMessage);
        domUpdates.hide(errorMessage2);
        domUpdates.hide(errorMessage3);
        break;
      case 5:
        domUpdates.hide(errorMessages);
        break;
      default:
        domUpdates.hide(errorMessages);
    };
  },

  populateAllRecipes(allRecipes) {
    domUpdates.show(submitBtn);
    domUpdates.hide(submitFavoriteBtn);
    domUpdates.hideIndividualRecipe();
    domUpdates.hidePantry();

    gridContainer.innerHTML = '';

    allRecipes.recipes.forEach(recipe => {
      gridContainer.innerHTML += `<section tabindex="0" class="grid-item" role="region" id="${recipe.id}">
        <div class="card-head">
          <p>${recipe.name}</p>
        </div>
        <div class="card-body">
          <img src="${recipe.image}" alt="${recipe.name}">
        </div>
      </section>`;
    });
  },

  addRecipeInfo(currentUser, indRecipe) {
    recipeTitle.innerText = indRecipe.name;
    indRecipeImage.src = indRecipe.image;

    ingredientListItems.innerHTML = '<tr class="table-titles"><td>Needed for Recipe</td><td>Amount In Pantry</td></tr>';

    let inPantry = [];

    let pantryMatches = indRecipe.ingredientInfo.map(ingredient => {
      inPantry = currentUser.pantry.find(item => ingredient.id === item.ingredient);
      if (inPantry) {
        return {id: ingredient.id, name: ingredient.name, quantity: ingredient.quantity, unit: ingredient.unit, pantryAmount: inPantry.amount};
      } else {
        return {id: ingredient.id, name: ingredient.name, quantity: ingredient.quantity, unit: ingredient.unit, pantryAmount: 0};
      }
    });

    pantryMatches.forEach(item => {
      ingredientListItems.innerHTML += `<tr><td>${item.name}: ${item.quantity} ${item.unit}</td><td>${item.pantryAmount}</td></tr>`;
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
    domUpdates.hideIndividualRecipe();
    domUpdates.hidePantry();

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

  hidePantry() {
    domUpdates.hide(onFavoriteList);
    domUpdates.show(addToFavoriteList);
    domUpdates.hide(onCookingList);
    domUpdates.show(addToCookingList);
    domUpdates.hide(individualRecipe);
    domUpdates.show(recipeBox);
    domUpdates.hide(pantryView);
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
        <td class="text-transform">${item.name}</td>
        <td class="text-transform">${item.amount}</td>
      </tr>`;
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
      addToPantry.innerHTML += `<option value="${ingredient.id}">${ingredient.name}</option>`;
    });
  },

  showSearchTerms(search, tags, errorMessage) {
    errorMessage.innerHTML = 'Search results for: ';

    if (tags.length) {
      let joined = tags.join(', ');
      errorMessage.innerHTML += `${joined}`;
    };

    if (search) {
      errorMessage.innerHTML += `${search}`;
    };
  },

  show(element) {
    element.classList.remove('hidden');
  },

  hide(element) {
    element.classList.add('hidden');
  },
}

export default domUpdates;

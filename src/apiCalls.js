export const ingredientPromise = () => {
  return fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients')
  .then(response => response.json())
};

export const recipePromise = () => {
  return fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes')
  .then(response => response.json())
};

export const userPromise = () => {
  return fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users')
  .then(response => response.json())
};

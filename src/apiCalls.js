import {getUpdatedPantry} from './scripts.js';

export const ingredientPromise = () => {
  return fetch('http://localhost:3001/api/v1/ingredients')
    .then(response => response.json())
};

export const recipePromise = () => {
  return fetch('http://localhost:3001/api/v1/recipes')
    .then(response => response.json())
};

export const userPromise = () => {
  return fetch('http://localhost:3001/api/v1/users')
    .then(response => response.json())
};

export const userPantry = (pantryUpdate) => {
  fetch('http://localhost:3001/api/v1/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(pantryUpdate),
  })
    .then(response => response.json())
    .then(ingred => getUpdatedPantry())
    .catch(err => console.log(`We got a POST error ${err}`))
};

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
}


// {
//   userID: <number>,
//   ingredientID: <number>,
//   ingredientModification: <number>
//  }


// fetch(url, {
//   method: 'POST',
//   body: JSON.stringify(someDataToSend), // remember how HTTP can only send and receive strings, just like localStorage?
//   headers: {
//   	'Content-Type': 'application/json'
//   }
// })
//   .then(response => response.json())
//   .then(json => /*do something with json*/)
//   .catch(err => /*do something with the error*/);


// const addAnimal = (newAnimal) => {
//   fetch(animalsUrl, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(newAnimal)
//   })
//     .then(response => response.json())
//     .then(animal => addAnimalToPage(animal));
// }

// const animalsSection = document.querySelector('.js-animals');
// const animalsUrl = 'http://localhost:3001/api/v1/animals';
// getAllAnimals();


// const addAnimalsToPage = animals => {
//   animals.forEach(animal => {
//     addAnimalToPage(animal);
//   });
// }

// const addAnimalToPage = animal => {
//   animalsSection.innerHTML += `<p>${animal.name}</p>`;
// }

// document.querySelector('.js-add-animal').addEventListener('submit', (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   const newAnimal = {
//     id: animalsSection.childElementCount + 1,
//     name: formData.get('name'),
//     diet: formData.get('diet'),
//     fun_fact: formData.get('fun_fact')
//   };
//   addAnimal(newAnimal);
//   e.target.reset();
// });

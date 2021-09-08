# What's Cookin'? (Group Project)



## Project Repo
https://github.com/Logandv3/whats-cookin


## Deployable link
https://logandv3.github.io/whats-cookin/


## Technologies Used
Javascript, HTML, CSS, API Fetch, Mocha, Chai, eslint, Webpack, Chrome Dev Tools, Github


## Setup
- Fork this web app to your own Github account
- Clone the repository to your local machine
- `cd` into the file
- run `npm install`.
- Run `npm start` and visit `localhost:8080`



## Project Overview
In this project, we create a recipe tracking / meal planning application that allows users to view their favorite recipes and plan shopping trips around them.  Users should view a list of recipes, favorite their own recipes, and choose recipes to cook.


## Learning Goals
* Implement ES6 classes that communicate to each other as needed
* Use object and array prototype methods to perform data manipulation
* Create a user interface that is easy to use and clearly displays information.
* Write modular, reusable code that follows SRP (Single Responsibility Principle)
* Implement a robust testing suite using TDD
* Make network requests to retrieve data



## How to Use

- A user will be displayed on page load.  All recipes will be displayed.  The user can search through the recipes in the search bar by name/ ingredient or select a tag, then submit.
<img width="1438" alt="Screen Shot 2021-08-03 at 8 04 08 PM" src="https://user-images.githubusercontent.com/39206140/128110933-a1933cd4-1c5b-4820-8e49-e1e86dd90589.png"> 

- When a recipe is selected on the main page that same recipe will become larger and reveal information about the recipe including instructions.  On each individual recipe card the user will see options to add/ remove recipes from their favorites(star) list or list of recipes they want to cook(checkbox).
<img width="1438" alt="Screen Shot 2021-08-03 at 8 04 08 PM" src="https://user-images.githubusercontent.com/39206140/128110933-a1933cd4-1c5b-4820-8e49-e1e86dd90589.png"> 

- The user can see the recipes they have added to their favorites or cooking list by clicking the `Favorite Recipes` and `What to Cook` buttons.  To return to the main page where all recipes are displayed they can click the `All Recipes` button.  The user can filter their favorite recipes by name/ ingredient or tags when looking at their favorite recipe list.
<img width="1438" alt="Screen Shot 2021-08-03 at 8 04 08 PM" src="https://user-images.githubusercontent.com/39206140/128110933-a1933cd4-1c5b-4820-8e49-e1e86dd90589.png"> 

https://user-images.githubusercontent.com/724355/132460632-e5ad9bd1-a61c-425d-b899-6e977817318e.mov

## Challenges
This project introduced us to Fetch API and webpack which took a bit to get used to and figure out.  We tested our classes and set up our code by working with data files, then hooked them up to the API at the end.  We also found that the data we needed to access for one task was often spread out across multiple files so we had to figure out how to either search both or pull it into one place to access later.  We favored pulling it to one place to reference.  Some of the data was also broken and caused some errors we had to get around.


## Reflections
We learned a lot about data structures and accessing them.  We found unique ways to pull data from one place and insert it another even when it wasn't set up in an ideal way.  We learned about getting data from the API and how it might be structured and how we needed to access it.


## Future Plans
We plan to have persisting data that allows multiple users(possibly a login) to be able to store their favorites and what they have planned to cook.  We would also like to take into account what ingredients the user has and evaluate which recipes they may be able to cook and how much it would cost.



## Contributors
- [Elise Beall](https://github.com/elisebeall)
- [Eric Sergeant](https://github.com/EricSergeant)
- [Logan Vincent](https://github.com/Logandv3)

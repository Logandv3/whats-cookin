class User {
  constructor(name, id, pantry) {
    this.name = name;
    this.id = id;
    this.pantry = pantry;
    this.myFavoriteRecipes = [];
    this.myRecipesToCook = [];
  }

  addToFavoriteRecipes(recipe) {
    if (!this.myFavoriteRecipes.includes(recipe)) {
      this.myFavoriteRecipes.push(recipe)
    }
  }
}

export default User;
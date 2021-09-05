class User {
  constructor(name, id, pantry) {
    this.name = name;
    this.id = id;
    this.pantry = pantry;
    this.myFavoriteRecipes = [];
    this.myRecipesToCook = [];
  }
}

export default User;
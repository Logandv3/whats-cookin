import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
import User from '../src/classes/User';

describe('User', () => {
  let user, recipeA, recipeB;
  beforeEach(() => {
    user = new User("Ephraim Goyette", 2, [
      { "ingredient": 6150, "amount": 3 },
      { "ingredient": 1032009, "amount": 7 },
      { "ingredient": 1082047, "amount": 8 },
      { "ingredient": 1034053, "amount": 6 },
      { "ingredient": 2050, "amount": 10 }
    ])
    recipeA = new Recipe()
  })
  it('Should be a function', () => {
    expect(User).to.be.a('function');
  });
})
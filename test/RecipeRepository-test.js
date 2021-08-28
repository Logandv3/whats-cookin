import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';

describe('Recipe Repository', () => {
  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });
})

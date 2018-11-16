import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable(

)
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  //property:class recipe
  private recipes:Recipe[]=[
    new Recipe('Burger','A humberger with a rim of lettuce sitting on a black plate against a black backgound',
  '../src/app/img/2.jpg',
  [
    new Ingredient('meal',1),
    new Ingredient('tomato',2),
  ]),
  new Recipe('Chicken Black Papper','Its a favourit fast food','../src/app/img/1.jpg',
[
  new Ingredient('tomato',1),
  new Ingredient('egg',1),
  new Ingredient('spices',1)
]),  
];

  getRecipes(){
    return this.recipes.slice();
  }
  //tambahkan method addIngredientsShoppingList dengan parameter ingredient[]
  addIngredientsShoppingList(ingredients: Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }
  getRecipe(index:number){
    return this.recipes [index] ;
  }
  //tambahkan parameter pada construktor
constructor(private slsService: ShoppingListService) { }

}
import {Ingredient} from '../shared/ingredient.model';
export class ShoppingService{


  private ingredient:Ingredient[]=[new Ingredient('asdfghj',12)];

  getIngredients(){
    return this.ingredient.slice();
  }

  onIngredientAdded(ingred:Ingredient){
   //console.log(ingred);
   this.ingredient.push(ingred);
   // console.log(this.ingredient);
 }



  
}
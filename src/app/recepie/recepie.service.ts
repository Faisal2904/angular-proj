import {EventEmitter} from '@angular/core';
import { Recepie } from './recepie.model';
import{Ingredient} from '../shared/ingredient.model'
export class RecepieService{

   recepieSelected=new EventEmitter<Recepie>();

private recepie:Recepie[]=[
    new Recepie('pizza','this is a test','hdfadhad',[
      new Ingredient('dough',1),
      new Ingredient('olive',1)
      ]),

    new Recepie('burger','this is a test','hdfadhad',[
      new Ingredient('bread',1),
      new Ingredient('cabbage',1)
      ])
  ];

  getRecepie(){
    return this.recepie.slice();
  }

  addIngredienttoShoppingist(ingredients:Ingredient[]){

  }

  
 
  

}
import {EventEmitter} from '@angular/core';
import { Recepie } from './recepie.model';
export class RecepieService{

   recepieSelected=new EventEmitter<Recepie>();

private recepie:Recepie=[
    new Recepie('test','this is a test','hdfadhad'),
    new Recepie('test1','this is a test','hdfadhad')
  ];

  getRecepie(){
    return this.recepie.slice();
  }

  
 
  

}
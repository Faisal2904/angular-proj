import { Component, OnInit, Input } from '@angular/core';

import { Recepie } from '../../recepie.model';
import{RecepieService} from '../../recepie.service'
@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: [ './recepie-item.component.css' ],
  
})
export class RecepieItemComponent implements OnInit {

  @Input() recepie:Recepie;

  //@Output() recepieSelected= new EventEmitter();

  constructor(private recepieService:RecepieService){

  }

  onSelected(){
  //this.recepieSelected.emit();
  this.recepieService.recepieSelected.emit(this.recepie);
  }
 
 }// class ends

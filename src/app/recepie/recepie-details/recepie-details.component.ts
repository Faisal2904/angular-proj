import { Component ,Input} from '@angular/core';
import { Recepie } from '../recepie.model';
import { RecepieService } from '../recepie.service';
@Component({
  selector: 'app-recepie-details',
  templateUrl: './recepie-details.component.html',
  styleUrls: [ './recepie-details.component.css' ]
})
export class RecepieDetailsComponent  {

  @Input() recepiedetailsSelected:Recepie;

  constructor(private recepieService:RecepieService){

  }


  onAddtoShoppingList(){

    this.recepieService.addIngredienttoShoppingist(recepiedetailsSelected.ingredient)

  }


  
 
}

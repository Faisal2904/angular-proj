import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {HeaderComponent} from './header/header.component';
import {RecepieComponent} from './recepie/recepie.component';
import {RecepieListComponent} from './recepie/recepie-list/recepie-list.component';
import {RecepieDetailsComponent} from './recepie/recepie-details/recepie-details.component';
import {RecepieItemComponent} from './recepie/recepie-list/recepie-item/recepie-item.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingEditComponent} from './shopping-list/shopping-edit/shopping-edit.component';
import {DropdownDirective} from './shared/dropdown.directive';
import{ShoppingService} from './shopping-list/shopping.service'


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,HeaderComponent, RecepieComponent, RecepieListComponent, RecepieDetailsComponent ,RecepieItemComponent, ShoppingListComponent, ShoppingEditComponent,DropdownDirective],
  bootstrap:    [ AppComponent ],
  providers:[ShoppingService]
})
export class AppModule { }

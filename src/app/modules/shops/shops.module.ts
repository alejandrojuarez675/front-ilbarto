import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopsComponent } from './shops/shops.component';
import { FoodCardComponent } from './food-card/food-card.component';



@NgModule({
  declarations: [
    ShopsComponent,
    FoodCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class ShopsModule { }

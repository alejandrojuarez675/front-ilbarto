import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopsComponent } from './pages/shops/shops.component';
import { FoodCardComponent } from './components/food-card/food-card.component';
import { SectionsComponent } from './components/sections/sections.component';



@NgModule({
  declarations: [
    ShopsComponent,
    FoodCardComponent,
    SectionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class ShopsModule { }

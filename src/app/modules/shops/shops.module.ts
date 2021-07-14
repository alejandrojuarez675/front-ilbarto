import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopsComponent } from './pages/shops/shops.component';
import { FoodCardComponent } from './components/food-card/food-card.component';
import { SectionsComponent } from './components/sections/sections.component';
import { ButtonCartViewMobileComponent } from './components/button-cart-view-mobile/button-cart-view-mobile.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';



@NgModule({
  declarations: [
    ShopsComponent,
    FoodCardComponent,
    SectionsComponent,
    ButtonCartViewMobileComponent,
    CartViewComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class ShopsModule { }

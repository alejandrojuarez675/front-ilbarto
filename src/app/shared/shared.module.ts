import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartViewComponent } from './components/cart-view/cart-view.component';



@NgModule({
  declarations: [
    CartViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartViewComponent,
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ShopService } from './http/shop.service';
import { CartService } from './services/cart.service';



@NgModule({
  declarations: [
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
  ],
  providers: [
    ShopService,
    CartService,
  ]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ShopService } from './http/shop.service';
import { CartService } from './services/cart.service';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  providers: [
    ShopService,
    CartService,
  ]
})
export class CoreModule { }

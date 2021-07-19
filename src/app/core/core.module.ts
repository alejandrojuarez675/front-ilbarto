import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ShopService } from './http/shop.service';
import { CartService } from './services/cart.service';
import { HeaderComponent } from './header/header.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { AuthService } from './interceptor/auth.service';
import { AuthInterceptorService } from './interceptor/auth-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



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
    FooterComponent,
    HeaderComponent,
  ],
  providers: [
    ShopService,
    CartService,
    AuthGuardService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class CoreModule { }

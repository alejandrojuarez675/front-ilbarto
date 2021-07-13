import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopService } from 'src/app/core/http/shop.service';
import { CartService } from 'src/app/core/services/cart.service';
import { Cart, emptyCart } from 'src/app/shared/models/cart.model';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {

  shopName = '';
  shop: any;
  cart: Cart = emptyCart();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shopService: ShopService,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
        if (!param.name) this.redirectToNotFoundPage();
        this.shopName = param.name;
        this.shopService.getInfoByName(param.name).subscribe(
          shop => {
            this.shop = shop;
          }, _err => this.redirectToNotFoundPage()
        );
      }
    );

    this.cartService.getCart().subscribe(
      cart => this.cart = cart
    )
  }

  redirectToNotFoundPage() {
    this.router.navigate(['/not-found']);
  }

}

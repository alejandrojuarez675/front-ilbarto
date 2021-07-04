import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopService } from 'src/app/core/services/shop.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {

  shopName = '';
  shop: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shopService: ShopService,
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
  }

  redirectToNotFoundPage() {
    this.router.navigate(['/not-found']);
  }

}

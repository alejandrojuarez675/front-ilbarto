import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss']
})
export class FoodCardComponent implements OnInit {

  @Input() product: any;
  quantity: number = 0;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.cartService.getCart().subscribe(
      cart => {
        this.quantity = cart.products
          .filter(x => x.name === this.product.name)
          .map(x => x.quantity).pop() || 0;
      }
    );
  }

  addProduct() {
    this.cartService.addProduct(this.product);
  }

  removeProduct() {
    this.cartService.removeProducts(this.product);
  }

}

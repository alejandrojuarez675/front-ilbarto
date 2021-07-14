import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart, emptyCart } from '../../models/cart.model';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit {

  @Input() cart: Cart = emptyCart();
  @Output() sendCartEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendCart() {
    this.sendCartEvent.emit('ok');
  }

}

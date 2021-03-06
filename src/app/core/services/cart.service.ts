import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Cart, CartProduct, emptyCart } from 'src/app/shared/models/cart.model';

@Injectable()
export class CartService {

  subject: Subject<Cart> = new Subject();
  cart: Cart = emptyCart();

  constructor() {
    emptyCart();
    this.reportChangesInCartProducts();
  }

  getCart(): Observable<Cart> {
    return this.subject.asObservable();
  }

  getCurrentCart(): Cart {
    return {...this.cart};
  }

  addDeliveryCost(cost: number): void {
    this.cart.deliveryCost = cost;
    this.reportChangesInCartProducts();
  }

  addProduct(product: CartProduct): void {
    const savedProduct = this.cart.products.find(p => p.name === product.name);

    if (savedProduct) {
      const quantity = savedProduct.quantity + 1;
      this.cart.products = this.cart.products
        .filter(p => p.name !== product.name)
        .concat({...savedProduct, quantity, price: product.price * quantity});
    } else {
      this.cart.products = this.cart.products
        .concat({...product, quantity: 1, price: product.price});
    }

    this.reportChangesInCartProducts();
  }

  removeProducts(product: CartProduct, quantity?: number): void {
    const _quantity = quantity || 1;

    const savedProduct = this.cart.products.find(p => p.name === product.name);
    if (savedProduct) {
      const savedQuantity = savedProduct.quantity - _quantity;

      if (savedQuantity > 0) {
        this.cart.products = this.cart.products
          .filter(p => p.name !== product.name)
          .concat({...savedProduct, quantity: savedQuantity, price: product.price * savedQuantity});
      } else {
        this.cart.products = this.cart.products
          .filter(p => p.name !== product.name);
      }
    }
    this.reportChangesInCartProducts();
  }

  cleanCart(): void {
    this.cart = emptyCart();
    this.reportChangesInCartProducts();
  }

  private reportChangesInCartProducts() {
    const price = this.cart.products.map(x => x.price).reduce((a, b) => a + b, 0);

    this.cart.price = 0;
    this.cart.price += price;
    this.cart.price += this.cart.deliveryCost;

    this.subject.next(this.cart);
  }
}

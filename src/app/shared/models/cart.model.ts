import { Product } from "./product.model";

export type Cart = {
  products: CartProduct[];
  deliveryCost: number;
  price: number;
}

export interface CartProduct extends Product {
  quantity: number;
}

export function emptyCart(): Cart {
  return { products: [], deliveryCost: 0, price: 0 };
}

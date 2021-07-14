export interface Cart {
  products: CartProduct[];
  deliveryCost: number;
  price: number;
}

export interface CartProduct {
  name: string;
  image: string;
  description: string;
  price: number;
  type: string;
  quantity: number;
}

export function emptyCart(): Cart {
  return { products: [], deliveryCost: 0, price: 0 };
}

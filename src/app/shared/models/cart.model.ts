export interface Cart {
  products: CartProduct[];
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
  return { products: [], price: 0 };
}

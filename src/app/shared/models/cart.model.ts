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

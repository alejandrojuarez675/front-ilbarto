import { Product } from "./product.model";

export type Shop = {
  name: string;
  publicName: string;
  deliveryPrice: number;
  phone: string;
  products: Product[];
};

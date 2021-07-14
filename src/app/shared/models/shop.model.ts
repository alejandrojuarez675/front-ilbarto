export type Shop = {
  name: string;
  publicName: string;
  deliveryPrice: number;
  phone: string;
  products: ShopProduct[];
};

export type ShopProduct = {
  name: string;
  image: string | undefined;
  description: string | undefined;
  price: number;
  type: string;
};

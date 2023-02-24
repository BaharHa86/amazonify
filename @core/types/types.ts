export interface product {
  title: string;
  slug: string;
  images: {
    slug: string;
    url: string;
    sizes: number[];
  }[];
  description: string;
  price: number;
}

export interface dbProduct {
  _id: any;
  createdAt: any;
  updatedAt: any;
  title: string;
  slug: string;
  category: string;
  images: {
    _id: any;
    slug: string;
    url: string;
    sizes: number[];
  }[];
  description: string;
  price: number;
}

export interface cartItem {
  slug: string;
  title: string;
  image: {
    slug: string;
    url: string;
    sizes: number[];
  };
  description: string;
  price: Number;
  quantity: number;
}

export interface cart {
  totalQuantity: number;
  totalPrice: number;
  cartItems: cartItem[];
}

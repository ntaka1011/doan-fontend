export interface Product {
  _id: string;
  title: string;
  price: number;
  desc: string;
  new: boolean;
  quantity: number;
  size: [object];
  images: [string];
  thumbnail: string;
  original_price: number;
  feature: boolean;
  slug: string;
  createAt: Date;
  UpdateAt: Date;
}

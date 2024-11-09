export type ProductType = {
  id: number;
  description: string;
  category: string;
  price: number;
  title: string;
  image: string;
};

export interface TableProductType extends ProductType {
  quantity: number;
}

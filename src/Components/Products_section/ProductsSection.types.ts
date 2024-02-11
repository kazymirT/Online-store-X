export type Props = {
  categoryName: string;
  products: {
    name: string;
    price: { normalPrice: string; salePrice?: string };
    images: string[];
    like: boolean;
  }[];
  sliderSettings: {
    rows: number;
  };
};

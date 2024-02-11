export type Props = {
  product: {
    name: string;
    price: { normalPrice: string; salePrice?: string };
    images: string[];
    like: boolean;
  };
};

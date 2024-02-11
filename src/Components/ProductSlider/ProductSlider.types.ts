export type PropsSlider = {
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

export type PropsArrow = {
  onClick?: () => void;
  className?: string;
};

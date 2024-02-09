import shoes from '../Assets/adidas-shoes.png';
import shoes2 from '../Assets/adidas-shoes2.png';

export const ROUTE_PATH: Record<string, string> = {
  HOME: '/',
  MEN: 'men',
  WOMEN: 'women',
  KIDS: 'kids',
  SALE: 'sale',
  PAGE404: '*',
};
export const pages = ['HOME', 'MEN', 'WOMEN', 'KIDS', 'SALE'];

export const Props = {
  categoryName: 'Sale',
  products: [
    {
      name: 'Adidas Adifom Climacool J Core',
      price: { normalPrice: '50', salePrice: '46' },
      images: [shoes, shoes2],
      like: false,
    },
    {
      name: 'Adidas Adifom Climacool J Core',
      price: { normalPrice: '50', salePrice: '46' },
      images: [shoes, shoes2],
      like: false,
    },
    {
      name: 'Adidas Adifom Climacool J Core',
      price: { normalPrice: '50', salePrice: '46' },
      images: [shoes, shoes2],
      like: false,
    },
    {
      name: 'Adidas Adifom Climacool J Core',
      price: { normalPrice: '50', salePrice: '46' },
      images: [shoes, shoes2],
      like: false,
    },
    {
      name: 'Adidas Adifom Climacool J Core',
      price: { normalPrice: '50', salePrice: '46' },
      images: [shoes, shoes2],
      like: false,
    },
    {
      name: 'Adidas Adifom Climacool J Core',
      price: { normalPrice: '50', salePrice: '46' },
      images: [shoes, shoes2],
      like: false,
    },
    {
      name: 'Adidas Adifom Climacool J Core',
      price: { normalPrice: '50', salePrice: '46' },
      images: [shoes, shoes2],
      like: false,
    },
    {
      name: 'Adidas Adifom Climacool J Core',
      price: { normalPrice: '50', salePrice: '46' },
      images: [shoes, shoes2],
      like: false,
    },
  ],
  sliderSetting: {
    rows: 1,
  },
};

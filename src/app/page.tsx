import CardProduct from '@/components/Cards/CardProduct';
import CardsGrid from '@/components/layouts/CardsGrid';
import { MOCK_CATEGORIES, MOCK_PRODUCT_CARDS } from '@/global/vars';
import Categories from '@/sections/Categories';
import ProductsHome from '@/sections/ProductsHome';

export default function Home() {
  return (
    <>
      <Categories categories={MOCK_CATEGORIES} />
      <ProductsHome products={MOCK_PRODUCT_CARDS} />
    </>
  );
}

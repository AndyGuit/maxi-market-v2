import { MOCK_CATEGORIES } from '@/global/vars';
import Categories from '@/sections/Categories';

export default function Home() {
  return <Categories categories={MOCK_CATEGORIES} />;
}

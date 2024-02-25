import CardCategory from '@/components/Cards/CardCategory';
import CardsGrid from '@/components/layouts/CardsGrid';
import Button from '@/components/UI/Button';
import { MOCK_CATEGORIES } from '@/global/vars';

export default function Home() {
  return (
    <section className='bg-grey-bg-1 py-10'>
      <div className='container'>
        <h2 className='header-1 text-center mb-4'>Категорії товарів</h2>
        <CardsGrid>
          {MOCK_CATEGORIES.map((category, i) => (
            <CardCategory key={i} {...category} />
          ))}
        </CardsGrid>
        <div className='flex justify-center mt-8'>
          <Button style='secondary' type='button'>
            Дивитися більше
          </Button>
        </div>
      </div>
    </section>
  );
}

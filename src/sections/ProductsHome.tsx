import CardProduct from '@/components/Cards/CardProduct';
import CardsGrid from '@/components/layouts/CardsGrid';
import { ProductCard } from '@/types/interfaces';

type Props = {
  products: ProductCard[];
};

export default function ProductsHome(props: Props) {
  return (
    <section className='my-10 md:my-20'>
      <div className='container'>
        <h2 className='header-1 mb-4 text-center md:text-left md:mb-6'>Акційні товари</h2>
        <CardsGrid>
          {props.products.map((card, i) => (
            <CardProduct key={i} {...card} />
          ))}
        </CardsGrid>
      </div>
    </section>
  );
}

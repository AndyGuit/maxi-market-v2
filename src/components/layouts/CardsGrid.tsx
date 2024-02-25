type Props = {
  children?: React.ReactNode;
};

export default function CardsGrid(props: Props) {
  return (
    <div className='flex flex-wrap justify-center md:justify-start lg:justify-center md:gap-6 gap-4'>
      {props.children}
    </div>
  );
}

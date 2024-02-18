import { NavBar } from '@/types/types';
import { IconMainLogo } from '../Icons/Icons';
import NavLinks from '../Nav/NavLinks';
import NavSocial from '../Nav/NavSocial';

// TODO: move this to globals file
const NAVBARS: NavBar[] = [
  {
    heading: 'Інфомація',
    links: [
      {
        title: 'Про нас',
        href: '/',
      },
      {
        title: 'Контакти',
        href: '/',
      },
      {
        title: 'Зв`язатися з нами',
        href: '/',
      },
    ],
  },
  {
    heading: 'Навігація',
    links: [
      {
        title: 'Категорії товарів',
        href: '/',
      },
      {
        title: 'Акційні товари',
        href: '/',
      },
      {
        title: 'Купувати та продавати',
        href: '/',
      },
    ],
  },
  {
    heading: 'Обліковий запис',
    links: [
      {
        title: 'Особистий кабінет',
        href: '/',
      },
      {
        title: 'Історія покупок',
        href: '/',
      },
      {
        title: 'Мої оголошення',
        href: '/',
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-tertiary body-1 px-4 py-10 flex flex-col items-center gap-5 md:gap-10 md:py-16 md:px-10 xl:flex-row xl:justify-between xl:p-20 2xl:px-[200px] 2xl:pt-[60px] 2xl:pb-[180px]">
      <div className="flex flex-col gap-5 items-center md:gap-10 lg:items-start xl:gap-16">
        <div className="w-[100px] h-12">
          <IconMainLogo />
        </div>
        <NavSocial />
      </div>
      <div className="w-full flex flex-col gap-2 md:flex-row md:justify-between lg:max-w-[945px]">
        {NAVBARS.map((nav, i) => (
          <NavLinks key={i} {...nav} />
        ))}
      </div>
    </footer>
  );
}

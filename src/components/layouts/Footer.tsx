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
    <footer className="bg-tertiary body-1 px-4 py-10 flex flex-col items-center gap-5">
      <div className="w-[100px] h-12">
        <IconMainLogo />
      </div>
      <NavSocial />
      <div className="w-full flex flex-col gap-2">
        {NAVBARS.map(nav => (
          <NavLinks {...nav} />
        ))}
      </div>
    </footer>
  );
}

import { NavBar } from '@/types/types';
import Link from 'next/link';

export default function NavLinks(props: NavBar) {
  return (
    <nav className="text-white body-1 px-[6px] py-3 border-b-[1px]">
      <h3 className="subtitle-2 mb-4">{props.heading}</h3>
      <ul className="flex flex-col gap-2">
        {props.links.map(link => (
          <li>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

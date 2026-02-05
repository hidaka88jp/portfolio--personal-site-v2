import Link from 'next/link';
import { NAV_LINKS, SOCIAL_LINKS } from '@/constants/navigation';

type Props = {
  className: string;
};

export default function DesktopNavigation({ className }: Props) {
  return (
    <nav data-testid='desktop-nav' className={`${className} flex items-center space-x-6`}>
      <ul className='flex space-x-9'>
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className='hover:text-accent'>
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <div className='bg-gray h-2.5 w-px' />
      <ul className='flex space-x-9'>
        {SOCIAL_LINKS.map(({ href, label }) => (
          <li key={href}>
            <a href={href} target='_blank' rel='noopener noreferrer' className='hover:text-accent'>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

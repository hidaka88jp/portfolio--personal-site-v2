import Link from 'next/link';
import { MdArrowForwardIos } from 'react-icons/md';

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function LinkButton({ href, children }: Props) {
  return (
    <Link
      href={href}
      className='border-gray hover:border-accent hover:text-accent inline-flex items-center gap-1.5 rounded-md border py-2 pr-2.5 pl-4 transition-colors'
    >
      {children}
      <MdArrowForwardIos size={14} />
    </Link>
  );
}

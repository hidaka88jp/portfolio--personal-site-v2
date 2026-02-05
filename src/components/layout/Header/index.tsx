import { Antonio } from 'next/font/google';
import Link from 'next/link';

const antonio = Antonio({
  subsets: ['latin'],
});

export default function Header() {
  return (
    <header className='px-4 pt-4 pb-5 sm:px-8 sm:pt-9 sm:pb-7'>
      <div className='mx-auto flex w-full max-w-94 items-center justify-between sm:max-w-5xl sm:items-baseline'>
        <Link href='/'>
          <h1
            className={`${antonio.className} text-3xl tracking-[.18em] sm:text-4xl`}
            aria-label='Takanori Hidaka'
          >
            <span className='text-accent'>T</span>AKANORI <span className='text-accent'>H</span>
            IDIKA
          </h1>
        </Link>
        <div>Nav</div>
      </div>
    </header>
  );
}

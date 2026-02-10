'use client';

import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';
import { NAV_LINKS, SOCIAL_LINKS } from '@/constants/navigation';
import { setThemeColor } from '@/lib/themeColor';
import { MdArrowForward } from 'react-icons/md';
import { BiMenuAltRight } from 'react-icons/bi';

type Props = {
  className: string;
};

export default function MobileNavigation({ className }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setThemeColor(isOpen ? '#434343' : '#ffffff');
  }, [isOpen]);

  return (
    <div className={className}>
      {/* Menu Button to open */}
      <button
        className='relative block cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
        aria-label='Open menu'
      >
        <BiMenuAltRight size={36} className='fill-gray' />
      </button>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div
          data-testid='overlay'
          className='fixed inset-0 z-20 bg-black/30'
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Navigation Menu */}
      <nav
        data-testid='mobile-nav'
        className={clsx(
          'bg-gray fixed inset-y-0 right-0 z-30 flex w-64 flex-col items-center justify-start space-y-6 text-lg text-white transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <button
          className='absolute top-4 right-1 h-11 w-11 cursor-pointer'
          onClick={() => setIsOpen(false)}
          aria-label='Close menu'
        >
          <MdArrowForward size={28} className='fill-white' />
        </button>
        <div className='flex flex-col items-center space-y-4 pt-24'>
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setIsOpen(false)}>
              {label}
            </Link>
          ))}
        </div>
        <div className='h-px w-8 bg-white' />
        <div className='flex flex-col items-center space-y-4'>
          {SOCIAL_LINKS.map(({ href, label }) => (
            <a
              href={href}
              key={href}
              target='_blank'
              rel='noopener noreferrer'
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}

import LinkButton from '@/components/shared/LinkButton';
import Image from 'next/image';

export default function NotFound() {
  return (
    <section className='px-4 pb-16 sm:px-8 sm:pb-28'>
      <div className='mx-auto w-full max-w-94 sm:max-w-5xl'>
        <div className='mb-10 grid grid-cols-1 gap-6 text-center sm:grid-cols-2 sm:gap-1'>
          <Image
            src='/images/404.webp'
            height={1440}
            width={1920}
            alt='404'
            sizes='(max-width: 640px) 100vw, 50vw'
            className='sm:order-2'
          />
          <div className='flex flex-col items-center justify-center sm:order-1'>
            <h1 className='font-inconsolata mb-2 text-4xl font-bold'>404 - Not Found</h1>
            <div className='bg-accent mb-6 h-1 w-8' />
            <p>Sorry, the page you’re looking for doesn’t exist.</p>
            <div className='mt-10'>
              <LinkButton href='/'>Back to Top</LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

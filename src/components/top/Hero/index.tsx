import Image from 'next/image';

export default function Hero() {
  return (
    <section className='relative mb-20 h-80 w-full overflow-hidden sm:h-96'>
      <Image
        src='/images/hero.webp'
        alt='Hero Image'
        fill
        className='object-cover object-left'
        priority
      />
      <div className='absolute inset-0 flex items-end px-4 sm:px-8'>
        <div className='relative mx-auto w-full max-w-90 px-5 py-7 sm:max-w-5xl sm:px-0 sm:py-14'>
          {/* Decorative overlay */}
          <div className='absolute bottom-1 -left-20 h-48 w-[150%] origin-bottom-left translate-y-2 rotate-[-8deg] bg-black opacity-60 sm:-left-57.5 sm:h-80 sm:origin-bottom-left sm:-translate-y-100 sm:rotate-60' />
          <pre className='font-inconsolata relative z-10 text-2xl font-light text-white sm:text-3xl'>
            {`while (code) {
  learn();
  create();
  drinkCoffee();
}`}
          </pre>
        </div>
      </div>
    </section>
  );
}

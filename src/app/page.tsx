import Hero from '@/components/top/Hero';
import About from '@/components/top/About';
import TopWorks from '@/components/top/TopWorks';

export default function Home() {
  return (
    <>
      <Hero />
      <div className='px-4 sm:px-8'>
        <div className='mx-auto w-full max-w-94 sm:max-w-5xl'>
          <About />
          <TopWorks />
        </div>
      </div>
    </>
  );
}

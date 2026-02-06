import TopSectionTitle from '@/components/shared/TopSectionTitle';

export default function About() {
  return (
    <section id='about' className='px-4 pb-16 sm:px-8 sm:pb-20'>
      <div className='mx-auto w-full max-w-94 sm:max-w-5xl'>
        <TopSectionTitle title='About' subTitle='Introduce Myself' />
      </div>
    </section>
  );
}

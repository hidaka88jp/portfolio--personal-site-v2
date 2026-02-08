import { notFound } from 'next/navigation';
import { getWorkDetail } from '@/lib/microcms';
import LinkButton from '@/components/shared/LinkButton';

type WorkDetailPageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ from?: string; draftKey?: string }>;
};

export async function generateMetadata({ params, searchParams }: WorkDetailPageProps) {
  const { id } = await params;
  const { draftKey } = await searchParams;

  const work = await getWorkDetail(id, draftKey);

  if (!work) return {};
  return {
    title: work.title,
  };
}

export default async function WorkDetailPage({ params, searchParams }: WorkDetailPageProps) {
  const { id } = await params;
  const { draftKey } = await searchParams;
  const work = await getWorkDetail(id, draftKey);

  if (!work) {
    notFound();
  }

  return (
    <article className='px-4 pb-16 sm:px-8 sm:pb-28'>
      <div className='mx-auto w-full max-w-94 sm:max-w-5xl'>
        <div
          className='article mb-10 md:mb-14'
          dangerouslySetInnerHTML={{ __html: work.content }}
        />
        <div className='flex flex-col items-center justify-center'>
          <LinkButton href={'/#works'}>Back to Works</LinkButton>
        </div>
      </div>
    </article>
  );
}

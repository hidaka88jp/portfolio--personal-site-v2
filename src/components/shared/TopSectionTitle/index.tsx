type Props = {
  title: string;
  subTitle: string;
};

export default function TopSectionTitle({ title, subTitle }: Props) {
  return (
    <div className='font-inconsolata flex flex-col items-center space-y-1 pb-5 sm:pb-12'>
      <h2 className='text-4xl'>{title}</h2>
      <div className='flex items-center gap-1'>
        <div className='bg-accent h-0.5 w-2' />
        <p>{subTitle}</p>
        <div className='bg-accent h-0.5 w-2' />
      </div>
    </div>
  );
}

type Props = {
  name: string;
  Icon?: React.ComponentType<{ className?: string }>;
  color: string;
};

export default function TechStackBadge({ name, Icon, color }: Props) {
  return (
    <div
      className='flex w-fit items-center gap-1 rounded-md border px-2 py-1 text-white'
      style={{ backgroundColor: color, borderColor: color }}
    >
      {Icon && <Icon className='h-4 w-4' />}
      <p>{name}</p>
    </div>
  );
}

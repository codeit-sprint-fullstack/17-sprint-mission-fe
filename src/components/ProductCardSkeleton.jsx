export default function ProductCardSkeleton() {
  return (
    <li className='animate-pulse' aria-hidden='true'>
      <div className='bg-secondary-100 aspect-square rounded-xl md:rounded-2xl' />
      <div className='mt-4 flex flex-col gap-1.5'>
        <div className='h-5 w-3/4 rounded bg-secondary-100' />
        <div className='h-6 w-1/2 rounded bg-secondary-100' />
      </div>
    </li>
  );
}

import { Outlet } from 'react-router';

export default function Contents() {
  return (
    <div className='page-contents pt-6.5 pb-40.5'>
      <Outlet />
    </div>
  );
}

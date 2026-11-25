import { Link, NavLink } from 'react-router';
import { ROUTES } from '../constants/routes';
import Button from './Button';
import logo from '../assets/images/logo.png';
import logoTypo from '../assets/images/logo_typo.png';

const navLinkStyle =
  'inline-block h-full text-lg-bold text-secondary-600 md:text-2lg-bold aria-[current=page]:text-primary-100';

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-10 h-[4.38rem] border-b border-[#dfdfdf] bg-white px-4 px-[clamp(16px,calc((100%_-_75rem)/2),12.5rem)]'>
      <div className='inner-wide flex items-center gap-2 md:gap-5 pc:gap-6'>
        <Link to={ROUTES.HOME} className='w-[5.06rem] md:w-[9.56rem]'>
          <img className='hidden md:block' src={logo} alt='판다마켓' />
          <img className='md:hidden' src={logoTypo} alt='판다마켓' />
        </Link>
        <nav>
          <ul className='flex gap-2 md:gap-[1.88rem]'>
            <li>
              <NavLink to={ROUTES.BOARD} className={navLinkStyle}>
                자유게시판
              </NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.ITEMS} className={navLinkStyle}>
                중고마켓
              </NavLink>
            </li>
          </ul>
        </nav>
        <Button href={ROUTES.LOGIN} size='sm-42' className='ml-auto'>
          로그인
        </Button>
      </div>
    </header>
  );
}

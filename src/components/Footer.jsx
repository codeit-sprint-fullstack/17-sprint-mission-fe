import { Link } from 'react-router';
import { ROUTES } from '../constants/routes';
import icFacebook from '../assets/images/ic_facebook.png';
import icTwitter from '../assets/images/ic_twitter.png';
import icYoutube from '../assets/images/ic_youtube.png';
import icInstagram from '../assets/images/ic_instagram.png';

const SNS_LINKS = [
  {
    href: 'https://www.facebook.com/?locale=ko_KR',
    icon: icFacebook,
    label: '페이스북',
  },
  { href: 'https://x.com/?lang=ko', icon: icTwitter, label: '트위터' },
  {
    href: 'https://www.youtube.com/?hl=ko&gl=KR&app=desktop',
    icon: icYoutube,
    label: '유튜브',
  },
  { href: 'https://www.instagram.com', icon: icInstagram, label: '인스타그램' },
];

export default function Footer() {
  return (
    <footer className='bg-secondary-900 px-[clamp(24px,calc((100%_-_75rem)/2),12.5rem)] pt-8 pb-[6.75rem]'>
      <div className='inner-wide flex flex-wrap justify-between gap-6'>
        <p className='order-1 text-secondary-400 md:order-none'>©codeit-2024</p>
        <ul className='flex gap-[1.88rem] text-secondary-200'>
          <li>
            <Link to={ROUTES.PRIVACY}>Privacy Policy</Link>
          </li>
          <li>
            <Link to={ROUTES.FAQ}>FAQ</Link>
          </li>
        </ul>
        <ul className='flex gap-3'>
          {SNS_LINKS.map(({ href, icon, label }) => (
            <li key={href} className='size-5'>
              <a href={href} target='_blank' rel='noopener noreferrer'>
                <img src={icon} alt={label} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

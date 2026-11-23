import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import logoMobile from '../assets/logo-mobile.png'
import './LandingHeader.css'

function LandingHeader() {
    return (
        <header className='landing-header'>
            <div className='landing-header-inner'>
                <Link to='/' className='landing-header-logo'>
                    <picture>
                        <source media='(max-width: 743px)' srcSet={logoMobile} />
                        <img src={logo} alt='판다마켓'/>
                    </picture>
                </Link>
                <button type='button' className='landing-header-login'>
                    로그인
                </button>
            </div>
        </header>
    )
}

export default LandingHeader
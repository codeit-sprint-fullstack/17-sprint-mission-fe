import { Link } from 'react-router-dom'
import LandingHeader from '../components/LandingHeader'
import FeatureSection from '../components/FeatureSection'
import Footer from '../components/Footer'
import { HERO_IMAGE, CTA_IMAGE, FEATURES } from '../constants/landing'
import './LandingPage.css'

function LandingPage() {
  return (
    <>
      <LandingHeader />
      <main className="landing">
        <section className="landing-hero">
          <div className="landing-hero-inner">
            <div className="landing-hero-text">
              <h1>
                일상의 모든 물건을{' '}
                <br className="landing-br" />
                거래해 보세요
              </h1>
              <Link to="/items" className="landing-hero-btn">
                구경하러 가기
              </Link>
            </div>
            <img
              className="landing-hero-img"
              src={HERO_IMAGE.src}
              srcSet={HERO_IMAGE.srcSet}
              alt="판다마켓 히어로 이미지"
            />
          </div>
        </section>

        <div className="landing-features">
          {FEATURES.map((feature) => (
            <FeatureSection key={feature.id} {...feature} />
          ))}
        </div>

        <section className="landing-cta">
          <div className="landing-cta-inner">
            <h2>
              믿을 수 있는
              <br />
              판다마켓 중고 거래
            </h2>
            <img
              className="landing-cta-img"
              src={CTA_IMAGE.src}
              srcSet={CTA_IMAGE.srcSet}
              alt="판다마켓 중고 거래"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default LandingPage

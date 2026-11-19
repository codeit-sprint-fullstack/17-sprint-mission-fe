import { Link } from 'react-router-dom'
import './landing.css'

const features = [
  {
    label: 'Hot item',
    image: 'section01.jpg',
    title: <>인기 상품을<br />확인해 보세요</>,
    description: <>가장 HOT한 중고거래 물품을<br />판다 마켓에서 확인해 보세요</>,
  },
  {
    label: 'Search',
    image: 'section02.jpg',
    title: <>구매를 원하는<br />상품을 검색하세요</>,
    description: <>구매하고 싶은 물품을 검색해서<br />쉽게 찾아보세요</>,
  },
  {
    label: 'Register',
    image: 'section03.jpg',
    title: <>판매를 원하는<br />상품을 등록하세요</>,
    description: <>어떤 물건이든 판매하고 싶은 상품을<br />쉽게 등록하세요</>,
  },
]

export default function Landing() {
  return (
    <main className="landing-page">
      <section className="landing-banner">
        <div className="landing-banner-inner">
          <div>
            <h1>일상의 모든 물건을<br />거래해 보세요</h1>
            <Link className="primary landing-cta" to="/items">구경하러 가기</Link>
          </div>
          <img src="/landing/banner.png" alt="" />
        </div>
      </section>
      {features.map(({ label, image, title, description }) => (
        <section className="landing-feature" key={label}>
          <div className="landing-feature-inner">
            <img src={`/landing/${image}`} alt="" loading="lazy" />
            <div>
              <span>{label}</span>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </section>
      ))}
      <section className="landing-banner landing-closing">
        <div className="landing-banner-inner">
          <h2>믿을 수 있는<br />판다마켓 중고 거래</h2>
          <img src="/landing/section04.png" alt="" loading="lazy" />
        </div>
      </section>
    </main>
  )
}

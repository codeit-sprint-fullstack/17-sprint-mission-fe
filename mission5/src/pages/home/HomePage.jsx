import { Link } from 'react-router';
const sections=[
  {image:'Img_home_01.png',label:'Hot items',title:<>인기 상품을<br/>확인해 보세요</>,description:<>가장 HOT한 중고거래 물품을<br/>판다 마켓에서 확인해 보세요</>},
  {image:'Img_home_02.png',label:'Search',title:<>구매를 원하는<br/>상품을 검색하세요</>,description:<>구매하고 싶은 물품은<br/>검색해서 쉽게 찾아보세요</>,reverse:true},
  {image:'Img_home_03.png',label:'Register',title:<>판매를 원하는<br/>상품을 등록하세요</>,description:<>어떤 물건이든 판매하고 싶은 상품을<br/>쉽게 등록하세요</>}
];
export default function HomePage() {
  return <div className="home-page">
    <section className="hero hero-top"><div className="hero-inner">
      <div className="hero-text"><h1>일상의 모든 물건을<br/>거래해 보세요</h1><Link to="/items" className="hero-btn">구경하러 가기</Link></div>
      <img className="hero-img" src="/images/Img_home_top.png" alt="판다마켓 캐릭터"/>
    </div></section>
    <div className="features">{sections.map(s=><section className="feature" key={s.label}>
      <div className={'feature-inner'+(s.reverse?' reverse':'')}>
        <img className="feature-img" src={'/images/'+s.image} alt="" />
        <div className="feature-text"><span className="feature-name">{s.label}</span><h2>{s.title}</h2><p>{s.description}</p></div>
      </div></section>)}</div>
    <section className="hero hero-bottom"><div className="hero-inner"><h2>믿을 수 있는<br/>판다마켓 중고 거래</h2><img className="hero-img" src="/images/Img_home_bottom.png" alt="판다마켓 캐릭터"/></div></section>
  </div>;
}

import { Link } from "react-router";

export default function HomePage() {
    return(
    <main className="main">
        <div className="top-bottom">
            <div className="items">
                <div className="items-text">
                    <p>일상의 모든 물건을<br/>거래해 보세요</p>
                    <Link to="/items" style={{'textDecoration': 'none'}}><div className="item-link">구경하러 가기</div></Link>
                </div>
                <img className="topbottom-img" src="/img/img_home_top.png" alt="소개 이미지"/>
            </div>
        </div>
        <div className="content">
            <div className="content-items">
                <div className="content-items-text">
                    <p className="topic">Hot item</p>
                    <p className="main-text">인기 상품을<br/>확인해 보세요</p>
                    <p className="sub-text">가장 HOT한 중고거래 물품을<br/>판다 마켓에서 확인해 보세요</p>
                </div>
                <img className="banner-img" src="/img/img_home_01.png" alt="배너 이미지 1"/>
            </div>
        </div>
        <div className="content">
            <div className="content-items" id="even">
                <div className="content-items-text">
                    <p className="topic">Search</p>
                    <p className="main-text">구매를 원하는<br/>상품을 검색하세요</p>
                    <p className="sub-text">구매하고 싶은 물품은 검색해서<br/>쉽게 찾아보세요</p>
                </div>
                <img className="banner-img" src="/img/img_home_02.png" alt="배너 이미지 2"/>
            </div>
        </div>
        <div className="content">
            <div className="content-items">
                <div className="content-items-text">
                    <p className="topic">Register</p>
                    <p className="main-text">판매를 원하는<br/>상품을 등록하세요</p>
                    <p className="sub-text">어떤 물건이든 판매하고 싶은 상품을<br/>쉽게 등록하세요</p>
                </div>
                <img className="banner-img" src="/img/img_home_03.png" alt="배너 이미지 3"/>
            </div>
        </div>
        <div className="top-bottom">
            <div className="items">
                <div className="items-text">
                    <p>믿을 수 있는<br/>판다마켓 중고 거래</p>
                </div>
                <img className="topbottom-img" src="/img/img_home_bottom.png" alt="푸터 이미지"/>
            </div>
        </div>
    </main>
    );
}
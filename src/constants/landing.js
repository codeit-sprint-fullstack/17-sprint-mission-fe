import top1x from '../assets/landing/Img_home_top.png'
import top2x from '../assets/landing/Img_home_top@2x.png'
import top3x from '../assets/landing/Img_home_top@3x.png'
import hot1x from '../assets/landing/Img_home_01.png'
import hot2x from '../assets/landing/Img_home_01@2x.png'
import hot3x from '../assets/landing/Img_home_01@3x.png'
import search1x from '../assets/landing/Img_home_02.png'
import search2x from '../assets/landing/Img_home_02@2x.png'
import search3x from '../assets/landing/Img_home_02@3x.png'
import register1x from '../assets/landing/Img_home_03.png'
import register2x from '../assets/landing/Img_home_03@2x.png'
import register3x from '../assets/landing/Img_home_03@3x.png'
import bottom1x from '../assets/landing/Img_home_bottom.png'
import bottom2x from '../assets/landing/Img_home_bottom@2x.png'
import bottom3x from '../assets/landing/Img_home_bottom@3x.png'

function createImage(x1, x2, x3) {
    return { src: x1, srcSet: `${x2} 2x, ${x3} 3x`}
}

export const HERO_IMAGE = createImage(top1x, top2x, top3x)
export const CTA_IMAGE = createImage(bottom1x, bottom2x, bottom3x)

export const FEATURES = [
    {
        id: 1,
        image: createImage(hot1x, hot2x, hot3x),
        alt: '인기 상품',
        label: 'Hot item',
        title: ['인기 상품을', '확인해 보세요'],
        description: ['가장 HOT한 중고거래 물품을', '판다 마켓에서 확인해 보세요'],
    },
    {
        id: 2,
        image: createImage(search1x, search2x, search3x),
        alt: '상품 검색',
        label: 'Search',
        title: ['구매를 원하는', '상품을 검색하세요'],
        description: ['구매하고 싶은 물품은 검색해서', '쉽게 찾아보세요'],
    },
    {
        id: 3,
        image: createImage(register1x, register2x, register3x),
        alt: '상품 등록',
        label: 'Register',
        title: ['판매를 원하는', '상품을 등록하세요'],
        description: ['어떤 물건이든 판매하고 싶은 상품을', '쉽게 등록하세요'],
    },
]
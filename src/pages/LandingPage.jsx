import { ROUTES } from '../constants/routes';
import Button from '../components/Button';
import imgHomeTop from '../assets/images/Img_home_top.png';
import imgHome01 from '../assets/images/Img_home_01.png';
import imgHome02 from '../assets/images/Img_home_02.png';
import imgHome03 from '../assets/images/Img_home_03.png';
import imgHomeBottom from '../assets/images/Img_home_bottom.png';

const brHiddenTablet = 'md:max-pc:hidden'; // 768px 이상 1200px미만 display: none
const brHiddenUnderLg = 'max-lg:hidden'; // 1024px 미만 display: none

function FeatureSection({ img, label, title, reverse = false, children }) {
  return (
    <section className='lg:py-[8.63rem]'>
      <div
        className={`inner-sm flex flex-col gap-6 flex-wrap lg:items-center lg:justify-center lg:gap-16 ${
          reverse
            ? 'items-end text-right lg:flex-row-reverse'
            : 'items-start lg:flex-row'
        }`}
      >
        <div className='w-full lg:w-[36.56rem]'>
          <img src={img} alt='' />
        </div>
        <div className='text-secondary-700'>
          <span className='text-lg-bold text-primary-100 md:text-2lg-bold'>
            {label}
          </span>
          <h2 className='mt-2 mb-4 text-2xl-bold tracking-[0.02em] md:mt-3 md:mb-6 md:text-3xl-bold lg:text-[2.5rem]/[1.4]'>
            {title}
          </h2>
          <p className='text-lg-medium md:text-2lg-medium lg:text-2xl-medium'>
            {children}
          </p>
        </div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <>
      <section className='bg-lightblue'>
        <div className='inner-md flex flex-col items-center pt-12 md:pt-[5.25rem] pc:flex-row pc:items-end pc:justify-between pc:pt-[12.5rem]'>
          <div className='mb-[8.25rem] text-center md:mb-[13.19rem] pc:mb-[9%] pc:text-left'>
            <h1 className='text-[2rem]/[1.4] font-bold text-secondary-700 md:text-[2.5rem]/[1.4]'>
              일상의 모든 물건을
              <br className={brHiddenTablet} /> 거래해 보세요
            </h1>
            <Button
              href={ROUTES.ITEMS}
              size='lg'
              className='mx-auto mt-[1.13rem] max-md:h-12 max-md:w-60 max-md:text-2lg-semibold md:mt-6 pc:mx-0 pc:mt-8'
            >
              구경하러 가기
            </Button>
          </div>
          <div className='w-[120%] md:w-full pc:w-[46.63rem]'>
            <img src={imgHomeTop} alt='' />
          </div>
        </div>
      </section>

      <div className='page-contents flex flex-col gap-10 pt-[3.25rem] pb-[5.19rem] md:gap-[3.25rem] md:pt-6 md:pb-14 lg:gap-0 lg:py-0'>
        <FeatureSection
          img={imgHome01}
          label='Hot item'
          title={
            <>
              인기 상품을
              <br className={brHiddenUnderLg} /> 확인해 보세요
            </>
          }
        >
          가장 HOT한 중고거래 물품을
          <br />
          판다 마켓에서 확인해 보세요
        </FeatureSection>
        <FeatureSection
          img={imgHome03}
          label='Search'
          reverse
          title={
            <>
              구매를 원하는
              <br className={brHiddenUnderLg} /> 상품을 검색하세요
            </>
          }
        >
          구매하고 싶은 물품은 검색해서
          <br />
          쉽게 찾아보세요
        </FeatureSection>
        <FeatureSection
          img={imgHome02}
          label='Register'
          title={
            <>
              판매를 원하는
              <br className={brHiddenUnderLg} /> 상품을 등록하세요
            </>
          }
        >
          어떤 물건이든 판매하고 싶은 상품을
          <br />
          쉽게 등록하세요
        </FeatureSection>
      </div>

      <section className='bg-lightblue lg:mt-[8.63rem]'>
        <div className='inner-md flex flex-col items-center pt-[7.56rem] md:pt-[12.56rem] pc:flex-row pc:flex-wrap pc:items-end pc:justify-between pc:pt-[8.94rem]'>
          <h2 className='mb-[8.19rem] text-center text-[2rem]/[1.4] font-bold text-secondary-700 md:mb-[13.56rem] md:text-[2.5rem]/[1.4] pc:mb-[15.54%] pc:text-left'>
            믿을 수 있는
            <br />
            판다마켓 중고 거래
          </h2>
          <div className='w-full pc:w-[46.63rem]'>
            <img src={imgHomeBottom} alt='' />
          </div>
        </div>
      </section>
    </>
  );
}

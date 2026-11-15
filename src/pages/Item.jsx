import { useState, useEffect } from 'react';
import { getProducts } from '../api/productApi.js';
import useBreakpoint from '../hooks/useBreakpoint.js';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import SortDropdown from '../components/SortDropdown';
import Pagination from '../components/Pagination';
import icSearch from '../assets/images/ic_search.png';

const SORT_OPTIONS = [
  { value: 'recent', label: '최신순' },
  { value: 'favorite', label: '좋아요순' },
];

const BEST_PAGE_SIZE = { mobile: 1, tablet: 2, pc: 4 };
const ALL_PAGE_SIZE = { mobile: 4, tablet: 6, pc: 10 };

export default function Item() {
  const breakpoint = useBreakpoint();
  const [bestProducts, setBestProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [orderBy, setOrderBy] = useState('recent');
  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  // 베스트 상품
  useEffect(() => {
    const fetchBestProducts = async () => {
      try {
        const data = await getProducts({
          orderBy: 'favorite',
          pageSize: BEST_PAGE_SIZE[breakpoint],
        });
        setBestProducts(data.list);
      } catch (err) {
        setError(err);
      }
    };
    fetchBestProducts();
  }, [breakpoint]);

  // 판매 중인 상품
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const data = await getProducts({
          orderBy,
          keyword,
          page,
          pageSize: ALL_PAGE_SIZE[breakpoint],
        });
        setAllProducts(data.list);
        setTotalCount(data.totalCount);
      } catch (err) {
        setError(err);
      }
    };
    fetchAllProducts();
  }, [orderBy, keyword, page, breakpoint]);

  const handleSortChange = (value) => {
    setOrderBy(value);
    setPage(1);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.keyword.value.trim();
    setKeyword(value);
    setPage(1);
  };

  if (error) {
    return <p className='inner py-10 text-center'>상품을 불러오지 못했어요.</p>;
  }

  return (
    <>
      <section className='inner pt-[1.06rem] pb-6 md:pt-6 md:pb-10'>
        <h2 className='text-xl-bold text-secondary-900'>베스트 상품</h2>
        <ul className='mt-4 grid grid-cols-1 gap-2.5 md:grid-cols-2 pc:grid-cols-4 pc:gap-6'>
          {bestProducts.map((prd) => (
            <ProductCard
              key={prd.id}
              variant='best'
              thumbSrc={prd.images[0]}
              title={prd.name}
              price={prd.price}
              favoriteCount={prd.favoriteCount}
            />
          ))}
        </ul>
      </section>
      <section className='inner pb-[8.44rem] md:pb-[10.31rem] pc:pb-35'>
        <div className='flex flex-wrap items-center gap-x-3.5 gap-y-2 md:flex-nowrap md:gap-3'>
          <h2 className='order-1 mr-auto text-xl-bold text-secondary-900 md:order-0'>
            판매 중인 상품
          </h2>
          <form
            onSubmit={handleSearch}
            className='relative order-3 w-[calc(100%-3.5rem)] md:order-0 md:w-[15.13rem] pc:w-[20.31rem]'
          >
            <img
              src={icSearch}
              alt=''
              className='absolute top-1/2 left-4 size-6 -translate-y-1/2'
            />
            <input
              type='text'
              name='keyword'
              placeholder='검색할 상품을 입력해주세요'
              aria-label='상품 검색'
              className='h-10.5 py-0 pr-2 pl-11'
            />
          </form>
          <Button
            size='sm-42'
            className='order-2 w-auto px-[1.44rem] md:order-0'
          >
            상품 등록하기
          </Button>
          <SortDropdown
            options={SORT_OPTIONS}
            value={orderBy}
            onChange={handleSortChange}
            className='order-4 md:order-0'
          />
        </div>
        {allProducts.length === 0 ? (
          <p className='py-20 text-center text-lg-regular text-secondary-400'>
            검색 결과가 없어요.
          </p>
        ) : (
          <ul className='mt-4 grid grid-cols-2 gap-x-2 gap-y-8 md:mt-6 md:grid-cols-3 md:gap-x-4 md:gap-y-10 pc:grid-cols-5 pc:gap-x-6'>
            {allProducts.map((prd) => (
              <ProductCard
                key={prd.id}
                thumbSrc={prd.images[0]}
                title={prd.name}
                price={prd.price}
                favoriteCount={prd.favoriteCount}
              />
            ))}
          </ul>
        )}
        <Pagination
          currentPage={page}
          totalPage={Math.ceil(totalCount / ALL_PAGE_SIZE[breakpoint])}
          onChange={setPage}
          className='mt-10'
        />
      </section>
    </>
  );
}
